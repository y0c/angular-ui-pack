/**
 * Grid Data Column Directive
 */
function spGridDataColumn( $compile, SpGridConstant, $templateCache, SpGridUtil,  $timeout ){
    return {
        restrict : "E",
        controller : "spGridController",
        require : "^spGridDataRow",
        replace : true,
        templateUrl : SpGridConstant.template.SP_GRID_DATA_COLUMN,
        link : function( scope, element, attr ){
            var _headerColumns = scope.gridObject.getColumnDef();
            var _headerColumn = scope.headerColumn;
            scope.columnWidth = _headerColumn.width;
            scope.columnHeader= _headerColumn.name;
            scope.type        = _headerColumn.type || "data";

            scope.isTypeHtml = isTypeHtml;

            scope.isTypeData = isTypeData;

            scope.isTypeRowno = isTypeRowno;

            scope.getRowno    = getRowno;

            scope.onCellClick = scope.gridObject.getGridAction().onCellClick;


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
                if( !scope.row ){
                    return ;
                }

                //생성 후 미검증 & 임시저장 X 상태
                var isCreate = scope.row.cudFlag == SpGridConstant.CREATE_FLAG
                                        && !scope.isTempSave() && !scope.row.__valid;
                //수정 & 임시저장 X상태
                var isUpdate = scope.row.cudFlag == SpGridConstant.UPDATE_FLAG &&
                                _headerColumn.hasOwnProperty("editType") && !scope.isTempSave();

                if( scope.row.hasOwnProperty("cudFlag") && scope.type == "data"){
                    if( isCreate || isUpdate ){
                        // if( isCreate ){
                        //     scope.scrollTop();
                        // }
                        editMode();
                        return ;
                    }

                }
                viewMode();
            }

            function getRowno(){
                var _pageSize = scope.gridObject.getPageSize();
                var _currentPage = scope.gridObject.getCurrentPage() || 1;

                return  (_pageSize * (_currentPage-1)) + (scope.$parent.$index + 1);
            }


            function editMode(){
                var _gridDataView    = null;
                var _typeMap = {
                    "text"      : $templateCache.get(SpGridConstant.template.EDIT_INPUT),
                    "checkbox"  : $templateCache.get(SpGridConstant.template.EDIT_CHECKBOX),
                    "selectbox" : $templateCache.get(SpGridConstant.template.EDIT_SELECTBOX),
                    "textarea"  : $templateCache.get(SpGridConstant.template.EDIT_TEXTAREA),
                    "datepicker" : $templateCache.get(SpGridConstant.template.EDIT_DATEPICKER)
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

                            scope.checkbox = {
                                defaultValue : "",
                                label        : ""
                            };

                            scope.checkbox = angular.extend({}, scope.checkbox, _editType );

                            // CheckBox 일 경우
                            if( !scope.row[_headerColumn.id] ) {
                                scope.row[_headerColumn.id] = scope.checkbox.defaultValue;
                            }
                            // Edit Type CheckBox
                        } else if( _typeName == "selectbox" ){

                            scope.selectbox = {
                                dataset : [],
                                keyField : "key",
                                valueField : "value",
                                defaultText : null,
                                defaultValue : null,
                                defaultIndex : null
                            };

                            scope.selectbox = angular.extend({}, scope.selectbox, _editType );

                            //Promise 객체일경우 비동기로 한번셋팅후 그후로는 배열로 사용
                            if( typeof _editType.dataset == "function"){
                                scope.selectbox.dataset = [];
                                _editType.dataset().then(function( dataset ){
                                    scope.selectbox.dataset = dataset;
                                    _editType.dataset       = dataset;
                                });
                            }

                            // Edit Type SelectBox
                            if( scope.selectbox.defaultText != null &&
                                scope.selectbox.defaultValue != null ){
                                var _defaultObject = {};
                                _defaultObject[scope.selectbox.keyField]   = scope.selectbox.defaultText;
                                _defaultObject[scope.selectbox.valueField] = scope.selectbox.defaultValue;

                                scope.selectbox.dataset.unshift(_defaultObject);
                            }

                            // Create 일 경우
                            if( !scope.row[_headerColumn.id] ) {

                                //값이 비어있을경우 defaultIndex, defaultValue 우선순위로 기본값이 정해짐
                                if( scope.selectbox.defaultValue != null ){
                                    scope.row[_headerColumn.id] = scope.selectbox.defaultValue;
                                }
                                if( scope.selectbox.defaultIndex != null){
                                    scope.row[_headerColumn.id] = scope.selectbox.dataset[scope.selectbox.defaultIndex][scope.selectbox.keyField];
                                }

                            }
                        }
                    }

                    _gridDataView.replaceWith(
                        $compile(_typeMap[_typeName] )(scope)
                    );

                    // element.focus();
                }

            }

            function viewMode(){
                var _gridEditElement = null;
                _gridEditElement = element.find(".sp-grid-data-edit");
                _gridEditElement.replaceWith(
                    $compile( $templateCache.get(SpGridConstant.template.DATA_VIEW))(scope)
                );
            }

            function setCellStyle( $scope, paramMap ){
                if( paramMap.rowIdx == scope.rowidx &&
                    paramMap.colIdx == scope.$index ){
                    element.css(paramMap.style);
                }
            }

            scope.$on( scope.gridObject.getId() + "cellStyleChange", setCellStyle );
            scope.$on("changeMode", changeModeByCudFlag );
        }
    }
};


module.exports = function( app ){
    app.directive("spGridDataColumn", spGridDataColumn);
};
