import GridController from './GridController';
class SpGridFooterController extends GridController{ 
   
    static $inject = [ '$scope', '$element', 'SpGridUtil'];

    constructor( $scope, $element, SpGridUtil ){
        super($scope);
        this._scope      = $scope;
        this._element    = $element;
        this._util       = SpGridUtil;
        this.columns     = this._grid.columnDef;
        this.bindEvents();
    }

    bindEvents() {
        const { 
            _scope,
            _grid,
            _util,
            _element
         } = this;
        const { gridObject } = _scope;

        this.bindGridEvent('gridDataReset', () => {
            _scope.group = {};
            if( _grid.getTotalRecordCount() > 0 ) {
                _scope.group = _util.aggregateGroup(
                    { list : _grid.getFilteredData() }
                     ,_grid.getGrouping().aggregate 
                );
            }
        })

        _scope.scrollWatchService.on( pos => _element.scrollLeft(pos) );
        
    }
}

export default SpGridFooterController;