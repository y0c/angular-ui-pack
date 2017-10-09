function SpStatusOnDirective(){
    return {
        restrict : "A",
        priority: 450,
        link : function( scope, element, attrs ){
            var id = attrs.spStatusOn;
            var group = id.split(".");

            scope.$on( "spStatusChange", function( event, params ){
                var match = false;
                var matchCount = 0;
                var paramGroup = params.id.split(".");
                
                for( var i = 0 ; i < group.length ; i ++ ){
                    for( var j = 0 ; j < paramGroup.length ; j ++ ){
                        if( group[i] == paramGroup[j] ){
                            matchCount++;
                            match = true;
                            break;
                        }
                    }
                    if( !match ) break;
                }

                if( match && matchCount == paramGroup.length){
                    switch (params.action) {
                        case "show" :
                            element.show();
                            break;
                        case "hide" : 
                            element.hide();
                            break;
                        case "readonly" :
                            element.attr("readonly",true);
                            break;
                        case "!readonly" :
                            element.attr("readonly",false);
                            break;
                        case "disabled" :
                            element.attr("disabled", true);
                            break;
                        case "!disabled" :
                            element.attr("readonly",false);
                            break;
                    }
                }
                
            });
        }
    }
}

module.exports = function( app ){
    app.directive("spStatusOn", SpStatusOnDirective );
}