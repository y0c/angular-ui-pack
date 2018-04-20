
function spGridController( $scope, SpGridUtil, ScrollWatchService ){
    var _gridObject  = $scope.gridObject;
    var _gridColumns = _gridObject.getColumnDef();

    var _gridColumnIds = getGridColumnIds();


    $scope.init = init;
 

    $scope.filterDataColumn = filterDataColumn;

    $scope.getColumnData = getColumnData;


    $scope.scrollBarWidth = (function(){
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
    })();



    function init(){
        registerFunction();
    }
    /**
     * Header Column 의 아이디 값만 배열로 리턴
     * @returns {Array}
     */
    function getGridColumnIds(){
        var result = [];
        angular.forEach( _gridColumns, function( col ){
            if( col.hasOwnProperty("id"))
                result.push(col.id);
        });
        return result;
    }

    /**
     * header Column에 있는 애들만 display 함
     * @param data
     * @returns {{}} - filter Object
     */
    function filterDataColumn( data ){
        var result      = {};
        var _columns    = this.getColumnDef();

        angular.forEach( data, function( value, key ){
            if( _gridColumnIds.indexOf(key) != -1 ){
                result[key] = value;
            }
        });

        return result;
    }


    /**
     * id 값으로 컬럼 너비를 구해옴
     * @param id
     * @param targetField
     * @returns {*|targetValue}
     */
    function getColumnData( id, targetField ){
        return SpGridUtil.getMapData( _gridColumns, id, 'id', targetField );
    }


    function registerFunction(){
        var _functions = _gridObject.getRegisterFunction();

        angular.forEach( _functions, function( fn, key ){
            $scope[key] = fn;
        });
    }


    init();
}


module.exports = function( app ){
    app.controller("spGridController", spGridController);
};