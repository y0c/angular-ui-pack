/**
 * Grid Data Column Directive
 */
function spGridDataColumn( $compile, SpGridConstant, $templateCache ){
    return {
        restrict : "E",
        controller : "spGridController",
        require : "^spGridDataRow",
        replace : true,
        templateUrl : SpGridConstant.template.SP_GRID_DATA_COLUMN,
        link : function( scope, element, attr ){
            var _headerColumn = scope.headerColumn;
            scope.columnWidth = _headerColumn.width;
            scope.columnHeader= _headerColumn.name;
            scope.type        = _headerColumn.type || "data";

            //data인지 순수 html 바인딩인지 구분해서 처리
            if( scope.type == "data" ){
                scope.displayData = scope.row[_headerColumn.id];
            } else {
                scope.bindHtml    = _headerColumn.bindHtml;
                element.find(".sp-grid-data-html").append(
                    $compile(scope.bindHtml)(scope)
                );
            }

            changeModeByCudFlag();

            function changeModeByCudFlag(){
                if( scope.row.hasOwnProperty("cudFlag") && scope.type == "data"){
                    if( scope.row.cudFlag == SpGridConstant.CREATE_FLAG ){
                        editMode();
                        scope.dataAreaScrollToEnd();
                    } else if ( scope.row.cudFlag == SpGridConstant.UPDATE_FLAG ){
                        editMode();
                    }
                } else {
                    viewMode();
                }
            }


            function editMode(){
                var _gridDataView    = null;
                _gridDataView = element.find(".sp-grid-data-view");
                _gridDataView.replaceWith(
                    $compile( $templateCache.get(SpGridConstant.template.EDIT_INPUT))(scope)
                );
                element.focus();
            }

            function viewMode(){
                var _gridEditElement = null;
                _gridEditElement = element.find(".sp-grid-data-edit");
                _gridEditElement.replaceWith(
                    $compile( $templateCache.get(SpGridConstant.template.DATA_VIEW))(scope)
                );
            }

            scope.$on("changeMode", changeModeByCudFlag );
        }
    }
};


module.exports = function( app ){
    app.directive("spGridDataColumn", spGridDataColumn);
};
