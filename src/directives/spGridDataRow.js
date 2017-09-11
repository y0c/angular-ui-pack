/**
 * Grid Data Row Directive
 */
function spGridDataRow( SpGridConstant ){
    return {
        restrict : "E",
        controller : "spGridController",
        require : "^spGridBody",
        replace : true,
        templateUrl : SpGridConstant.template.SP_GRID_DATA_ROW,
        link : function( scope, element, attr){
            scope.rightClickPosition = {};

            scope.onGridDataRowClick = onGridDataRowClick;

            scope.isRowDeleted       = isRowDeleted;

            scope.rowManager     = {
                isRowEditting : function(){
                    if( scope.row.hasOwnProperty("cudFlag")
                        && scope.row.cudFlag == SpGridConstant.UPDATE_FLAG ){
                        return true;
                    }
                    return false;
                },
                rowEdit : rowEdit,
                rowRevert : rowRevert,
                rowDelete : rowDelete
            };


            /**
             * Grid Data Row 클릭시 기본 Action 과 커스텀 Action 동작
             */
            function onGridDataRowClick( row ){
                //TODO 그리드 오브젝트를 통해 커스텀 이벤트 등록이 가능하도록 조정 gridObject.gridAction
            }


            /**
             * Grid Data Row EditMode 변경
             */
            function rowEdit(){
                scope._originalRow = angular.copy(scope.row);
                scope.row.cudFlag = SpGridConstant.UPDATE_FLAG;
                scope.$broadcast("changeMode");
            }

            /**
             * Grid Data Row ViewMode 변경
             */
            function rowRevert(){
                scope.row = scope._originalRow;
                scope.$broadcast("changeMode");
            }

            /**
             * Grid Data Row Delete
             */
            function rowDelete(){
                scope.row.cudFlag = SpGridConstant.DELETE_FLAG;
            }

            /**
             * Grid Data Row 삭제된 로우인지 체크
             * @returns {boolean}
             */
            function isRowDeleted(){
                if( scope.row.hasOwnProperty("cudFlag") ){
                    return scope.row.cudFlag == SpGridConstant.DELETE_FLAG;
                }
                return false;
            }

        }
    }
};


module.exports = function(app){
    app.directive("spGridDataRow", spGridDataRow);
};