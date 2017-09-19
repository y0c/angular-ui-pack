/**
 * Grid Header Row Directive
 */
function spGridHeaderRow( $compile, SpGridConstant ){
    return {
        restrict : "E",
        controller : "spGridController",
        require : "^spGridHeader",
        replace : true,
        templateUrl : SpGridConstant.template.SP_GRID_HEADER_ROW,
        link : function( scope, element, attrs ){

            var _headerColumns = scope.gridObject.getColumnDef();
            scope.headerColumns = getColumns();


            scope.$watch("gridObject.getColumnDef()", function(){
                scope.headerColumns = getColumns();
            },true );

            function getColumns(){
                var _columns = [];
                var _colSpan       = 0;
                var colGroupIdxArr = getColGroup();

                angular.copy( _headerColumns, _columns );
                for( var i = colGroupIdxArr.length - 1 ; i > -1; i -- ){
                    _colSpan = _columns[colGroupIdxArr[i]].colSpan;
                    _columns.splice( colGroupIdxArr[i]+1, _colSpan-1 );
                }

                return _columns;
            }

            function getColGroup(){
                var _column        = null;
                var _spanWidth     = 0;
                var colGroup       = [];
                for( var i = 0 ; i < _headerColumns.length ; i ++ ){
                    _column = _headerColumns[i];
                    if( _column.hasOwnProperty("colSpan") ){

                        colGroup.push(i);
                        _spanWidth = 0;

                        for( var j = i ; j < i + _column.colSpan ; j ++ ){
                            _spanWidth += parseInt(_headerColumns[j].width);

                        }
                        _column.spanWidth = _spanWidth;
                    }
                }
                return colGroup;
            }
        }
    }
}

module.exports = function(app){
    app.directive("spGridHeaderRow", spGridHeaderRow);
};