function spTab(){
    return {
        restrict : "E",
        scope : {
            header : "@"
        },
        require : "^spTabset",
        replace : true,
        transclude : true,
        template : "<li ng-transclude ng-class=\"tab.active && 'on'\"></li>",
        link : function( scope, elem, attrs, tabsetCtrl ){
            scope.tab = {
                header : scope.header,
                active : false,
                disable : false,
                hidden : false
            };
            tabsetCtrl.tabObject.addTab(scope.tab);
        }
    }
}

module.exports = function(app){
    app.directive("spTab", spTab);
};