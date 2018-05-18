
const syncScrollDirective = () => {
    return {
        restrict : 'A',
        link( $scope, $element, $attr ) {
            $element.on('scroll', () => {
                let $target = $element;
                $scope.scrollWatchService.setPosition($target.scrollLeft());
            })
        }
    }
}

export default syncScrollDirective;