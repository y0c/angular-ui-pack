/**
 * Grid 전체 영역 Directive
 */

function spGrid( $compile, SpGridConstant, orderByFilter, $filter, $window ){
    return {
        restrict : "E",
        scope : {
            "gridObject" : "="
        },
        controller : "spGridController",
        templateUrl : SpGridConstant.template.SP_GRID,
        link : function( scope, element, attrs, ctrls, transclude ){


            scope.orderChange = orderChange;
            scope.noMessageShow = noMessageShow;
            scope.filtering   = filtering;

            function orderChange( columnId, orderBy ){
                if( orderBy == "asc" ){
                    // scope.orderColumn = "-" + columnId;
                    // scope.orderReverse = true;
                    scope.gridObject.setData(orderByFilter(scope.gridObject.getData(),"-" + columnId, true));
                } else if ( orderBy == "desc" ){
                    // scope.orderColumn = "-" + columnId;
                    // scope.orderReverse = false;
                    scope.gridObject.setData(orderByFilter(scope.gridObject.getData(),"-" + columnId, false));
                }
            }

            function filtering(){
                if( scope.gridObject.isEnablePaging() ){
                    scope.gridObject.getPagingOptions().currentPage = 1;
                }
                scope.gridObject.setFilteredData( $filter("filter")(scope.gridObject.getData(), scope.gridObject.getFilteringQuery()) );
            }

            function noMessageShow(){
                if( scope.gridObject.isEnablePaging() ){
                    var currentPage = scope.gridObject.getCurrentPage() || 1;
                    var pageSize    = scope.gridObject.getPageSize();
                    var start       = currentPage - 1;
                    var end         = start + pageSize;
                    return scope.gridObject.getFilteredData().slice(start,end).length === 0 && scope.gridObject.getCreateData().length === 0;
                } else {
                    return scope.gridObject.getFilteredData().length === 0 && scope.gridObject.getCreateData().length === 0;
                }

            }

        }
    }
}


module.exports = function(app){
    app.directive("spGrid", spGrid);
};