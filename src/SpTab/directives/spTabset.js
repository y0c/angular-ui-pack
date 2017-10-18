function spTabset( SpTabConstant ){
    return {
        restrict : "E",
        transclude : true,
        scope : {
            tabObject : "="
        },
        bindToController : true,
        controllerAs : "tabset",
        replace : true,
        templateUrl : function( element, attrs ){
            var type = attrs.type || "normal";
            if( type == "portlet" ){
                return SpTabConstant.template.SP_PORTLET_TAB_SET;
            } else {
                return SpTabConstant.template.SP_TAB_SET;
            }
        },
        link : function(){
        },
        controller : function( $scope ){
            var vm = this;

            vm.active = function( $index ){
                vm.tabObject.activeTab( $index );
            }
        }
    };
}

module.exports = function(app){
    app.directive("spTabset", spTabset);
};