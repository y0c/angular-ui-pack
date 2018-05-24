class GridController {
    constructor( $scope ) {
        this._scope = $scope;
        this._grid = this._scope.gridObject;
    }

    bindGridEvent( key, func ) {
        const { _grid } = this;
        this._scope.$on( _grid.getId() + key, func);
    }

    broadCastGridEvent( key, func ) {
        const { _grid } = this;
        this._scope.$broadcast( _grid.getId() + key, func);        
    }
}

export default GridController;