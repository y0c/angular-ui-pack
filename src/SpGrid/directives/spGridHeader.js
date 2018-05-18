import template from '../template/SpGridHeader.tmpl.html';

const spGridHeader = ( $compile, SpGridConstant ) => {
    return {
        restrict : 'E',
        controller : 'SpGridHeaderController',
        controllerAs : '$header',
        replace : true,
        template
    }
}

export default spGridHeader;