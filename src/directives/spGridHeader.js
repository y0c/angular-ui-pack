/**
 * Grid Header Wrap Directive
 */
function spGridHeader( $compile, SpGridConstant){
    return {
        restrict : "E",
        controller : "spGridController",
        require : "^spGrid",
        replace : true,
        templateUrl : SpGridConstant.template.SP_GRID_HEADER,
        link : function( scope, element, attrs, ctrls, transclude ){
            var _headerWidth = element.width();

            var _useageWidth = 0;

            var _headerColumns = scope.gridObject.getColumnDef();

            angular.forEach( _headerColumns, function( column ){
                if( column.hasOwnProperty("width") ){
                    _useageWidth += parseInt(column.width);
                } else {
                    throw new Error([ column.name + "컬럼의 너비를 지정해주세요"])
                }
            });

            var _gapWidth = (_headerWidth - _useageWidth)-15;

            if( _gapWidth > 0 ){
                var _usePercentage = 0;
                angular.forEach( _headerColumns, function( column ){
                    _usePercentage = parseInt(column.width) / _useageWidth;
                    column.width = (parseInt(column.width) + parseFloat(( _usePercentage * _gapWidth ).toFixed(1))) + "px";
                    console.log(parseFloat(( _usePercentage * _gapWidth ).toFixed(1)));
                });
            }

        }
    }
}

module.exports = function(app){
    app.directive("spGridHeader", spGridHeader);
};