function spGridFooterColumn( SpGridConstant ){
    return {
        restrict : "E",
        controller : "spGridFooterController",
        require : "^spGrid",
        replace : true,
        templateUrl : SpGridConstant.template.SP_GRID_FOOTER_COLUMN,
        link : function ( scope, element, attrs ){

            var _headerColumn = scope.headerColumn;
            scope.columnWidth = _headerColumn.width;
            scope.columnHeader= _headerColumn.name;


            var summaryType = {
                sum : function( dataset, columnId ){
                    var result = 0;
                    angular.forEach( dataset, function( row ){
                        if( row.hasOwnProperty(columnId) ){
                            result += parseFloat(row[columnId]);
                        }
                    });
                    return result;
                },
                avg : function( dataset, columnId ){
                    var sum = summaryType.sum(dataset,columnId);
                    return sum / dataset.length;
                }
            };

            scope.$watchCollection("gridObject.getData()",function( dataset ){
                calculateSummary();
            });

            scope.$on("pageChange", calculateSummary);

            function calculateSummary( ){
                var _currentPage = scope.gridObject.getCurrentPage() || 1;
                var _pageSize    = scope.gridObject.getPageSize();
                var _pageDataset = scope.gridObject.getData().slice( (_currentPage-1)*_pageSize , ((_currentPage-1)*_pageSize) + _pageSize );
                if( scope.headerColumn.hasOwnProperty("summary") ){
                    if( scope.headerColumn.summary)
                    scope.summary = summaryType[scope.headerColumn.summary]( _pageDataset, scope.headerColumn.id );
                }
            }

        }
    }
}

module.exports = function( app ){
    app.directive("spGridFooterColumn", spGridFooterColumn );
};