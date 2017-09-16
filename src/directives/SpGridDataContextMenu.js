function SpGridDataContextMenu( SpGridConstant){
    return {
        restrict : "E",
        controller : "SpGridController",
        require : "^SpGridBody",
        replace : true,
        templateUrl : SpGridConstant.template.CONTEXT_MENU,
        link : function( scope, element, attr ){
        }
    }
}

module.exports = function(app){
    app.directive("SpGridDataContextMenu", SpGridDataContextMenu);
};