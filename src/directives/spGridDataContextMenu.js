var app = require("angular").module("spGrid");
app.directive("spGridDataContextMenu", function( SpGridConstant){
    return {
        restrict : "E",
        controller : "spGridController",
        require : "^spGridBody",
        replace : true,
        templateUrl : SpGridConstant.template.CONTEXT_MENU,
        link : function( scope, element, attr ){

        }
    }
});