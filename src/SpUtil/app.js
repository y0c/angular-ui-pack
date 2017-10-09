var app = angular.module("SpUtil", [ ]);

app.constant("SpUtilConstant", {
});

app.run( ['$templateCache', 'SpUtilConstant', function( $templateCache, SpUtilConstant ){


}]);


require("./directives/spChange")(app);
require("./directives/spStatusOn")(app);
require("./factories/spStatus")(app);