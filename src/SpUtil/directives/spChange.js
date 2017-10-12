function SpChangeDirective( $parse ){
    return {
        restrict : "A",
        link : function( scope, element, attr ){
            var fn = $parse(attr.spChange);
            element.on("change", function( event ){
                scope.$apply(function(){
                    var target = angular.element(event.currentTarget);
                    if( !fn(scope, {$event:event, $value : target.val()}) ){
                        event.preventDefault();
                    }
                });
            });
        }
    }
}


module.exports = function( app ){
    app.directive("spChange", SpChangeDirective );
}