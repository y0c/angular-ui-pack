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
        }
    }
}

module.exports = function( app ){
    app.factory("SpGridUtil", SpGridUtil );
};

