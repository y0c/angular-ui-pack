const spGridGroupingRow = ( SpGridConstant, $compile ) => {
    return {
        restrict : 'C',
        link( $scope, $element, $attrs ) {
            $scope.groupingType =  $attrs.groupingType;
            if( $attrs.groupingType == "group" && $scope.gridObject.isGroupable() ){
                $element.append( $compile($scope.gridObject.getGrouping().groupingRowTemplate)($scope));
            } else if( $attrs.groupingType == "total" && $scope.gridObject.isTotalize() ) {
                $element.append( $compile($scope.gridObject.getGrouping().totalRowTemplate)($scope));
            }
        }
    }
}

export default spGridGroupingRow;
