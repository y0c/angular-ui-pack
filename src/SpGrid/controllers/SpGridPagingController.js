import GridController from './GridController';

class SpGridPagingController extends GridController {
    
    static $inject = [ '$scope' ];

    constructor($scope) {
        super($scope);
        this.currentPage = this._scope.pagingOptions.currentPage || 1;
        this.pageSize    = this._scope.pagingOptions.pageSize;
        this.pageBlockSize = this._scope.pagingOptions.pageBlockSize;


        this.totalPageBlock = Math.floor( this.totalRecordCount / this.pageBlockSize );
        this.calculateCurrentPageBlock();
    }

    getPageBlock() {
        let _pageBlock = [];
        let _minPage   = (this.currentPageBlock-1) * this.pageBlockSize;
        let _maxPage   = _minPage + this.pageBlockSize;

        for( let i = _minPage ; i < _maxPage ; i ++ ){
            if( i < this.totalPage ){
                _pageBlock.push(i+1);
            }
        }
        return _pageBlock;
    }

    nextPage(){
        if( this.currentPage < this.totalPage ){
            this.gotoPage(this.currentPage+1);
        }
    }

    prevPage(){
        if( this.currentPage > 1 ){
            this.gotoPage(this.currentPage-1);
        }
    }

    gotoPage( page ){
        const { _scope } = this;
        let _minPage, _maxPage;
        this.currentPage = page;
        _scope.pagingOptions.currentPage = page;
        this.calculateCurrentPageBlock();
        _minPage   = (_scope.currentPageBlock-1) * _scope.pageBlockSize;
        _maxPage   = _minPage + _scope.pageBlockSize;
        _scope.onPageClick( _minPage, _maxPage );
    }

    calculateCurrentPageBlock(){
        this.currentPageBlock = Math.ceil( this.currentPage / this.pageBlockSize);
    }
}

export default SpGridPagingController;
