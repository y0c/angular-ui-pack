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
                var _headerColumn = scope.headerColumn;
                var _pageDataset = scope.gridObject.getData().slice( (_currentPage-1)*_pageSize , ((_currentPage-1)*_pageSize) + _pageSize );
                var _resultFormatter = {
                    resultFormatter : function( result ){
                        return result;
                    }
                };
                if( _headerColumn.hasOwnProperty("summary") ){
                    if( _headerColumn.summary){
                        _headerColumn.summary = angular.extend({}, _resultFormatter,  _headerColumn.summary );
                        if( typeof _headerColumn.summary.type  == "string"){
                            scope.summary =
                                _headerColumn.summary.resultFormatter
                                (summaryType[_headerColumn.summary.type]( _pageDataset, _headerColumn.id ));
                        } else if( typeof _headerColumn.summary.type == "function"){
                            scope.summary = _headerColumn.summary.resultFormatter(
                                _headerColumn.summary.type( _pageDataset, _headerColumn.id )
                            );
                        } else {
                            throw new Error(["summary 타입은 string 혹은 function 이어야합니다"]);
                        }

                    }

                }
            }

        }
    }
}

module.exports = function( app ){
    app.directive("spGridFooterColumn", spGridFooterColumn );
};