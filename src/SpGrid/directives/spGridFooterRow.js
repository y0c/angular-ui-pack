function spGridFooterRow( SpGridConstant ){
    return {
        restrict : "E",
        controller : "spGridFooterController",
        require : "^spGridFooter",
        replace : true,
        templateUrl : SpGridConstant.template.SP_GRID_FOOTER_ROW,
        link : function ( scope, element, attrs ){

            scope.$columns = scope.gridObject.getVisibleColumn();

            scope.$on(scope.gridObject.getId() + "gridColumnChange", function(){
                scope.$columns = scope.gridObject.getVisibleColumn();
            });
        }
    }
}

module.exports = function( app ){
    app.directive("spGridFooterRow", spGridFooterRow );
};