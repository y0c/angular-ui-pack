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
            var loadedWidth = element.width();

            $timeout(function(){
                onResize(scope, { width : loadedWidth  });
            })
            
            angular.element($window).on('resize', function(){

                if ( $window.innerWidth < loadedWidth ) {
                    onResize(scope, { width : $window.innerWidth - 10 });
                } else {
                    onResize(scope, { width : loadedWidth });
                }
                // scope.gridObject.resize();

            });

            function cleanUp() {
                angular.element($window).off('resize');
            }

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