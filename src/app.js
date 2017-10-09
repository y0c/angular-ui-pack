require("./SpGrid/app.js");
require("./SpTab/app.js");
require("./SpUtil/app.js");
require("../public/less/SpModal.less");

var app = angular.module("SpUi", ["SpGrid", "SpTab", "SpUtil"]);

require("./SpModal/factories/SpModal")(app);
require("./SpModal/services/Toast")(app);