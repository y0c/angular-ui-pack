/**
 * Grid Column Cell Sizier
 */
function spGridCellSizer( $compile, SpGridConstant, $templateCache, SpGridUtil,  $timeout, $q ) {
    return {
        restrict: "A",
        controller: "SpGridController",
        require: ['?spGridGropingRow'],
        link: function (scope, element, attrs ) {
            var headerColumns = scope.gridObject.getColumnDef();
            setSize();

            function setSize() {
                var size = getSize();
                element.css({
                    maxWidth : size,
                    minWidth : size
                });
            }

            function getSize(){
                var sizer = attrs.spGridCellSizer;

                if( sizer.indexOf("..") > -1  ){
                    var start = sizer.split("..")[0];
                    var end   = sizer.split("..")[1];

                    var sum = 0;
                    for( var i = start - 1 ; i <= end - 1 ; i ++ ){
                        sum += parseFloat(headerColumns[i].width);
                    }
                    return sum;
                }

                if( !headerColumns[ sizer - 1 ] ){
                    throw new Error(["SpGridCellSizer : 컬럼 번호가 잘못 지정되었습니다."]);
                }

                return headerColumns[ sizer - 1 ].width;
            }

            scope.$on(scope.gridObject.getId() + "gridDataReset", setSize);
        }

    }
}


module.exports = function( app ){
    app.directive("spGridCellSizer", spGridCellSizer);
};
