
class SpGridDataColumnController {
    constructor( $scope ) {
        this.$scope = $scope;
    }

    test(){
        console.log(this.$scope.text);
        return 'ererer';
    }
}

export default SpGridDataColumnController;