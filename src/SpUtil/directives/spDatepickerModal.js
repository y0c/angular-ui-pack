
function spDatepickerModal( $parse, Toast ){
    return {
        restrict : "A",
        require : "^ngModel",
        link : function( scope, element, attr, ctrl ){
            element.on("click",function(){
                Toast.datepicker().then(function( date ){
                    ctrl.$setViewValue(date);
                    ctrl.$render();        
                });   
            });
           
        }
    }
}



module.exports = function( app ){
    app.directive("spDatepickerModal", spDatepickerModal );
}