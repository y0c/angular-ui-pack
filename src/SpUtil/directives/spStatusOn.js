function SpStatusOnDirective(){
    return {
        restrict : "A",
        link : function( scope, element, attrs ){
            var id = attrs.spStatusOn;
            
            scope.$on( id, function( event, params ){
                
                
            });
        }
    }
}

module.exports = function( app ){
    app.directive("spStatusOn", SpStatusOnDirective );
}