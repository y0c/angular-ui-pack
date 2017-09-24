require("./SpGrid/app.js");
require("../public/less/SpModal.less");

var app = angular.module("SpUi", ["SpGrid"]);

require("./SpModal/services/SpModal")(app);