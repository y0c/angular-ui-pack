import GridController from './GridController';
class SpGridDataColumnController extends GridController{
    constructor( $scope, $element ) {
        super($scope);
        this._element = $element;
        let _headerColumns = this._grid.columnDef;
        let _headerColumn = this._scope.headerColumn;
        this.columnWidth = _headerColumn.width;
        this.columnHeader= _headerColumn.name;
        this.type        = _headerColumn.type || "data";


        this.onCellClick = this._grid.gridAction.onCellClick;

        if( this.isTypeHtml() ) {
            this.bindHtml    = _headerColumn.bindHtml;
            element.find(".sp-grid-data-html").append(
                $compile(scope.bindHtml)(scope)
            );
        }
        this.bindEvents();
    }

    bindEvents() {
        this.bindGridEvent('cellStyleChange', ($scope, paramMap) => {
            if( paramMap.rowIdx == this._scope.rowidx && 
                paramMap.colIdx == this._scope.$index ) {
                    this._element.css(paramMap.style);
                }
        })
    }

    getRowno(){
        let _pageSize = this._grid.getPageSize();
        let _currentPage = this._grid.getCurrentPage() || 1;

        return  (_pageSize * (_currentPage-1)) + (this_scope.$parent.$index + 1);
    }

    isTypeRowno(){
        return this.type == 'rowno';
    }

    isTypeData(){
        return this.type == "data";
    }

    isTypeHtml(){
        return this.type == "html";
    }


}

export default SpGridDataColumnController;