function ScrollWatchService() {
    this.stage = [];
    this.watchFunc = null;
}

ScrollWatchService.prototype.setPosition = function(pos){
    this.watchFunc(pos);
};

ScrollWatchService.prototype.on = function( func ) {
    this.watchFunc = func;
};

module.exports = function( app ){ 
    app.factory('ScrollWatchService', function(){
        return ScrollWatchService
    });
};