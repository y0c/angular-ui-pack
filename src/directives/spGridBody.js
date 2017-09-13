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

            scope.scrollTop = scrollTop;




            scope.$watch("gridObject.getPagingOptions()", function(){
                var _currentPage = scope.gridObject.getCurrentPage() || 1;
                var _pageSize    = scope.gridObject.getPageSize();
                scope.start    = (_currentPage-1) * _pageSize;
                scope.pageSize = _pageSize;
                // scope.$rows               = range( scope.gridObject.getData(), scope.start, scope.start + scope.pageSize );
            }, true);


            function openContextMenu( event, index, rowManager ){
                scope.rowManager = rowManager;
                scope.rightClickPosition.currentX = event.pageX + 'px';
                scope.rightClickPosition.currentY = event.pageY + 'px';
                scope.isContextMenuShow = true;
            }


            function scrollTop(){
                element.scrollTop(0);
            }
        }
    }
}

module.exports = function(app){
    app.directive("spGridBody", spGridBody);
};