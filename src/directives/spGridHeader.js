var app = require("angular").module("spGrid");
/**
 * Grid Header Wrap Directive
 */
app.directive("spGridHeader", function( $compile, SpGridConstant){
    return {
        restrict : "E",
        controller : "spGridController",
        require : "^spGrid",
        replace : true,
        templateUrl : SpGridConstant.template.SP_GRID_HEADER,
        link : function( scope, element, attrs, ctrls, transclude ){
            console.log("spGridHeader");
        }
    }
});