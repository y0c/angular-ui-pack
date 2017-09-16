function SpGridFooter(){
    return {
        restrict : "E",
        controller : "SpGridFooterController",
        require : "^SpGrid",
        replace : true,

        link : function ( scope, element, attrs ){

        }
    }
}

module.exports = function( app ){
    app.directive("SpGridFooter", SpGridFooter );
};