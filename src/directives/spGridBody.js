/**
 * Grid Body Wrap Directive
 */

function spGridBody($compile, SpGridConstant, $templateCache ){
    return {
        restrict : "E",
        controller : "spGridBodyController",
        require : "^spGrid",
        replace : true,
        templateUrl : SpGridConstant.template.SP_GRID_BODY,
        link : function( scope, element, attr ){
            scope.isContextMenuShow   = false;
            scope.rightClickPosition = {};
            scope.openContextMenu     = openContextMenu;

            scope.dataAreaScrollToEnd = dataAreaScrollToEnd;



            scope.$watch("gridObject.getPagingOptions()", function(){
                scope.start    = (scope.gridObject.getCurrentPage()-1)*scope.gridObject.getPageSize();
                scope.pageSize = scope.gridObject.getPageSize();
            }, true);

            function openContextMenu( event, index, rowManager ){
                scope.rowManager = rowManager;
                scope.rightClickPosition.currentX = event.pageX + 'px';
                scope.rightClickPosition.currentY = event.pageY + 'px';
                scope.isContextMenuShow = true;
            }


            function dataAreaScrollToEnd(){
                element.scrollTop(element.get(0).scrollHeight);
            }
        }
    }
};

module.exports = function(app){
    app.directive("spGridBody", spGridBody);
};