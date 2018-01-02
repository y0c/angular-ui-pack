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

            // scope.orderColumn = "";
            // scope.orderReverse = true;

            // if ($window.matchMedia('screen and (max-width: 900px)').matches) {
            //     element.parent().css({
            //         paddingLeft : "15px",
            //         paddingRight : "15px"
            //     });
            // }

            scope.orderChange = orderChange;

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

        }
    }
}


module.exports = function(app){
    app.directive("spGrid", spGrid);
};