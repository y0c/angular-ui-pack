function SpModal( $rootScope, $controller, $document, $q, $templateCache, $templateRequest, $compile ){

    var body = angular.element($document[0].body);

    var backdropTemplate     = "<div class='sp-modal-backdrop out'></div>";
    var modalWrapperTemplate = "<div class='sp-modal-wrap out'><div class='sp-modal'></div></div>";

    var modalStack = [];


    function SpModal( options ){
        var _self = this;


        var _defaultOptions = {
            template : null,
            params : {},
            controller : null,
            size : "sm",
            modalAction : {
                onOpen : function(){

                },
                onClose : function(){

                },
                onResult : function(){

                }
            }
        };

        this.options = angular.extend({}, _defaultOptions, options);

        if( options.hasOwnProperty("modalAction")){
            this.options.modalAction = angular.extend({}, _defaultOptions.modalAction, options.modalAction );
        }
        this.init();

    }

    function modalIn( $element ){
        $element.removeClass("out");
        $element.addClass("in");
    }

    function modalOut( $element ){
        $element.removeClass("in");
        $element.addClass("out");
    }

    SpModal.prototype.init = function(){
        var _self   = this;
        var options = this.options;

        this.scope         = $rootScope.$new();
        this.$modalWrapper = angular.element(modalWrapperTemplate);
        this.$backdrop     = angular.element(backdropTemplate);

        this.$modalWrapper.find(".sp-modal").append($templateCache.get(options.template));


        var linkFn = $compile( this.$modalWrapper );
        var modalTemplate = linkFn(this.scope);

        body.append( modalTemplate )
            .append( this.$backdrop );

        var ctrlInput = {
            $scope : _self.scope,
            instance : {
                params : options.params,
                close : _self.close.bind(_self),
                result : _self.getModalAction().onResult.bind(_self)
            }
        };

        this.controller = $controller( options.controller, ctrlInput, false,  "modal" );

    };
    SpModal.prototype.getModalAction = function(){
        return this.options.modalAction;
    };

    SpModal.prototype.getSize = function(){
        return this.options.size;
    };

    SpModal.prototype.setSize = function( size ){
        this.options.size = size;
    };


    SpModal.prototype.open = function( options ){
        var $spModal = this.$modalWrapper.find(".sp-modal");

        this.getModalAction().onOpen( this.controller );
        modalIn(this.$modalWrapper);
        modalIn(this.$backdrop);
        modalStack.push(this);
    };

    SpModal.prototype.close = function(){
        this.getModalAction().onClose( this.controller );
        modalOut(this.$backdrop);
        modalOut(this.$modalWrapper);
        modalStack.pop();
    };

    SpModal.prototype.destroy = function(){
        this.$backdrop.remove();
        this.$modalWrapper.remove();
        this.scope.$destroy();
    };


    return SpModal;
}

module.exports = function( app ){
    app.factory("SpModal", SpModal);
};