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
            calculateWidth();


            function calculateWidth(){
                var _headerWidth = getWidth();

                var _useageWidth = 0;

                var _headerColumns = scope.gridObject.getColumnDef();
                var _wildCardColumn = null;

                angular.forEach( _headerColumns, function( column ){
                    if( column.hasOwnProperty("width") ){
                        if( column.hasOwnProperty("fillRemainWidth")
                            && column.fillRemainWidth ){
                            _wildCardColumn = column;
                        } else {
                            _useageWidth += parseInt(column.width);
                        }
                    } else {
                        throw new Error([ column.name + "컬럼의 너비를 지정해주세요"])
                    }
                });

                var _gapWidth = (_headerWidth - _useageWidth)-5;

                if( _wildCardColumn == null ){
                    if( _gapWidth > 0 ){
                        var _usePercentage = 0;
                        angular.forEach( _headerColumns, function( column ){
                            _usePercentage = parseInt(column.width) / _useageWidth;
                            column.width = (parseInt(column.width) + parseFloat(( _usePercentage * _gapWidth ).toFixed(1))) + "px";
                            console.log(parseFloat(( _usePercentage * _gapWidth ).toFixed(1)));
                        });
                    }
                } else {
                    if( _gapWidth > 0 ){
                        _wildCardColumn.width = (_gapWidth+5) + "px";
                    }
                }

            }

            function getWidth(){
                var _resultWidth = 0;
                element.css({ position :"absolute", visibility : "hidden", display : "block", width: "100%"});
                _resultWidth = element.width();
                element.css({ position : "", visibility : "", display : "" });
                return _resultWidth;
            }




        }
    }
}

module.exports = function(app){
    app.directive("spGridHeader", spGridHeader);
};