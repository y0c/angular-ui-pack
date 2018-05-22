import template from '../template/SpGridPaging.tmpl.html';

const spGridPaging = () => {
    return {
        restrict : 'E',
        scope : {
            pagingOptions : '=',
            onPageClick : '&'
        },
        controller : 'SpGridPagingController',
        controllerAs : '$paging',
        template,
        link( $scope, $element, $attrs, $ctrl ){
            $scope.$watch('pagingOptions', newObj => {
                $ctrl.totalRecordCount = newObj.totalRecordCount;
                $ctrl.totalPage        = Math.ceil( $ctrl.totalRecordCount / newObj.pageSize );
                $ctrl.currentPage      = newObj.currentPage;
            },true);
        }
    }
}

export default spGridPaging;