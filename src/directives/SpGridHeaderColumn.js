/**
 * Grid Header Column Directive
 */
function SpGridHeaderColumn( SpGridConstant){
    return {
        restrict : "E",
        controller : "SpGridController",
        require : "^SpGridHeaderRow",
        replace : true,
        templateUrl : SpGridConstant.template.SP_GRID_HEADER_COLUMN,
        link : function( scope, element, attr){
        }
    }
}

module.exports = function(app){
    app.directive("SpGridHeaderColumn", SpGridHeaderColumn);
};