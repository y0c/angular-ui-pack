/**
 * SpGrid
 * @author : 임호성
 */
(function(){
    "use strict";

    var app = angular.module("spGrid", []);


    app.constant("SpGridConstant", {
        CREATE_FLAG : "C",
        UPDATE_FLAG : "U",
        DELETE_FLAG : "D",
        template : {
            EDIT_INPUT            : "spGridEditInput.tmpl.html",
            CONTEXT_MENU          : "spGridDataContextMenu.tmpl.html",
            DATA_VIEW             : "spGridDataView.tmpl.html",
            SP_GRID               : "spGrid.tmpl.html",
            SP_GRID_HEADER        : "spGridHeader.tmpl.html",
            SP_GRID_HEADER_ROW    : "spGridHeaderRow.tmpl.html",
            SP_GRID_HEADER_COLUMN : "spGridHeaderColumn.tmpl.html",
            SP_GRID_BODY          : "spGridBody.tmpl.html",
            SP_GRID_DATA_ROW      : "spGridDataRow.tmpl.html",
            SP_GRID_DATA_COLUMN   : "spGridDataColumn.tmpl.html"
        }
    });

    app.run( ['$templateCache', 'SpGridConstant', function( $templateCache, SpGridConstant ){

        $templateCache.put( SpGridConstant.template.SP_GRID,
                        "<div class=\"sp-grid-wrap\" ng-style=\"{ 'width' : gridObject.getSize().width }\">" +
                            "<div class=\"sp-grid\" >" +
                                "<sp-grid-header></sp-grid-header>" +
                                "<sp-grid-body></sp-grid-body>"+
                            "</div>" +
                        "</div>");

        /**
         * Grid Header
         */
        $templateCache.put( SpGridConstant.template.SP_GRID_HEADER,
                        "<div class=\"sp-grid-header\">" +
                            "<sp-grid-header-row></sp-grid-header-row>" +
                        "</div>");
        $templateCache.put( SpGridConstant.template.SP_GRID_HEADER_ROW,
                        "<div class=\"sp-grid-header-row\">" +
                            "<sp-grid-header-column ng-repeat='column in gridObject.getColumnDef() track by $index'>" +
                            "</sp-grid-header-column>" +
                        "</div>");

        $templateCache.put( SpGridConstant.template.SP_GRID_HEADER_COLUMN,
                        "<div class=\"sp-grid-header-column\" ng-style=\"{ 'min-width' : column.width }\">" +
                            "<span>{{column.name}}</span>" +
                        "</div>");


        /**
         * Grid Body
         */
        $templateCache.put( SpGridConstant.template.SP_GRID_BODY,
                        "<div class=\"sp-grid-body\" ng-style=\"{ 'height' : gridObject.getSize().height }\" >" +
                            "<sp-grid-data-row ng-repeat=\"row in gridObject.getData() track by $index\"></sp-grid-data-row>" +
                            // "<sp-grid-data-context-menu></sp-grid-data-context-menu>" +
                        "</div>");

        $templateCache.put( SpGridConstant.template.SP_GRID_DATA_ROW,
                        "<div class=\"sp-grid-data-row\" " +
                            "ng-right-click=\"openContextMenu($event, $index, rowManager)\" " +
                            "ng-click=\"onGridDataRowClick(row)\" " +
                            "ng-hide=\"isRowDeleted()\" >" +
                            "<sp-grid-data-column ng-repeat=\"(key, value) in filterDataColumn(row) track by $index\"></sp-grid-data-column>" +
                        "</div>");

        $templateCache.put( SpGridConstant.template.SP_GRID_DATA_COLUMN,
                        "<div class=\"sp-grid-data-column\" ng-style=\"{ 'max-width' : columnWidth" +
                            ", 'min-width' : columnWidth" +
                            "}\">" +
                            "<div class=\"sp-grid-data-header\">{{ getColumnData(key,'name')}}</div>" +
                            "<div class=\"sp-grid-data\">" +
                            "<span class=\"sp-grid-data-view\">{{value}}</span>" +
                            "</div>" +
                        "</div>");

        /**
         * Grid Util
         */
        $templateCache.put( SpGridConstant.template.EDIT_INPUT ,
                         "<input type=\"text\" ng-model=\"row[key]\" class=\"sp-grid-data-edit\" value=\"{{row[key]}}\"/>");

        $templateCache.put( SpGridConstant.template.CONTEXT_MENU,
                            "<div class=\"sp-grid-data-context-menu-backdrop\"  ng-show=\"isContextMenuShow\" ng-click=\"isContextMenuShow = !isContextMenuShow\" >" +
                                "<div class=\"sp-grid-data-context-menu-wrap\" " +
                                      "ng-style=\"{ 'top' : rightClickPosition.currentY, 'left' : rightClickPosition.currentX }\">" +
                                    "<ul class=\"sp-grid-data-context-menu\">" +
                                        "<li ng-show=\"gridObject.isEditMode() && !rowManager.isRowEditting()\" ng-click=\"rowManager.rowEdit()\">Edit</li>" +
                                        "<li ng-show=\"gridObject.isEditMode() && rowManager.isRowEditting()\" ng-click=\"rowManager.rowRevert()\">Revert</li>" +
                                        "<li ng-click=\"rowManager.rowDelete()\">Delete</li>" +
                                    "</ul>" +
                                "</div>" +
                            "</div>");

        $templateCache.put( SpGridConstant.template.DATA_VIEW,
                            "<span class=\"sp-grid-data-view\">{{row[key]}}</span>");



    }]);


    app.factory("SpGrid", function( SpGridConstant ){

        function SpGrid( gridOptions ){
            var _self = this;

            this._defaultOptions = {
                editMode  : false,
                columnDef : [],
                dataset   : [],
                gridSize : {
                    width  : "auto",
                    height : "300px"
                }
            };



            this._gridOptions     = angular.extend( this._defaultOptions, gridOptions );

            this._originalDataset = angular.copy( this._gridOptions.dataset );
        }

        /**
         * Grid 컬럼 Define 목록 리턴
         * @returns {Array}
         */
        SpGrid.prototype.getColumnDef = function(){
            return this._gridOptions.columnDef;
        };

        /**
         * Original Dataset 리턴
         * @returns {*}
         */
        SpGrid.prototype.getOriginalData = function(){
            return this._originalDataset;
        };
        /**
         * Grid Dataset 리턴
         * @returns {DOMStringMap|Array|*}
         */
        SpGrid.prototype.getData = function(){
            return this._gridOptions.dataset;
        };

        /**
         * Grid Dataset 설정
         * @param dataset
         * @returns {SpGrid}
         */
        SpGrid.prototype.setData = function( dataset ){
            this._gridOptions.dataset = dataset;
            this._originalDataset = angular.copy( this._gridOptions.dataset );
            return this;
        };

        /**
         * Grid 사이즈(너비,높이) 리턴
         * @returns {SpGrid._defaultOptions.gridSize|{width, height}|*}
         */
        SpGrid.prototype.getSize = function(){
            return this._gridOptions.gridSize;
        };

        /**
         * Grid 사이즈(너비,높이) 설정
         * @param size
         * @returns {SpGrid}
         */
        SpGrid.prototype.setSize = function( size ){
            this._gridOptions.gridSize = size;
            return this;
        };

        /**
         * Grid EditMode 리턴
         * @returns {boolean|*}
         */
        SpGrid.prototype.isEditMode = function(){
            return this._gridOptions.editMode;
        };

        /**
         * Grid EditMode 설정
         * @param editMode
         * @returns {SpGrid}
         */
        SpGrid.prototype.setEditMode = function( editMode ){
            this._gridOptions.editMode = editMode;
            return this;
        };

        /**
         * Grid 로우 추가
         */
        SpGrid.prototype.addEmptyRow = function( ){
            var _columns = this.getColumnDef();
            var _row     = {};

            for( var i = 0 ; i < _columns.length ; i ++ ){
                _row[_columns[i].id] = "";
            }
            _row.cudFlag = SpGridConstant.CREATE_FLAG;
            this.getData().push(_row);
        };


        /**
         * Grid 변경된 로우 리턴
         * @returns {Array}
         */
        SpGrid.prototype.getChangedRow = function(){
            var _result = [];
            var _dataset = this.getData();
            for( var i = 0 ; i < _dataset.length ; i ++ ){
                if( _dataset[i] && _dataset[i].hasOwnProperty("cudFlag")
                    && _dataset[i].cudFlag != "" ){
                    _result.push(_dataset[i]);
                }
            }
            return _result;
        };
        return SpGrid;
    });

    app.factory("spGridUtil" , function(){
       return {
           /**
            * 배열안에 객체를 탐색해서 원하는 필드값을 리턴
            * @param array - 배열
            * @param key - 키값
            * @param sourceField - 소스필드
            * @param targetField - 타겟필드
            * @returns targetValue
            */
           getMapData : function( array, key, sourceField, targetField ){
               for( var i = 0 ; i < array.length ; i ++ ){
                   if( array[i][sourceField] == key ){
                       return array[i][targetField];
                   }
               }
           }
       }
    });

    app.controller("spGridController", ['$scope', 'spGridUtil', function( $scope, spGridUtil ){
        var _gridObject  = $scope.gridObject;
        var _gridColumns = _gridObject.getColumnDef();

        var _gridColumnIds = getGridColumnIds();


        $scope.init = init;

        $scope.filterDataColumn = filterDataColumn;

        $scope.getColumnData = getColumnData;


        function init(){

        }
        /**
         * Header Column 의 아이디 값만 배열로 리턴
         * @returns {Array}
         */
        function getGridColumnIds(){
            var result = [];
            angular.forEach( _gridColumns, function( col ){
                result.push(col.id);
            });
            return result;
        }

        /**
         * header Column에 있는 애들만 display 함
         * @param data
         * @returns {{}} - filter Object
         */
        function filterDataColumn( data ){
            var result      = {};
            angular.forEach( data, function( value, key ){
                if( _gridColumnIds.indexOf(key) != -1 ){
                    result[key] = value;
                }
            });
            return result;
        }


        /**
         * id 값으로 컬럼 너비를 구해옴
         * @param id
         * @param targetField
         * @returns {*|targetValue}
         */
        function getColumnData( id, targetField ){
            return spGridUtil.getMapData( _gridColumns, id, 'id', targetField );
        }
    }]);

    /**
     * Grid 전체 영역 Directive
     */
    app.directive("spGrid", function( $compile, SpGridConstant ){
        return {
            restrict : "E",
            scope : {
                "gridObject" : "="
            },
            controller : "spGridController",
            templateUrl : SpGridConstant.template.SP_GRID,
            link : function( scope, element, attrs, ctrls, transclude ){
            }
        }
    });

    /**
     * Grid Header Wrap Directive
     */
    app.directive("spGridHeader", function( $compile, SpGridConstant){
        return {
            restrict : "E",
            controller : "spGridController",
            require : "^spGrid",
            replace : true,
            templateUrl : SpGridConstant.template.SP_GRID_HEADER,
            link : function( scope, element, attrs, ctrls, transclude ){
                console.log("spGridHeader");
            }
        }
    });

    /**
     * Grid Header Row Directive
     */
    app.directive("spGridHeaderRow", function( $compile, SpGridConstant ){
        return {
            restrict : "E",
            controller : "spGridController",
            require : "^spGridHeader",
            replace : true,
            templateUrl : SpGridConstant.template.SP_GRID_HEADER_ROW,
            link : function( scope, element, attrs ){
                console.log("spGridHeaderRow!!!");
            }
        }
    });

    /**
     * Grid Header Column Directive
     */
    app.directive("spGridHeaderColumn", function( SpGridConstant){
        return {
            restrict : "E",
            controller : "spGridController",
            require : "^spGridHeaderRow",
            replace : true,
            templateUrl : SpGridConstant.template.SP_GRID_HEADER_COLUMN,
            link : function( scope, element, attr){
            }
        }
    });

    /**
     * Grid Body Wrap Directive
     */
    app.directive("spGridBody", function($compile, SpGridConstant){
        return {
            restrict : "E",
            controller : "spGridController",
            require : "^spGrid",
            replace : true,
            templateUrl : SpGridConstant.template.SP_GRID_BODY,
            link : function( scope, element, attr ){
                scope.isContextMenuShow   = false;

                scope.openContextMenu     = openContextMenu;

                scope.dataAreaScrollToEnd = dataAreaScrollToEnd;


                function openContextMenu( event, index, rowManager ){
                    scope.rowManager = rowManager;
                    scope.rightClickPosition = {
                        currentX : event.pageX,
                        currentY : event.pageY
                    };
                    scope.isContextMenuShow = true;
                }


                function dataAreaScrollToEnd(){
                    element.scrollTop(element.get(0).scrollHeight);
                }
            }
        }
    });


    /**
     * Grid Data Row Directive
     */
    app.directive("spGridDataRow", function( SpGridConstant ){
       return {
           restrict : "E",
           controller : "spGridController",
           require : "^spGridBody",
           replace : true,
           templateUrl : SpGridConstant.template.SP_GRID_DATA_ROW,
           link : function( scope, element, attr){
                scope.rightClickPosition = {};

                scope.onGridDataRowClick = onGridDataRowClick;

                scope.isRowDeleted       = isRowDeleted;

                scope.rowManager     = {
                    isRowEditting : function(){
                        if( scope.row.hasOwnProperty("cudFlag")
                            && scope.row.cudFlag == SpGridConstant.UPDATE_FLAG ){
                            return true;
                        }
                        return false;
                    },
                    rowEdit : rowEdit,
                    rowRevert : rowRevert,
                    rowDelete : rowDelete
                };


               /**
                * Grid Data Row 클릭시 기본 Action 과 커스텀 Action 동작
                */
               function onGridDataRowClick( row ){
                    //TODO 그리드 오브젝트를 통해 커스텀 이벤트 등록이 가능하도록 조정 gridObject.gridAction
                }


               /**
                * Grid Data Row EditMode 변경
                */
               function rowEdit(){
                   scope._originalRow = angular.copy(scope.row);
                   scope.row.cudFlag = SpGridConstant.UPDATE_FLAG;
                   scope.$broadcast("changeMode");
               }

               /**
                * Grid Data Row ViewMode 변경
                */
               function rowRevert(){
                   scope.row = scope._originalRow;
                   scope.$broadcast("changeMode");
               }

               /**
                * Grid Data Row Delete
                */
               function rowDelete(){
                   scope.row.cudFlag = SpGridConstant.DELETE_FLAG;
               }

               /**
                * Grid Data Row 삭제된 로우인지 체크
                * @returns {boolean}
                */
               function isRowDeleted(){
                   if( scope.row.hasOwnProperty("cudFlag") ){
                       return scope.row.cudFlag == SpGridConstant.DELETE_FLAG;
                   }
                   return false;
               }

           }
       }
    });

    app.directive("spGridDataContextMenu", function( SpGridConstant){
       return {
           restrict : "E",
           controller : "spGridController",
           require : "^spGridBody",
           replace : true,
           templateUrl : SpGridConstant.template.CONTEXT_MENU,
           link : function( scope, element, attr ){

           }
       }
    });

    /**
     * Grid Data Column Directive
     */
    app.directive("spGridDataColumn", function( $compile, SpGridConstant, $templateCache ){
        return {
            restrict : "E",
            controller : "spGridController",
            require : "^spGridDataRow",
            replace : true,
            templateUrl : SpGridConstant.template.SP_GRID_DATA_COLUMN,
            link : function( scope, element, attr ){
                scope.columnWidth = scope.getColumnData( scope.key,'width');


                changeModeByCudFlag();

                function changeModeByCudFlag(){
                    if( scope.row.hasOwnProperty("cudFlag") ){
                        if( scope.row.cudFlag == SpGridConstant.CREATE_FLAG ){
                            editMode();
                            scope.dataAreaScrollToEnd();
                        } else if ( scope.row.cudFlag == SpGridConstant.UPDATE_FLAG ){
                            editMode();
                        }
                    } else {
                        viewMode();
                    }
                }


                function editMode(){
                    var _gridDataView    = null;
                    _gridDataView = element.find(".sp-grid-data-view");
                    _gridDataView.replaceWith(
                        $compile( $templateCache.get(SpGridConstant.template.EDIT_INPUT))(scope)
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
    });


    app.directive('ngRightClick', function($parse) {
        return function(scope, element, attrs) {
            var fn = $parse(attrs.ngRightClick);
            element.bind('contextmenu', function(event) {
                scope.$apply(function() {
                    event.preventDefault();
                    fn(scope, {$event:event});
                });
            });
        };
    });


}());