/**
 * Grid Body Wrap Directive
 */

function spGridBody($compile, SpGridConstant, $templateCache, SpGridUtil ){
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

            scope.range  = range;

            scope.$rows = null;

            scope.$on( scope.gridObject.getId() +  "gridDataReset", function(){
                if( scope.gridObject.isGroupable() ){
                    if( scope.gridObject.getFilteredData().length == 0 ){
                        scope.$groups = [];
                    } else {
                        var groupList = SpGridUtil.groupByList(scope.gridObject.getFilteredData(), scope.gridObject.getGrouping().groupingColumn );
                        scope.$groups = SpGridUtil.aggregateGroupList(groupList,scope.gridObject.getGrouping().aggregate);
                    }
                }
            });

            scope.$on("onRowRenderFinished", scope.gridObject.getGridAction().onRowRenderFinished );

            scope.$watch("gridObject.getPagingOptions()", function(){
                var _currentPage = scope.gridObject.getCurrentPage() || 1;
                var _pageSize    = scope.gridObject.getPageSize();
                scope.start    = (_currentPage-1) * _pageSize;
                scope.pageSize = _pageSize;
                // scope.$rows               = range( scope.gridObject.getData(), scope.start, scope.start + scope.pageSize );
                scope.$parent.$broadcast("pageChange");
            }, true);



            function openContextMenu( event, index, rowManager ){
                scope.rowManager = rowManager;
                scope.rightClickPosition.currentX = event.pageX + 'px';
                scope.rightClickPosition.currentY = event.pageY + 'px';
                scope.isContextMenuShow = true;
            }

            function range( start, end ){
                if( scope.gridObject.isEnablePaging() ){
                    return scope.gridObject.getFilteredData().slice( start, end );
                }
                return scope.gridObject.getFilteredData();
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