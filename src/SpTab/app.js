var app = angular.module("SpTab", [ ]);

app.constant("SpTabConstant", {
    template : {
        SP_TAB_SET : "SpTabSet.tmpl.html",
        SP_PORTLET_TAB_SET : "SpPortletTabSet.tmpl.html"
    }
});

app.run( ['$templateCache', 'SpTabConstant', function( $templateCache, SpTabConstant ){

    $templateCache.put( SpTabConstant.template.SP_TAB_SET, require( "./templates/SpTabSet.tmpl.html"));
    $templateCache.put( SpTabConstant.template.SP_PORTLET_TAB_SET, require("./templates/SpPortletTabSet.tmpl.html"));
}]);

require("./directives/spTabset")(app);
require("./directives/spTab")(app);
require("./factories/SpTab")(app);