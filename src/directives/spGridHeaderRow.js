var app = require("angular").module("spGrid");
/**
 * Grid Header Row Directive
 */
app.directive("spGridHeaderRow", function( $compile, SpGridConstant ){
    return {
        restrict : "E",
        controller : "spGridController",
        require : "^spGridHeader",
        replace : true,
        templateUrl : SpGridConstant.template.SP_GRID_HEADER_ROW,
        link : function( scope, element, attrs ){
            console.log("spGridHeaderRow!!!");
            console.log(scope.column);
        }
    }
});