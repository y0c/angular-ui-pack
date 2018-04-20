function ngRightClick($parse) {
    return function(scope, element, attrs) {
        var fn = $parse(attrs.ngRightClick);
        element.bind('contextmenu', function(event) {
            scope.$apply(function() {
                event.preventDefault();
                fn(scope, {$event:event});
            });
        });
    };
}


function resize($window, $parse, $timeout) {
    return {
        restrict : 'A',
        link : function( scope, element, attrs ) {  
            var onResize = $parse(attrs.onResize);
            //gridbody의 처음 width를 가져와서 할당 
            //만약 div가 보이지 않는 상황이라면 모든 컬럼의 너비를 더해서 계산함
            var loadedWidth = (function(){
                var headerColumns = scope.gridObject.getColumnDef(),
                    elemWidth     = element.parents('.sp-grid-box').parent().width(),
                    windowWidth   = $window.innerWidth,
                    loadedWidth   = null,
                    sumWidth      = 0;
                
                // var testDiv = '<div id="sp-grid-test-div" style="position:absolute;width:100%;visibility:hidden;z-index:9999"></div>"';
                // elemWidth = element.parents('.sp-grid-box').parents(":visible").eq(0).append(testDiv)
                //     .find('#sp-grid-test-div').width();


                angular.forEach( headerColumns, function( column ){
                    sumWidth += parseInt(column.width);                    
                });

                sumWidth += scope.scrollBarWidth;

                loadedWidth = elemWidth < sumWidth ? sumWidth : elemWidth;
                // loadedWidth = elemWidth;
                
                if ( loadedWidth > windowWidth ) {
                    loadedWidth = windowWidth; 
                }
              

                // $timeout(function(){
                //     onResize(scope, { width : loadedWidth });
                // });

                return loadedWidth;
            })();

            function setSize( width ){
                onResize(scope, { width : width });

                var gridSize = scope.gridObject.getSize();

                scope.gridObject.setSize({
                    width : width,
                    height : gridSize.height
                });
            }
            
            angular.element($window).on('resize', function(){
                var parentSize = element.parents('.sp-grid-box').parent().width();
                if ( $window.innerWidth < loadedWidth ) {
                    setSize($window.innerWidth - 10);
                } else {
                    setSize(parentSize);
                }

            });

            function cleanUp() {
                angular.element($window).off('resize');
            }

            scope.$on(scope.gridObject.getId() + 'gridDataReset', function(){
                var parentSize = element.parents('.sp-grid-box').parent().width();
                setSize(parentSize);
            });
            scope.$on('$destory', cleanUp);
        }
    }
}


module.exports = function(app){
    app.directive("ngRightClick", ngRightClick);
    app.directive("wResize", resize);
    app.filter("to_trusted", ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);

    app.filter('startFrom', function () {
        return function (input, start) {
            if (input) {
                start = +start;
                return input.slice(start);
            }
            return [];
        };
    });

    app.directive('onFinishRender', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function () {
                        scope.$emit(attr.onFinishRender);
                    });
                }
            }
        }
    });
    app.directive('convertToNumber', function() {
        return {
            require: 'ngModel',
            link: function(scope, element, attrs, ngModel) {
                ngModel.$parsers.push(function(val) {
                    return val != null ? parseInt(val, 10) : null;
                });
                ngModel.$formatters.push(function(val) {
                    return val != null ? '' + val : null;
                });
            }
        };
    });

    app.directive('compileHtml', function($compile) {
        return {
            restrict: 'A',
            replace : true,
            // require : "?spGrid",
            link: function (scope, element, attrs) {
                var compileHtml = scope.$eval(attrs.compileHtml);
                element.html(compileHtml);
                $compile(element.contents())(scope);
            }
        };
    });
};