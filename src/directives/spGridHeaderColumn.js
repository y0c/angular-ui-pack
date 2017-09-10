var app = require("angular").module("spGrid");
/**
 * Grid Header Column Directive
 */
app.directive("spGridHeaderColumn", function( SpGridConstant){
    return {
        restrict : "E",
        controller : "spGridController",
        require : "^spGridHeaderRow",
        replace : true,
        templateUrl : SpGridConstant.template.SP_GRID_HEADER_COLUMN,
        link : function( scope, element, attr){
            console.log("GridHeaderCOlumn!!");
        }
    }
});