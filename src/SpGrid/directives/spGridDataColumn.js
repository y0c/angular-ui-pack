/**
 * Grid Data Column Directive
 */

import template from '../template/SpGridDataColumn.tmpl.html';
 const spGridDataColumn  = () => {
     return {
        restrict : 'E',
        template,
        replace : true,
        controller : 'SpGridDataColumnController',
        controllerAs : '$column'
     };
 }

export default spGridDataColumn;