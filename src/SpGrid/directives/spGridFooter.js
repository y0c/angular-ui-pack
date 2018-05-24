import template from '../template/SpGridFooter.tmpl.html';

const spGridFooter = () => {
    return {
        restrict : 'E',
        controller : 'SpGridFooterController',
        controllerAs : '$footer',
        require : '^spGrid',
        replace : true,
        template
    }
};

export default spGridFooter;