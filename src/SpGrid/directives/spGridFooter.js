function spGridFooter( SpGridConstant ){
    return {
        restrict : "E",
        controller : "spGridFooterController",
        require : "^spGrid",
        replace : true,
        templateUrl : SpGridConstant.template.SP_GRID_FOOTER,
        link : function ( scope, element, attrs ){

        }
    }
}

module.exports = function( app ){
    app.directive("spGridFooter", spGridFooter );
};