/**
 * Grid 전체 영역 Directive
 */

function spGrid( $compile, SpGridConstant, orderByFilter ){
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


            scope.orderChange = orderChange;

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
        }
    }
}


module.exports = function(app){
    app.directive("spGrid", spGrid);
};