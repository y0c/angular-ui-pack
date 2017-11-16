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

            scope.onGridDataRowDblClick = onGridDataRowDblClick;

            scope.checkRowValid      = checkRowValid;

            scope.isTempSave         = isTempSave;

            scope.$columns           = scope.gridObject.getVisibleColumn();

            scope.$on("gridColumnChange", function(){
                scope.$columns           = scope.gridObject.getVisibleColumn();
            });
            /**
             * Grid Data Row 클릭시 기본 Action 과 커스텀 Action 동작
             */
            function onGridDataRowClick( row ){

                if ( scope.gridObject.isSelectable() ){
                    var oldRowIdx = scope.gridObject.getSelectedIndex();
                    var oldRow    = scope.gridObject.getSelectedRow();
                    var newRowIdx = scope.rowidx;

                    var onRowSelectedChange =  SpGridUtil.castToPromise(
                        scope.gridObject.getGridAction().onRowSelectedChange( oldRowIdx, oldRow, newRowIdx, row )
                    );

                    onRowSelectedChange
                        .then(function(){
                            scope.gridObject.setSelectedRow( row );
                        });
                }

                scope.gridObject.getGridAction().onRowClick( row, scope.rowidx );
            }

            function onGridDataRowDblClick( row ){
                scope.gridObject.getGridAction().onRowDblClick( row, scope.rowidx );
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
                // if( scope.gridObject.isStatusChanged() ){
                //     return ;
                // }

                var onRowEditBefore =  SpGridUtil.castToPromise(scope.gridObject.getGridAction().onRowEditBefore( scope.row, scope.rowidx ));


                onRowEditBefore
                    .then(function(){
                        //Deep Copy
                        if( !scope.row.hasOwnProperty("_originalRow") ){
                            var _temp = {};
                            SpGridUtil.rowCopy(scope.row, _temp);
                            scope.row["_originalRow"] = _temp;
                        }


                        if( !scope.row.hasOwnProperty("cudFlag")  ){

                            scope.row.cudFlag      = SpGridConstant.UPDATE_FLAG;
                        }

                        scope.row.__valid      = false;
                        scope.row.__isTempSave = false;
                        scope.gridObject.setStatus("edit");
                        scope.$broadcast("changeMode");
                    });

            };

            /**
             * Grid Data Row ViewMode 변경
             */
            scope.rowRevert = function(){
                //Deep Copy

                //로우생성후 바로 캔슬시에는 로우 삭제
                if( scope.row.cudFlag == SpGridConstant.CREATE_FLAG
                && scope.gridObject.getCreateData().length > 0 ){
                    scope.gridObject.getCreateData().splice(0,1);
                } else {
                    //임시저장후 캔슬시에는 원복한후 임시저장
                    angular.copy(scope.row._originalRow, scope.row);
                    scope.row.__isTempSave = true;
                    scope.$broadcast("changeMode");
                }
                scope.gridObject.setStatus("");
            };

            /**
             * Grid Data Row Delete
             */
            scope.rowDelete =  function(){
                // if( scope.gridObject.isStatusChanged() ){
                //     return ;
                // }

                var onRowDeleteBefore =  SpGridUtil.castToPromise(scope.gridObject.getGridAction().onRowDeleteBefore( scope.row, scope.rowidx ));

                onRowDeleteBefore
                    .then(function(){
                        // Row Delete시 생성된데이터는 배열에서 완전삭제
                        if( scope.row.cudFlag != SpGridConstant.CREATE_FLAG ){
                            scope.row.cudFlag = SpGridConstant.DELETE_FLAG;
                            scope.row.__valid = true;
                        } else {
                            scope.gridObject.getData().splice(scope.$index, 1 );
                        }
                        scope.$parent.$broadcast("rowDelete");
                        scope.gridObject.getGridAction().onRowDeleteAfter( scope.row );
                    });

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
             * Grid Row 클래스 결정
             * @returns {*}
             */
            scope.getRowClass = function(){
              if( scope.isRowActive() ){
                  return SpGridConstant.ROW_ACTIVE_CLASS;
              }

              if( scope.gridObject.isSelectable() && scope.row.hasOwnProperty("__isSelected") && scope.row.__isSelected ){
                  return SpGridConstant.ROW_SELECT_CLASS;
              }

              return ""
            };
            /**
             *
             * @returns {boolean}
             */
            scope.row.__validate = function(){
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

                                    var validateResult = _customValidateFn( scope.row[_column.id], scope.row);

                                    if( typeof validateResult == "string" ){
                                        _invalidArray.push({
                                            id : _column.id,
                                            message : validateResult
                                        });
                                    } else if ( typeof validateResult == "boolean" ){
                                        if( !validateResult ){
                                            _invalidArray.push({
                                                id : _column.id,
                                                message : obj.message
                                            });
                                        }
                                    }
                                }
                            } else {
                                if( !_defineValidateFn( scope.row[_column.id], obj) ){
                                    _invalidArray.push({
                                        id : _column.id,
                                        message : obj.message
                                    });
                                }
                            }


                        });
                    }
                });

                if( scope.row.cudFlag == SpGridConstant.UPDATE_FLAG ){
                    if( SpGridUtil.dirtyCheck( scope.row._originalRow, scope.row ) ){
                        scope.gridObject.getValidateCallback()("변경된 내용이 없습니다.");
                        return false;
                    }
                }


                if( _invalidArray.length > 0 ){
                    scope.gridObject.getValidateCallback()( _invalidArray[0], scope.row, scope.$index);
                    return false;
                } else {


                    var onRowSaveBefore =  SpGridUtil.castToPromise(scope.gridObject.getGridAction().onRowSaveBefore( scope.row, scope.rowidx ));

                    onRowSaveBefore
                        .then(function(){

                            if( scope.row.hasOwnProperty("cudFlag") &&
                                scope.row.cudFlag == SpGridConstant.CREATE_FLAG ){
                                //처음 생성한 로우의 경우 배열을 옮겨줌
                                if( scope.gridObject.getCreateData().length > 0 ){
                                    scope.gridObject.getData().unshift(
                                        scope.gridObject.getCreateData().splice(0,1)[0]
                                    );
                                }
                                scope.gridObject.getGridAction().onRowCreateAfter( scope.row );
                            }

                            if( scope.row.hasOwnProperty("cudFlag") &&
                                scope.row.cudFlag == SpGridConstant.UPDATE_FLAG ){
                                scope.gridObject.getGridAction().onRowEditAfter( scope.row );
                            }

                            scope.row.__valid      = true;
                            scope.row.__isTempSave = true;
                            scope.gridObject.setStatus("");
                            scope.$broadcast("changeMode");
                        });

                }


                return true;
            };

            function setRowStyle( $scope, paramMap){
                if( paramMap.rowIdx == scope.$index ){
                    element.css(paramMap.style);
                }
            }

            scope.$on( scope.gridObject.getId() + "rowStyleChange", setRowStyle);
            scope.$on( scope.gridObject.getId() + "rowEditMode" + scope.rowidx, scope.rowEdit );
            scope.$on( scope.gridObject.getId() + "EditMode", scope.rowEdit );
        }
    }
}


module.exports = function(app){
    app.directive("spGridDataRow", spGridDataRow);
};