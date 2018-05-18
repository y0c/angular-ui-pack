import GridController from './GridController';

class SpGridController extends GridController {
    constructor( $scope, SpGridUtil ) {
        super($scope);
        this._util = SpGridUtil;
        this.init();
    }
    
    init() {
        const { _scope } = this;
        _scope.scrollWatchService = (() => {
            let observers = [];
            return {
                on( func ) {
                    observers.push(func);
                },
                setPosition( pos ) {
                    observers.forEach(v=> v(pos));
                }
            }
        })();

        //TODO: refactoring
        _scope.scrollBarWidth = (() => {
            let outer = document.createElement("div");
            outer.style.visibility = "hidden";
            outer.style.width = "100px";
            outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
    
            document.body.appendChild(outer);
    
            let widthNoScroll = outer.offsetWidth;
            // force scrollbars
            outer.style.overflow = "scroll";
    
            // add innerdiv
            let inner = document.createElement("div");
            inner.style.width = "100%";
            outer.appendChild(inner);
    
            let widthWithScroll = inner.offsetWidth;
    
            // remove divs
            outer.parentNode.removeChild(outer);
    
            return widthNoScroll - widthWithScroll;
        })();
         
        _scope.syncWidth = this.syncWidth.bind(this);        
        _scope.filterDataColumn = this.filterDataColumn.bind(this);
        _scope.getColumnData = this.getColumnData.bind(this);
        _scope.orderChange   = this.orderChange.bind(this);
        _scope.filtering     = this.filtering.bind(this);
        _scope.noMessageShow = this.noMessageShow.bind(this);
        this._registerFunction();
    }


    syncWidth( width ) {
        this.broadCastGridEvent('gridWidthChange', { width });
    }

    orderChange( columnId, orderBy ) {
        const { _grid, _filter} = this;
        let orderByFilter = _filter('orderBy');
        if( orderBy == "asc" ){
            _grid.setData(orderByFilter(_grid.getData(),"-" + columnId, true));
        } else if ( orderBy == "desc" ){
            _grid.setData(orderByFilter(_grid.getData(),"-" + columnId, false));
        }
    }

    filtering() {
        const { _grid, _filter } = this;
        if( _grid.isEnablePaging() ){
            _grid.getPagingOptions().currentPage = 1;
        }
        _grid.setFilteredData( _filter("filter")(_grid.getData(), _grid.getFilteringQuery()) );
    }
    
    noMessageShow() {
        const { _grid } = this;
        if( _grid.isEnablePaging() ){
            let currentPage = _grid.getCurrentPage() || 1;
            let pageSize    = _grid.getPageSize();
            let start       = currentPage - 1;
            let end         = start + pageSize;
            return _grid.getFilteredData().slice(start,end).length === 0
                     && _grid.getCreateData().length === 0;
        } else {
            return _grid.getFilteredData().length === 0
                 && _grid.getCreateData().length === 0;
        }

    }

    bindEvents() {
        const { _scope } = this;
        
    }

    _registerFunction() {
        const { _scope, _grid } = this;
        let _functions = _grid.getRegisterFunction();
        for( let key in _functions) {
            _scope[key] = _functions[key];     
        }
    }

    filterDataColumn( data ) {
        const { _grid } = this;
        let result      = {};
        let _columns    = _grid.getColumnDef();

        for ( let key in data ) {
            if( this._gridColumnIds().indexOf(key) != -1 ) {
                result[key] = data[key];
            }
        }

        return result;
    }

    getGridColumnIds() {
        const { _scope } = this;
        let _columns = _grid.getColumnDef();

        return _columns.reduce((result, v) => {
            if( v.hasOwnProperty('id') ) result.push(v.id);
        },[]);
    }

    getColumnData( id, targetFiled ) {
        const { _util, _grid } = this;
        return _util.getMapData( _grid.getColumnDdef() , id, 'id', targetField );
    }
}

export default SpGridController;