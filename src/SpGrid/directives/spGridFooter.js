function spGridFooter( SpGridConstant, SpGridUtil ){
    return {
        restrict : "E",
        controller : "spGridFooterController",
        require : "^spGrid",
        replace : true,
        templateUrl : SpGridConstant.template.SP_GRID_FOOTER,
        link : function ( scope, element, attrs ){

            scope.$on( scope.gridObject.getId() +  "gridDataReset", function(){
                if ( scope.gridObject.getTotalRecordCount() == 0 ){
                    scope.group = {};
                } else {
                    scope.group = SpGridUtil.aggregateGroup({ list : scope.gridObject.getData() }, scope.gridObject.getGrouping().aggregate );
                }
            });
        }
    }
}

module.exports = function( app ){
    app.directive("spGridFooter", spGridFooter );
};