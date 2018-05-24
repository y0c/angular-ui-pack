const resize = ( $window, $parse, $timeout ) => {
    return {
        restrict : 'A',
        link(scope, element, attrs ) {
            
            let onResize = $parse(attrs.onResize);
            //gridbody의 처음 width를 가져와서 할당 
            //만약 div가 보이지 않는 상황이라면 모든 컬럼의 너비를 더해서 계산함
            let loadedWidth = (function(){
                var headerColumns = scope.gridObject.columnDef,
                    elemWidth     = element.parents('.sp-grid-box').parent().width(),
                    windowWidth   = $window.innerWidth,
                    loadedWidth   = null,
                    sumWidth      = 0;
                
                angular.forEach( headerColumns, function( column ){
                    sumWidth += parseInt(column.width);                    
                });

                sumWidth += scope.scrollBarWidth;

                loadedWidth = elemWidth < sumWidth ? sumWidth : elemWidth;
                
                if ( loadedWidth > windowWidth ) {
                    loadedWidth = windowWidth; 
                }
                return loadedWidth;
            })();

            function setSize( width ){
                onResize(scope, { width : width });

                var gridSize = scope.gridObject.getSize();

                gridSize.width = width;
            }

            function setWidth() {
                $timeout(function(){
                    var parentSize = element.parents('.sp-grid-box').parent().width();
                    if ( $window.innerWidth < loadedWidth ) {
                        setSize($window.innerWidth - 10);
                    } else {
                        setSize(parentSize);
                    }
                });
            }
            
            angular.element($window).on('resize', setWidth);

            function cleanUp() {
                angular.element($window).off('resize');
            }

            scope.$on(scope.gridObject.getId() + 'gridDataReset', setWidth);
            scope.$on(scope.gridObject.getId() + 'gridColumnChange', setWidth);

            scope.$on('$destory', cleanUp);
        }
    }
}



const toTrusted = ( $sce ) => {
    return text => $sce.trustAsHtml(text);
};

const startFrom = () => {
    return (input, start) => {
        if ( input ) {
            start = + start;
            return input.slice(start);
        }
        return [];
    }
};

const onFinishRender = $timeout => {
    return {
        restrcit : 'A',
        link(scope, element, attr) {
            if (scope.$last === true) {
                $timeout(() => {
                    scope.$emit(attr.onFinishRender);
                });
            }
        }
    }
};

const convertToNumber = () => {
    return {
        require: 'ngModel',
        link(scope, element, attrs, ngModel) {
            ngModel.$parsers.push(function(val) {
                return val != null ? parseInt(val, 10) : null;
            });
            ngModel.$formatters.push(function(val) {
                return val != null ? '' + val : null;
            });
        }
    };
};

const compileHtml = ( $compile) => {
    return {
        restrict: 'A',
        replace : true,
        // require : "?spGrid",
        link(scope, element, attrs) {
            let compileHtml = scope.$eval(attrs.compileHtml);
            element.html(compileHtml);
            $compile(element.contents())(scope);
        }
    };
} 

export {
    compileHtml,
    convertToNumber,
    onFinishRender,
    startFrom,
    toTrusted,
    resize
};