/**
 * Grid Data Column Directive
 */
function spGridDataColumn( $compile, SpGridConstant, $templateCache, $timeout ){
    return {
        restrict : "E",
        controller : "spGridController",
        require : "^spGridDataRow",
        replace : true,
        templateUrl : SpGridConstant.template.SP_GRID_DATA_COLUMN,
        link : function( scope, element, attr ){
            var _headerColumn = scope.headerColumn;
            scope.columnWidth = _headerColumn.width;
            scope.columnHeader= _headerColumn.name;
            scope.type        = _headerColumn.type || "data";

            scope.isTypeHtml = isTypeHtml;

            scope.isTypeData = isTypeData;

            scope.isTypeRowno = isTypeRowno;


            var _pageSize = scope.gridObject.getPageSize();
            var _currentPage = scope.gridObject.getCurrentPage() || 1;
            if( scope.isTypeRowno() ){
                    scope.displayData = (_pageSize * (_currentPage-1)) + (scope.$parent.$index + 1);
            }

            if( scope.isTypeData() ){
                //data인지 순수 html 바인딩인지 구분해서 처리
                scope.displayData = scope.row[_headerColumn.id];

            }

            if( scope.isTypeHtml() ) {
                scope.bindHtml    = _headerColumn.bindHtml;
                element.find(".sp-grid-data-html").append(
                    $compile(scope.bindHtml)(scope)
                );
            }

            changeModeByCudFlag();



            function isTypeRowno(){
                return scope.type == 'rowno';
            }

            function isTypeData(){
                return scope.type == "data";
            }

            function isTypeHtml(){
                return scope.type == "html";
            }
            function changeModeByCudFlag(){
                if( scope.row.hasOwnProperty("cudFlag") && scope.type == "data"){
                    if( scope.row.cudFlag == SpGridConstant.CREATE_FLAG && !scope.isTempSave()){
                        editMode();
                        scope.scrollTop();
                        return;
                    } else if ( scope.row.cudFlag == SpGridConstant.UPDATE_FLAG &&
                            _headerColumn.hasOwnProperty("editType") && !scope.isTempSave() ){
                        editMode();
                        return;
                    }
                }
                viewMode();
            }




            function editMode(){
                var _gridDataView    = null;
                var _typeMap = {
                    "text" : $templateCache.get(SpGridConstant.template.EDIT_INPUT),
                    "checkbox" : $templateCache.get(SpGridConstant.template.EDIT_CHECKBOX)
                };
                var _typeName = null;
                var _editType = null;

                _gridDataView = element.find(".sp-grid-data-view");
                if ( _headerColumn.hasOwnProperty("editType") ){
                    _editType = _headerColumn.editType;
                    if( typeof _editType == "string" ){
                        _typeName = _editType;
                    } else if ( typeof _editType == "object" ){

                        _typeName = _editType.name;

                        if( _typeName == "checkbox" ){
                            scope.checkbox = {};
                            scope.checkbox.trueValue = _editType.trueValue;
                            scope.checkbox.falseValue = _editType.falseValue;
                            scope.checkbox.label = "";
                        }
                    }

                }
                _gridDataView.replaceWith(
                    $compile(_typeMap[_typeName] )(scope)
                );

                element.focus();
            }

            function viewMode(){
                var _gridEditElement = null;
                _gridEditElement = element.find(".sp-grid-data-edit");
                _gridEditElement.replaceWith(
                    $compile( $templateCache.get(SpGridConstant.template.DATA_VIEW))(scope)
                );
            }

            scope.$on("changeMode", changeModeByCudFlag );
        }
    }
};


module.exports = function( app ){
    app.directive("spGridDataColumn", spGridDataColumn);
};
