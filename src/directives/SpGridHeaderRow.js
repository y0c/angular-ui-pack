/**
 * Grid Header Row Directive
 */
function SpGridHeaderRow( $compile, SpGridConstant ){
    return {
        restrict : "E",
        controller : "SpGridController",
        require : "^SpGridHeader",
        replace : true,
        templateUrl : SpGridConstant.template.SP_GRID_HEADER_ROW,
        link : function( scope, element, attrs ){
        }
    }
}

module.exports = function(app){
    app.directive("SpGridHeaderRow", SpGridHeaderRow);
}