/**
 * Grid Data Row Directive
 */
function spGridDataRow( SpGridConstant, SpGridUtil ){
    return {
        restrict : "E",
        controller : "spGridBodyController",
        require : "^spGridBody",
        replace : true,
        templateUrl : SpGridConstant.template.SP_GRID_DATA_ROW,
        link : function( scope, element, attr){
            scope.rightClickPosition = {};

            scope.onGridDataRowClick = onGridDataRowClick;

            scope.checkRowValid      = checkRowValid;

            scope.isTempSave         = isTempSave;

            /**
             * Grid Data Row 클릭시 기본 Action 과 커스텀 Action 동작
             */
            function onGridDataRowClick( row ){
                //TODO 그리드 오브젝트를 통해 커스텀 이벤트 등록이 가능하도록 조정 gridObject.gridAction
                console.log(row);
            }

            function checkRowValid(){
                return scope.row.hasOwnProperty("__valid") && scope.row.__valid;
            }

            function isTempSave(){
                return scope.row.hasOwnProperty("__isTempSave") && scope.row.__isTempSave;
            }

            /**
             * Grid Data Row EditMode 변경
             */
            scope.rowEdit = function() {
                if( scope.gridObject.isStatusChanged() ){
                    return ;
                }
                scope.row._originalRow = {};
                //Deep Copy
                angular.copy(scope.row, scope.row._originalRow);


                if( !scope.row.hasOwnProperty("cudFlag")  ){

                    scope.row.cudFlag      = SpGridConstant.UPDATE_FLAG;
                }

                scope.row.__isTempSave = false;
                scope.gridObject.setStatus("edit");
                scope.$broadcast("changeMode");
            };

            /**
             * Grid Data Row ViewMode 변경
             */
            scope.rowRevert = function(){
                //Deep Copy
                if( scope.row.cudFlag == SpGridConstant.CREATE_FLAG
                && scope.gridObject.getCreateData().length > 0 ){
                    scope.gridObject.getCreateData().splice(0,1);
                } else {
                    angular.copy(scope.row._originalRow, scope.row);
                    scope.$broadcast("changeMode");
                }
                scope.gridObject.setStatus("");
            };

            /**
             * Grid Data Row Delete
             */
            scope.rowDelete =  function(){
                if( scope.gridObject.isStatusChanged() ){
                    return ;
                }
                scope.row.cudFlag = SpGridConstant.DELETE_FLAG;
            };

            /**
             * Gird Row가 수정중 일 경우
             * @returns {boolean}
             */
            scope.isRowEditting = function(){
                if( scope.row.hasOwnProperty("cudFlag")
                    && scope.row.cudFlag == SpGridConstant.UPDATE_FLAG
                    && !scope.isTempSave()){
                    return true;
                }
                return false;
            };

            /**
             * Grid Row가 추가 중 일 경우
             * @returns {boolean}
             */
            scope.isRowAdding = function(){
                if( scope.row.hasOwnProperty("cudFlag")
                    && scope.row.cudFlag == SpGridConstant.CREATE_FLAG
                    && !scope.isTempSave()){
                    return true;
                }
                return false;
            };

            scope.isRowActive = function(){
                return ( scope.isRowEditting() || scope.isRowAdding() );
            };

            /**
             * Grid Data Row 삭제된 로우인지 체크
             * @returns {boolean}
             */
            scope.isRowDeleted = function(){
                if( scope.row.hasOwnProperty("cudFlag") ){
                    return scope.row.cudFlag == SpGridConstant.DELETE_FLAG;
                }
                return false;
            };

            /**
             *
             * @returns {boolean}
             */
            scope.validate = function(){
                var _headerColumns   = scope.gridObject.getColumnDef();
                var _validateObject  = SpGridUtil.getValidateObject();
                var _invalidArray  = [];
                //미리정의된 유효성검사 함수
                var _defineValidateFn = null;
                //사용자정의 유효성검사 함수
                var _customValidateFn = null;

                angular.forEach( _headerColumns, function( _column){
                    if( _column.hasOwnProperty("validate") && _column.type == "data" ){
                        angular.forEach( _column.validate, function( obj, key ){
                            _defineValidateFn = _validateObject[key];

                            if( !_defineValidateFn ){
                                if( !obj.hasOwnProperty("fn") ){
                                    throw new Error(["사용자 정의 유효성검사 형식이 어긋납니다. fn을 선언해주세요"]);
                                } else {
                                    _customValidateFn = obj.fn;

                                    if( !_customValidateFn( scope.row[_column.id], scope.row)){
                                        _invalidArray.push(obj.message);
                                    }
                                }
                            } else {
                                if( !_defineValidateFn( scope.row[_column.id], obj) ){
                                    _invalidArray.push(obj.message);
                                }
                            }


                        });
                    }
                });

              /*  var _form = scope['rowForm' + scope.$index];
                if( _form.$dirty ){
                    scope.gridObject.getValidateCallback()("변경된 내용이 없습니다");
                }*/

                if( _invalidArray.length > 0 ){
                    scope.gridObject.getValidateCallback()(_invalidArray[0]);
                    return false;
                } else {
                    if( scope.row.hasOwnProperty("cudFlag") &&
                        scope.row.cudFlag == SpGridConstant.CREATE_FLAG ){
                        //처음 생성한 로우의 경우 배열을 옮겨줌
                        if( scope.gridObject.getCreateData().length > 0 ){
                            scope.gridObject.getData().unshift(
                                scope.gridObject.getCreateData().splice(0,1)[0]
                            );
                        }
                    }
                    scope.row.__valid      = true;
                    scope.row.__isTempSave = true;
                }



                scope.gridObject.setStatus("");
                scope.$broadcast("changeMode");

                return true;
            };

        }
    }
};


module.exports = function(app){
    app.directive("spGridDataRow", spGridDataRow);
};