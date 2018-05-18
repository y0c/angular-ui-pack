class SpGridDataRowController {
    // static inject = [ '$scope' ];

    constructor( $scope, $element, $compile ) {
        this.$scope = $scope;
        this.$columns = $scope.gridObject.getVisibleColumn();
        // $element.html(() => $compile(this.generateRowTemplate()) );
    }

    generateRowTemplate() {
        return this.$columns.map( v => `<div class='sp-grid-data-column'>{{row['${v.id}']}}</div>` ).join('');
    }
}



export default SpGridDataRowController;