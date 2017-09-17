function spGridFooterRow( SpGridConstant ){
    return {
        restrict : "E",
        controller : "spGridFooterController",
        require : "^spGridFooter",
        replace : true,
        templateUrl : SpGridConstant.template.SP_GRID_FOOTER_ROW,
        link : function ( scope, element, attrs ){

        }
    }
}

module.exports = function( app ){
    app.directive("spGridFooterRow", spGridFooterRow );
};