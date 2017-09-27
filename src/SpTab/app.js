var app = angular.module("SpTab", [ ]);

app.constant("SpTabConstant", {
    template : {
        SP_TAB_SET : "SpTabSet.tmpl.html"
    }
});

app.run( ['$templateCache', 'SpTabConstant', function( $templateCache, SpTabConstant ){

    $templateCache.put( SpTabConstant.template.SP_TAB_SET, require( "./templates/SpTabSet.tmpl.html"));

}]);

require("./directives/spTabset")(app);
require("./directives/spTab")(app);
require("./factories/SpTab")(app);