/**
 * Grid Data Row Directive
 */
import template from '../template/SpGridDataRow.tmpl.html';

const spGridDataRow = ( $compile ) => {
    return {
        restrict : 'E',
        replace : true,
        controller : 'SpGridDataRowController',
        controllerAs : '$row',
        template
    }
}

export default spGridDataRow;