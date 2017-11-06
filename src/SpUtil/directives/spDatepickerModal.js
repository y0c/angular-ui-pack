
function spDatepickerModal( $parse, Toast ){
    return {
        restrict : "A",
        require : "^ngModel",
        compile: function(element, attributes){

            return {
                pre: function(scope, element, attributes, controller, transcludeFn){

                },
                post: function(scope, element, attributes, controller, transcludeFn){
                    element.on("click",function(){
                        Toast.datepicker({
                            date : controller.$viewValue
                        }).then(function( date ){
                            controller.$setViewValue(date);
                            controller.$render();
                        });
                    });

                }
            }
        }
    }
}



module.exports = function( app ){
    app.directive("spDatepickerModal", spDatepickerModal );
}