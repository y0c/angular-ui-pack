var app = require("angular").module("spGrid");
/**
 * Grid Body Wrap Directive
 */

app.directive("spGridBody", function($compile, SpGridConstant){
    return {
        restrict : "E",
        controller : "spGridController",
        require : "^spGrid",
        replace : true,
        templateUrl : SpGridConstant.template.SP_GRID_BODY,
        link : function( scope, element, attr ){
            scope.isContextMenuShow   = false;

            scope.openContextMenu     = openContextMenu;

            scope.dataAreaScrollToEnd = dataAreaScrollToEnd;


            function openContextMenu( event, index, rowManager ){
                scope.rowManager = rowManager;
                scope.rightClickPosition = {
                    currentX : event.pageX,
                    currentY : event.pageY
                };
                scope.isContextMenuShow = true;
            }


            function dataAreaScrollToEnd(){
                element.scrollTop(element.get(0).scrollHeight);
            }
        }
    }
});