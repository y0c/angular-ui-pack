import GridController from './GridController';
class SpGridHeaderController extends GridController {
    static $inject = [ '$scope', '$element' ];
    constructor( $scope, $element) {
        super( $scope );
        this._element = $element;
        this.columns = this._grid.getVisibleColumn();
        this.bindEvents();
    }

    bindEvents() {
        const { _scope, _element } = this;
        this.bindGridEvent('gridWidthChange', (event, param) =>  {
            console.log(param);
        });
        this.bindGridEvent('gridColumnChange', () => _scope.headerColumns = [ ..._scope.gridObject.getVisibleColumn() ]);
        _scope.scrollWatchService.on( pos => _element.scrollLeft(pos));
    }
    
}

export default SpGridHeaderController;
