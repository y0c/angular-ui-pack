function spGridDataContextMenu( SpGridConstant){
    return {
        restrict : "E",
        controller : "spGridController",
        require : "^spGridBody",
        replace : true,
        templateUrl : SpGridConstant.template.CONTEXT_MENU,
        link : function( scope, element, attr ){
        }
    }
}

module.exports = function(app){
    app.directive("spGridDataContextMenu", spGridDataContextMenu);
};