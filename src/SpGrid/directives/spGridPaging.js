function spGridPaging( SpGridConstant ){
    return {
        restrict : "E",
        scope : {
            pagingOptions : "=",
            onPageClick    : "&"
        },
        templateUrl : SpGridConstant.template.SP_GRID_PAGING,
        link : function( scope, element, attrs ){
            scope.currentPage   = scope.pagingOptions.currentPage || 1;
            scope.pageSize      = scope.pagingOptions.pageSize;
            scope.pageBlockSize = scope.pagingOptions.pageBlockSize;

            scope.$watch("pagingOptions", function( newObj ){
                scope.totalRecordCount =  newObj.totalRecordCount;
                scope.totalPage        = Math.ceil( scope.totalRecordCount / newObj.pageSize );
                scope.currentPage      = newObj.currentPage;
            },true);


            scope.totalPgaeBlock   = Math.floor( scope.totalRecordCount / scope.pageBlockSize );
            calculateCurrentPageBlock();

            scope.getPageBlock = getPageBlock;
            scope.nextPage     = nextPage;
            scope.prevPage     = prevPage;
            scope.gotoPage     = gotoPage;
            // scope.pageBlock    = getPageBlock();

            function getPageBlock(){
                var _pageBlock = [];
                var _minPage   = (scope.currentPageBlock-1) * scope.pageBlockSize;
                var _maxPage   = _minPage + scope.pageBlockSize;

                for( var i = _minPage ; i < _maxPage ; i ++ ){
                    if( i < scope.totalPage ){
                        _pageBlock.push(i+1);
                    }
                }
                return _pageBlock;
            }

            function nextPage(){
                if( scope.currentPage < scope.totalPage ){
                    gotoPage(scope.currentPage+1);
                }
            }

            function prevPage(){
                if( scope.currentPage > 1 ){

                    gotoPage(scope.currentPage-1);
                }
            }

            function gotoPage( page ){
                var _minPage, _maxPage;
                scope.currentPage = page;
                scope.pagingOptions.currentPage = page;
                calculateCurrentPageBlock();
                _minPage   = (scope.currentPageBlock-1) * scope.pageBlockSize;
                _maxPage   = _minPage + scope.pageBlockSize;
                scope.onPageClick( _minPage, _maxPage );
            }

            function calculateCurrentPageBlock(){
                scope.currentPageBlock = Math.ceil( scope.currentPage / scope.pageBlockSize);
            }

        }
    }
}

module.exports = function( app ){
    app.directive("spGridPaging", spGridPaging );
};