import GridController from './GridController';

class SpGridBodyController extends GridController {
    static $inject = [ '$scope', 'SpGridUtil', '$element' ];

    constructor($scope, util, $element ) {
        super($scope);
        this._util = util;
        this._element = $element;
        this._scope.range = this.range.bind(this);
        this.bindEvents();
    }

    bindEvents() {
       const { 
           _scope,
           _grid,
           _util,
           _element
       } = this;

       this.bindGridEvent('gridDataReset', () => {
            if( _grid.isGroupable() ){
                if( _grid.getFilteredData().length === 0 ) {
                    _scope.$groups = [];
                } else {
                    let groupList = _util.groupByList(_grid.getFilteredData(), _grid.getGrouping().groupingColumn);
                    _scope.$groups = _util.aggregateGroupList(groupList, _grid.getGrouping().aggregate);
                }
            }
       });

       this.bindGridEvent('gridWidthChange', (event, param) => _element.width(param.width));
       _scope.$on('onRowRenderFinished', _grid.gridAction.onRowRenderFinished );

       _scope.$watch('gridObject.getPagingOptions()', () => {
            let _currentPage = _grid.getCurrentPage() || 1;
            let _pageSize    = _grid.getPageSize();
            _scope.start    = (_currentPage-1) * _pageSize;
            _scope.pageSize = _pageSize;
            // scope.$rows               = range( scope.gridObject.getData(), scope.start, scope.start + scope.pageSize );
            _scope.$parent.$broadcast("pageChange");
       },true)
    }

    range( start, end ){
        const { _grid } = this;
        if( _grid.isEnablePaging() ){
            return _grid.getFilteredData().slice( start, end );
        }
        return _grid.getFilteredData();
    }
}

export default SpGridBodyController;


