import GridController from './GridController';
import { DELETE_FLAG, ROW_SELECT_CLASS } from '../SpGridConstant';
class SpGridDataRowController extends GridController{
    // static inject = [ '$scope' ];

    constructor( $scope, $element, $compile, SpGridUtil ) {
        super($scope);
        this.$columns = this._grid.getVisibleColumn();
        this._element = $element;
        this._util = SpGridUtil;
        this.bindEvents();
        // $element.html(() => $compile(this.generateRowTemplate()) );
    }

    bindEvents() {
        this.bindGridEvent('gridColumnChange', () => this.$columns = this._grid.getVisibleColumn());
        this.bindGridEvent('rowStyleChange', ($scope, paramMap) => {
            if( paramMap.rowIdx == this._scope.$index ){
                this._element.css(paramMap.style);
            }
        })
//             scope.$on( scope.gridObject.getId() + "rowStyleChange", setRowStyle);
    }
    
    onGridDataRowClick( row ){
        const {
            _grid,
            _util,
            _scope
        } = this;

        if ( this._grid.isSelectable() ){
            let oldRowIdx = _grid.getSelectedIndex();
            let oldRow    = _grid.getSelectedRow();
            let newRowIdx = _scope.rowidx;

            let onRowSelectedChange =  _util.castToPromise(
                _grid.gridAction.onRowSelectedChange( oldRowIdx, oldRow, newRowIdx, row )
            );

            onRowSelectedChange
                .then(() => {
                    _grid.setSelectedRow( row );
                });
        }

        _grid.gridAction.onRowClick( row, _scope.rowidx );
    }

    onGridDataRowDblClick( row ){
        const { _grid, _scope } = this;
        _grid.gridAction.onRowDblClick( row, _scope.rowidx );
    }

    isRowDeleted() {
        if( this._scope.row.hasOwnProperty("cudFlag") ){
            return this._scope.row.cudFlag == DELETE_FLAG;
        }
        return false;
    }

    getRowClass(){
        // if( this._scope.isRowActive() ){
        //     return SpGridConstant.ROW_ACTIVE_CLASS;
        // }

        if( this._grid.isSelectable() && this._scope.row.hasOwnProperty("__isSelected") && this._scope.row.__isSelected ){
            return ROW_SELECT_CLASS;
        }

        return ""
    };



    generateRowTemplate() {
        return this.$columns.map( v => `<div class='sp-grid-data-column'>{{row['${v.id}']}}</div>` ).join('');
    }

}



export default SpGridDataRowController;