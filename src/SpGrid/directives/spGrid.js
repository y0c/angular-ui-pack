/**
 * Grid 전체 영역 Directive
 */
import template from '../template/SpGrid.tmpl.html';

const spGrid = () => {
    return {
        restrict : 'E',
        scope : {
            gridObject : '='
        },
        replace : true,
        controller : 'SpGridController',
        controllerAs : '$grid',
        template
    }
};

export default spGrid;
