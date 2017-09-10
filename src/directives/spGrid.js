var app = require("angular").module("spGrid");
/**
 * Grid 전체 영역 Directive
 */

app.directive("spGrid", function( $compile, SpGridConstant ){
    return {
        restrict : "E",
        scope : {
            "gridObject" : "="
        },
        controller : "spGridController",
        templateUrl : SpGridConstant.template.SP_GRID,
        link : function( scope, element, attrs, ctrls, transclude ){
        }
    }
});