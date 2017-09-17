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
        }
    }
}

module.exports = function(app){
    app.directive("spGridHeaderColumn", spGridHeaderColumn);
};