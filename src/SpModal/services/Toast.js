function ToastService( SpModal, $rootScope, $q, $templateCache  ){

    $templateCache.put( "alertTemplate",
        [
            "<div class=\"sp-modal-header\">",
                "<section class=\"nb-title page\">",
                    "<h2><em>{{ modal.params.title }}</em></h2>",
                "</section>",
            "</div>",
            "<div class=\"sp-modal-body\">",
                "<div ng-bind-html='modal.params.message'></div>",
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
            "</div>",
            "<div class=\"sp-modal-body\">",
                "<div ng-bind-html='modal.params.message'></div>",
            "</div>",
            "<div class=\"sp-modal-footer\">",
                "<div class=\"nb-buttons center\">",
                    "<div class=\"nb-btn-save nb-theme\"><button ng-click=\"modal.ok()\">{{modal.params.okMessage}}</button></div>",
                    "<div class=\"nb-btn-save\"><button ng-click=\"modal.no()\">{{modal.params.noMessage}}</button></div>",
                "</div>",
            "</div>"
        ].join("\n")
    );

    /**
     * alert modal instance 싱글톤 
     */
    this.alertModal = new SpModal({
        template : "alertTemplate",
        controller : function( instance ){

        }
    });

    /**
     * confirm modal instance 싱글톤 
     */
    this.confirmModal = new SpModal({
        template : "confirmTemplate",
        controller : function( instance ){
            var vm = this;

            vm.ok = function(){
                instance.close();
                vm.params.defer.resolve();
            };

            vm.no = function(){
                instance.close();
                vm.params.defer.reject();
            };
            
        }
    })

    /**
     * Toast alert 메소드 -  모달 형태의 alert을 띄움
     * @param opts - alert options
     * @return Prmoise - promise 객체 
     */
    this.alert = function( opts ){
        var defer = $q.defer();
        
        var _defaultOptions = {
            title : "알림",
            message : "",
            okMessage : "확인",
            size : "xs"
        };
        
        if( opts === "" || typeof opts === "undefined" || opts === null ){
            throw new Error(["Toast alert : message 인자는 필수 값입니다. requried"]);
        }

        if( typeof opts == "string" ){
            opts = angular.extend({}, _defaultOptions, {
                message : opts
            });
        } else if ( typeof opts == "object" ){
            opts = angular.extend({}, _defaultOptions, opts );
        }

        this.alertModal.setSize(opts.size);
        this.alertModal.setParams(opts);

        this.alertModal.setModalAction({
            onClose : function(){
                defer.resolve();
            }
        });

        this.alertModal.open();
        return defer.promise;
    };


    /**
     * Toast confirm 메소드 - 모달 형태의 confirm을 띄움
     * @param opts - alert options
     * @return Prmoise - promise 객체 
     */
    this.confirm = function( opts ){
        var defer = $q.defer();
        
        var _defaultOptions = {
            title : "확인",
            message : "",
            okMessage : "확인",
            noMessage : "취소",
            size : "xs",
            defer : defer
        };
        
        if( opts === "" || typeof opts === "undefined" || opts === null ){
            throw new Error(["Toast confirm : message 인자는 필수 값입니다. requried"]);
        }

        if( typeof opts == "string" ){
            opts = angular.extend({}, _defaultOptions, {
                message : opts
            });
        } else if ( typeof opts == "object" ){
            opts = angular.extend({}, _defaultOptions, opts );
        }

        this.confirmModal.setSize(opts.size);
        this.confirmModal.setParams(opts);
        
        this.confirmModal.open();

        return defer.promise;
    };

}


module.exports = function( app ){
    app.service("Toast", ToastService);
};