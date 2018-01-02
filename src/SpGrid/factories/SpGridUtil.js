function SpGridUtil( $filter, $q, SpGridConstant ){
    return  {
        /**
         * 배열안에 객체를 탐색해서 원하는 필드값을 리턴
         * @param array - 배열
         * @param key - 키값
         * @param sourceField - 소스필드
         * @param targetField - 타겟필드
         * @returns targetValue
         */
        getMapData : function( array, key, sourceField, targetField ){
            for( var i = 0 ; i < array.length ; i ++ ){
                if( array[i][sourceField] == key ){
                    return array[i][targetField];
                }
            }
        },
        getFunctionName : function( func )
        {
            // Match:
            // - ^          the beginning of the string
            // - function   the word 'function'
            // - \s+        at least some white space
            // - ([\w\$]+)  capture one or more valid JavaScript identifier characters
            // - \s*        optionally followed by white space (in theory there won't be any here,
            //              so if performance is an issue this can be omitted[1]
            // - \(         followed by an opening brace
            //
            var result = /^function\s+([\w\$]+)\s*\(/.exec( func.toString() )

            return  result  ?  result[ 1 ]  :  '' // for an anonymous function there won't be a match
        },
        getValidateObject : function(){
            var _validateObject =
                {
                    required : function( value ){
                        return value != "" && value != null && value !== undefined
                    },
                    minLength : function( data, obj ){
                        data = data || "";
                        if( obj.value == "" || obj.value == null || obj.value === undefined ){
                            throw new Error(["MinLength 조건은 value값을 넣어주셔야 합니다."]);
                        }
                        return data.length >= obj.value;
                    },
                    maxLength : function( data, obj ){
                        data = data || "";
                        if( obj.value == "" || obj.value == null || obj.value === undefined ){
                            throw new Error(["MaxLength 조건은 value값을 넣어주셔야 합니다."]);
                        }
                        return data.length <= obj.value;
                    }
                };

            return _validateObject;
        },
        isValidDataset : function( grid, dataset ){

        },
        dirtyCheck : function( sourceObj, targetObj ){
            var dirty = true;
            angular.forEach( sourceObj, function( value, key ){
                if( key.indexOf("_validate") == -1 ){
                    if( sourceObj[key] != targetObj[key] ){
                        dirty = false;
                    }
                }
            });
            return dirty;
        },
        rowCopy : function( sourceObj, targetObj ){
            var excludeKeys = ['__isSelected', '__isTempSave', '_originalRow'];
            angular.forEach( sourceObj, function(value, key){
                if( excludeKeys.indexOf(key) == -1 ){
                    targetObj[key] = sourceObj[key];
                }
            });
        },
        getColumnIdx : function( arr, column ){
            for( var i = 0 ; i < arr.length ; i ++ ){
                if( column.id == arr[i].id )
                    return i;
            }
            return -1;
        },
        removeTags : function (input, allowed) {
            allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
            var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
                commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
                return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {        return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
            });
        },
        aggregate : function( dataset, method, columnId ){
            var defineMethods = {
                sum : function( dataset, columnId ){
                    var result = 0;
                    angular.forEach( dataset, function( row ){
                        if( row.hasOwnProperty(columnId) ){
                            //임시삭제도 합계에서 배제한다.
                            if( row.hasOwnProperty("cudFlag") && row.cudFlag == SpGridConstant.DELETE_FLAG ){

                            } else {
                                //Null Undefined 는 합계에 포함시키지 않는다.
                                if( row[columnId] != null && typeof row[columnId] != "undefined")
                                    result += parseFloat(row[columnId]);
                            }
                        }
                    });
                    return result;
                },
                avg : function( dataset, columnId ){
                    var sum = this.sum(dataset,columnId);
                    return sum / dataset.length;
                }
            };

            if( typeof method == "function" ){
                return method(dataset, columnId);
            }

            return defineMethods[method]( dataset, columnId );
        },
        groupByList : function( arr, columns, aggregates ){
            var result    = [];
            var groupList = this.getGroupList( arr, columns );
            for( var i = 0 ; i < groupList.length ; i ++ ){
                result[i] = { list : [] };
                for( var j = 0 ; j < arr.length ; j ++ ){
                    if( this.objectEquals( groupList[i], arr[j], columns ) ){
                        result[i].list.push(arr[j]);
                    }
                }
            }

            return result;
        },
        aggregateGroupList : function( groupList, aggregates ){

            for( var k = 0 ; k < groupList.length ; k ++ ){
                // call by reference
                this.aggregateGroup( groupList[k], aggregates );
            }

            return groupList;
        },
        aggregateGroup : function( group, aggregates ){
            for( var key in aggregates ){
                var method          = null;
                var resultFormatter = function( method, value ){
                    return value;
                };
                var column          = aggregates[key];

                if( typeof column == "string" || typeof column == "function" || column.constructor.name == "Array" ){
                    method = column;
                } else if ( typeof column == "object"){
                    method          = column.method;
                    resultFormatter = column.resultFormatter;
                }

                group[key] = {};

                method = [].concat( method );

                for( var l = 0 ; l < method.length ; l ++ ){
                    group[key][method[l]] = resultFormatter( method[l], this.aggregate( group.list, method[l], key ) );
                }
            }

            return group;
        },
        getGroupList : function( arr, columns ){
            var groupList = [];
            groupList.push(this.extractObject(arr[0],columns));
            for( var i = 0 ; i < arr.length ; i ++ ){
                var isContainList = false;
                for( var j = 0 ; j < groupList.length ; j ++ ){
                    if( this.objectEquals( arr[i], groupList[j], columns ) ){
                        isContainList = true;
                    }
                }
    
                if( !isContainList ){
                    groupList.push( this.extractObject(arr[i],columns));
                }
    
            }
            return groupList;
        },
    
        extractObject : function( obj, columns ){
            var result = {};
            for( var k = 0 ; k < columns.length ; k ++ ){
                result[columns[k]] = obj[columns[k]];
            }
            return result;
        },
    
        objectEquals : function( sourceObj, targetObj, columns ){
            try {
                for( var i = 0 ; i < columns.length ; i ++ ){
                    if( sourceObj[columns[i]] != targetObj[columns[i]] ){
                        return false;
                    }
                }
            } catch ( e ) {
                return false;
            }
            return true;
        },

        castToPromise : function( result ){
            var defer = $q.defer();
            if( typeof result == "boolean" ){
                if( result ){
                    defer.resolve();
                } else {
                    defer.reject();
                }
                return defer.promise;
            } else if ( this.isAngularPromise(result) ){
                return result;
            } else {
                throw new Error(["return 값의 타입은 Boolean 혹은 Promise(function) 이어야합니다."])
            }
        },
        isAngularPromise : function(value) {
            if (typeof value.then !== 'function') {
                return false;
            }
            var promiseThenSrc = String($q.defer().promise.then);
            var valueThenSrc = String(value.then);
            return promiseThenSrc === valueThenSrc;
        }
    }
}

module.exports = function( app ){
    app.factory("SpGridUtil", SpGridUtil );
};

