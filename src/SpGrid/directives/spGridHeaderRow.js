/**
 * Grid Header Row Directive
 */
function spGridHeaderRow( $compile, SpGridConstant ){
    return {
        restrict : "E",
        controller : "SpGridController",
        require : "^spGridHeader",
        replace : true,
        templateUrl : SpGridConstant.template.SP_GRID_HEADER_ROW,
        link : function( scope, element, attrs ){

            scope.headerColumns = getColumns();


            // scope.$watch("gridObject.getColumnDef()", function(){
            //     scope.headerColumns = getColumns();
            // },true );

            scope.$on(scope.gridObject.getId() + "gridColumnChange", function(){
                scope.headerColumns = getColumns();
            });
            /**
             * colSpan 및 컬럼별 히든처리
             * @returns {Array}
             */
            function getColumns(){
                var _columns = [];
                var _colSpan       = 0;
                var colGroupIdxArr = [];

                angular.copy( scope.gridObject.getVisibleColumn(), _columns );
                colGroupIdxArr = getColGroup(_columns);
                //ColSpan 처리
                for( var i = colGroupIdxArr.length - 1 ; i > -1; i -- ){
                    _colSpan = _columns[colGroupIdxArr[i]].colSpan;
                    _columns.splice( colGroupIdxArr[i]+1, _colSpan-1 );
                }

                return _columns;
            }

            /**
             * colSpan 그룹을 나누고 그룹별 첫번째 인덱스를 배열에 담아 리턴
             * @returns {Array}
             */
            function getColGroup( _headerColumns ){
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