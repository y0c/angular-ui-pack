var app = require("angular").module("spGrid");
/**
 * Grid Data Column Directive
 */
app.directive("spGridDataColumn", function( $compile, SpGridConstant, $templateCache ){
    return {
        restrict : "E",
        controller : "spGridController",
        require : "^spGridDataRow",
        replace : true,
        templateUrl : SpGridConstant.template.SP_GRID_DATA_COLUMN,
        link : function( scope, element, attr ){
            scope.columnWidth = scope.getColumnData( scope.key,'width');


            changeModeByCudFlag();

            function changeModeByCudFlag(){
                if( scope.row.hasOwnProperty("cudFlag") ){
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
});
