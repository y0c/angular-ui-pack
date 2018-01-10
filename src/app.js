require("./SpGrid/app.js");
require("./SpTab/app.js");
require("./SpUtil/app.js");
require("../public/less/SpModal.less");

var app = angular.module("SpUi", ["SpGrid", "SpTab", "SpUtil"]);

app.run( ['$templateCache', function($templateCache){
    $templateCache.put( "alertTemplate",
        [
            "<div class=\"sp-modal-header\">",
                "<section class=\"nb-title page\">",
                    "<h2><em>{{ modal.params.title }}</em></h2>",
                "</section>",
                "<span class=\"sp-modal-close\" ng-click='modal.close()'></span>",
            "</div>",
            "<div class=\"sp-modal-body\">",
                "<div ng-bind-html='modal.params.message | to_trusted'></div>",
            "</div>",
            "<div class=\"sp-modal-footer\">",
                "<div class=\"nb-buttons center\">",
                    "<div class=\"nb-btn-save nb-theme\"><button ng-click=\"modal.close()\">{{modal.params.okMessage}}</button></div>",
                "</div>",
            "</div>"
        ].join("\n")
    );

    $templateCache.put("confirmTemplate",
        [
            "<div class=\"sp-modal-header\">",
                "<section class=\"nb-title page\">",
                    "<h2><em>{{ modal.params.title }}</em></h2>",
                "</section>",
                "<span class=\"sp-modal-close\" ng-click='modal.close()'></span>",
            "</div>",
            "<div class=\"sp-modal-body\">",
                "<div ng-bind-html='modal.params.message | to_trusted'></div>",
            "</div>",
            "<div class=\"sp-modal-footer\">",
                "<div class=\"nb-buttons center\">",
                    "<div class=\"nb-btn-save nb-theme\"><button ng-click=\"modal.ok()\">{{modal.params.okMessage}}</button></div>",
                    "<div class=\"nb-btn-save\"><button ng-click=\"modal.no()\">{{modal.params.noMessage}}</button></div>",
                "</div>",
            "</div>"
        ].join("\n")
    );

    $templateCache.put("datepickerModalTemplate",
        [
            "<div class=\"sp-modal-header\">",
                "<section class=\"nb-title page\">",
                    "<h2><em>날짜선택</em></h2>",
                "</section>",
                "<span class=\"sp-modal-close\" ng-click='modal.close()'></span>",
            "</div>",
            "<div class=\"sp-modal-body\" style='overflow:visible;'>",
            "<div class=\"nb-inputCalendarMore nb-2m wid100\">",
                "<div class=\"nb-inputText calendar\">",
                    "<label>",
                        "<div>",
                            "<input type=\"text\" id='modalDatePicker' bs-datepicker data-date-format=\"yyyy-MM-dd\" data-model-date-format=\"yyyy-MM-dd\" ng-model=\"modal.selectedDate\"/>",
                            "<a href=\"javascript:void(0);\"><em>날자검색</em></a>",
                            "<i></i>",
                        "</div>",
                    "</label>",
                "</div>",
            "</div>",
            "</div>",
            "<div class=\"sp-modal-footer\" ng-click\"modal.test();\">",
                "<div class=\"nb-buttons center\">",
                    "<div class=\"nb-btn-save nb-theme\"><button ng-click=\"modal.returnDate()\">확인</button></div>",
                "</div>",
            "</div>"
        ].join("\n")
    );


}]);

require("./SpModal/factories/SpModal")(app);
require("./SpModal/services/Toast")(app);