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

            scope.getScrollbarWidth = getScrollbarWidth;

            function getScrollbarWidth() {
                var outer = document.createElement("div");
                outer.style.visibility = "hidden";
                outer.style.width = "100px";
                outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

                document.body.appendChild(outer);

                var widthNoScroll = outer.offsetWidth;
                // force scrollbars
                outer.style.overflow = "scroll";

                // add innerdiv
                var inner = document.createElement("div");
                inner.style.width = "100%";
                outer.appendChild(inner);

                var widthWithScroll = inner.offsetWidth;

                // remove divs
                outer.parentNode.removeChild(outer);

                return widthNoScroll - widthWithScroll;
            }


            function calculateWidth(){
                var _headerWidth = element.width();

                var _useageWidth = 0;

                var _headerColumns = scope.gridObject.getColumnDef();
                var _wildCardColumn = null;


                angular.forEach( scope.gridObject.getColumnDef(), function( column ){
                    if( column.hasOwnProperty("width") ){
                        if( !column.hasOwnProperty("hidden") ){
                            if( column.hasOwnProperty("fillRemainWidth")
                                && column.fillRemainWidth ){
                                _wildCardColumn = column;
                            } else {
                                _useageWidth += parseInt(column.width);
                            }
                        }
                    } else {
                        throw new Error([ column.name + "컬럼의 너비를 지정해주세요"])
                    }
                });

                var _gapWidth = (_headerWidth - _useageWidth) - ( getScrollbarWidth()  );

                var sumWidth = 0;
                if( _wildCardColumn == null ){
                    if( _gapWidth > 0 ){
                        var _usePercentage = 0;
                        angular.forEach( scope.gridObject.getColumnDef(), function( column ){
                            if( !column.hasOwnProperty("hidden") ){
                                _usePercentage = parseInt(column.width) / _useageWidth;

                                column.width = parseInt(column.width) + parseFloat(( _usePercentage * _gapWidth )) + "px";
                                sumWidth += parseFloat(column.width);
                            }
                        });

                    }
                } else {
                    angular.forEach( scope.gridObject.getColumnDef(), function( column ){
                        if( _wildCardColumn.id !== column.id)
                            sumWidth += parseFloat(column.width);
                    });
                    if( _gapWidth > 0 ) {
                        _wildCardColumn.width = (_gapWidth ) + "px";
                        sumWidth += parseFloat(_gapWidth);
                    }
                }


                if( _headerWidth > 0 && _headerWidth -1  <=  (sumWidth + getScrollbarWidth()) ) {
                    var overWidth = (sumWidth + getScrollbarWidth()) - (_headerWidth - 2);
                    _headerColumns[_headerColumns.length - 1].width = (parseFloat(_headerColumns[_headerColumns.length - 1].width) - overWidth) + "px";
                }

            }

            scope.$on("gridColumnChange" , calculateWidth );
            // function getWidth(){
            //     var _resultWidth = 0;
            //     element.css({ position :"absolute", visibility : "hidden", display : "block", width: "100%"});
            //     _resultWidth = element.width();
            //     element.css({ position : "", visibility : "", display : "" });
            //     return _resultWidth;
            // }




        }
    }
}

module.exports = function(app){
    app.directive("spGridHeader", spGridHeader);
};