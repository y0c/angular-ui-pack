function scrollWatchService() {
    var stage = [];
    var watchFunc = null;
    return {
        setPosition : function( pos ){
            watchFunc(pos);
        },
        on : function( func ){
            watchFunc = func; 
        }
    }
}

module.exports = function( app ){ 
    app.factory('scrollWatchService', scrollWatchService );
}