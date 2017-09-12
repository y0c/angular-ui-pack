/**
 * Grid 전체 영역 Directive
 */

function spGrid( $compile, SpGridConstant ){
    return {
        restrict : "E",
        scope : {
            "gridObject" : "="
        },
        controller : "spGridController",
        templateUrl : SpGridConstant.template.SP_GRID,
        link : function( scope, element, attrs, ctrls, transclude ){

            scope.orderColumn = "";
            scope.orderReverse = true;


            scope.orderChange = orderChange;

            function orderChange( columnId, orderBy ){
                if( orderBy == "asc" ){
                    scope.orderColumn = "-" + columnId;
                    scope.orderReverse = true;
                } else if ( orderBy == "desc" ){
                    scope.orderColumn = "-" + columnId;
                    scope.orderReverse = false;
                }
            }
        }
    }
}


module.exports = function(app){
    app.directive("spGrid", spGrid);
};