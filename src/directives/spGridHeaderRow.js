/**
 * Grid Header Row Directive
 */
function spGridHeaderRow( $compile, SpGridConstant ){
    return {
        restrict : "E",
        controller : "spGridController",
        require : "^spGridHeader",
        replace : true,
        templateUrl : SpGridConstant.template.SP_GRID_HEADER_ROW,
        link : function( scope, element, attrs ){
        }
    }
};


module.exports = function(app){
    app.directive("spGridHeaderRow", spGridHeaderRow);
}