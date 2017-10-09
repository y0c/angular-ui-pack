function SpStatusFactory( $rootScope ){
    return function( action, id ){
        $rootScope.$broadcast( "spStatusChange", {
            action : action,
            id : id
        });
    }
}

module.exports = function( app ){
    app.factory( "spStatus", SpStatusFactory );
}