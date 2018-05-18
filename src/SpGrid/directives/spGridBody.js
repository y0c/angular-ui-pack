/**
 * Grid Body Wrap Directive
 */
import template from '../template/SpGridBody.tmpl.html';
const spGridBody = () => {
    return {
        restrict : 'E',
        controller : 'SpGridBodyController',
        replace : true,
        template,
        link( $scope, $element, $attr ) {
            $scope.scrollTop = () => $element.scrollTop(0);
        }
    }
}

export default spGridBody;
