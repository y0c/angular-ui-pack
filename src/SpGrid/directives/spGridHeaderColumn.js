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

            scope.getWidth = getWidth;


            function getWidth(){
                if( scope.column.hasOwnProperty("spanWidth") ){
                    return scope.column.spanWidth;
                }
                return scope.column.width;
            }
        }
    }
}

module.exports = function(app){
    app.directive("spGridHeaderColumn", spGridHeaderColumn);
};