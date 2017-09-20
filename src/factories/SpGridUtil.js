function SpGridUtil(){
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
                        if( obj.value == "" || obj.value == null || obj.value === undefined ){
                            throw new Error(["MinLength 조건은 value값을 넣어주셔야 합니다."]);
                        }
                        return data.length > obj.value;
                    },
                    maxLength : function( data, obj ){
                        if( obj.value == "" || obj.value == null || obj.value === undefined ){
                            throw new Error(["MaxLength 조건은 value값을 넣어주셔야 합니다."]);
                        }
                        return data.length < obj.value;
                    }
                };

            return _validateObject;
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
        }
    }
}

module.exports = function( app ){
    app.factory("SpGridUtil", SpGridUtil );
};

