/**
 * Grid Header Column Directive
 */
function spGridHeaderColumn( SpGridConstant){
    return {
        restrict : "E",
        controller : "spGridController",
        require : "^spGridHeaderRow",
        replace : true,
        templateUrl : SpGridConstant.template.SP_GRID_HEADER_COLUMN,
        link : function( scope, element, attr){

            scope.columnWidth = getWidth();

            scope.$watch("column", function( newval){
                scope.columnWidth = newval.width;
            }, true);

            function getWidth(){
                if( scope.column.hasOwnProperty("spanWidth") ){
                    return scope.column.spanWidth;
                }
                return scope.column.width;
            }

            // scope.$on(scope.gridObject.getId() + "resize", function(){
            //     scope.columnWidth = getWidth();
            // });
        }
    }
}

module.exports = function(app){
    app.directive("spGridHeaderColumn", spGridHeaderColumn);
};