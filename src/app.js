require("./SpGrid/app.js");
require("./SpTab/app.js");
require("../public/less/SpModal.less");

var app = angular.module("SpUi", ["SpGrid", "SpTab"]);

require("./SpModal/factories/SpModal")(app);