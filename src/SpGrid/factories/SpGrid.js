function SpGrid( SpGridConstant, SpGridUtil, $templateCache, $rootScope ){
    var id = 0;

    function SpGrid( gridOptions ){
        var _self = this;

        this._defaultOptions = {
            editable  : false,
            deleteable : false,
            selectable : false,
            columnDef : [],
            dataset   : [],
            createDataset : [],
            registerFunction : {},
            useFooterSummary : false,
            enablePaging : false,
            mobileStyle : "mb-horizontal",
            /**
             * 그리드 사이즈 옵션
             */
            gridSize : {
                width  : "auto",
                height : "auto"
            },
            /**
             * 필터 옵션
             */
            filterOptions : {
                query : ""
            },
            /**
             * 페이징 옵션
             */
            pagingOptions : {
                currentPage : 1,
                pageSize    : 10,
                pageBlockSize : 10
            },
            /**
             * Grid Action 이벤트 콜백
             */
            gridAction : {
                onCellClick : function(){

                },
                onRowClick : function(){

                },
                onRowDblClick : function(){

                },
                onRowDeleteBefore : function(){
                    return true;
                },
                onRowDeleteAfter : function(){

                },
                onRowEditBefore : function(){
                    return true;
                },
                onRowEditAfter : function(){

                },
                onRowCreateBefore : function(){
                    return true;
                },
                onRowCreateAfter : function(){

                },
                onRowRenderFinished : function(){
                    console.log("rowRenderFinised");
                }

            },
            validateCallback : function( message ){
                alert(message);
            }

        };

        this.defaultColumnOptions = {
            type : "data",
            align : "center",
            resultFormatter : function( columnValue ){
                return columnValue;
            }
        };

        if( gridOptions.hasOwnProperty("gridAction") ){
            gridOptions.gridAction = angular.extend(this._defaultOptions.gridAction, gridOptions.gridAction);
        }

        this._gridOptions     = angular.extend( this._defaultOptions, gridOptions );

        this._originalDataset = angular.copy( this._gridOptions.dataset );

        this.pageDataset      = angular.copy( this._gridOptions.dataset);

        this.status = "";

        this.selectedRow = null;

        this.init();

        this.id = SpGridConstant.INSTANCE_ID_PREFIX + id++;
    }

    SpGrid.prototype.getId = function(){
        return this.id;
    };
    SpGrid.prototype.getCreateData = function(){
        return this._gridOptions.createDataset;
    };

    SpGrid.prototype.getValidateCallback = function( ){
        return this._gridOptions.validateCallback;
    };

    SpGrid.prototype.setValidateCallback = function( callback ){
        this._gridOptions.validateCallback = callback;
        return this;
    };

    /**
     * 현재 그리드 모바일 스타일 리턴 
     */
    SpGrid.prototype.getMobileStyle = function(){
        return this._gridOptions.mobileStyle;
    };

    SpGrid.prototype.isMobileHorizontal = function(){
        return this.getMobileStyle() == SpGridConstant.HORIZONTAL_CLASS;
    };

    SpGrid.prototype.isMobileVertical = function(){
        return this.getMobileStyle() == SpGridConstant.VERTICAL_CLASS;
    };

    /**
     * 모바일에서의 스타일 지정 
     * 가로 스크롤 그대로 유지
     * @returns {SpGrid}
     */
    SpGrid.prototype.setMobileScrollHorizontal = function(){
        this._gridOptions.mobileStyle = SpGridConstant.HORIZONTAL_CLASS;
        return this;
    };

    /**
     * 모바일에서의 스타일 지정 
     * 세로 스크롤로 변경 사용
     * @returns {SpGrid}
     */
    SpGrid.prototype.setMobileScrollVertical = function(){
        this._gridOptions.mobileStyle = SpGridConstant.VERTICAL_CLASS;
        return this;
    };

    SpGrid.prototype.setStatus = function( status ){
        this.status = status;
        return this;
    };

    SpGrid.prototype.getStatus = function(){
        return this.status;
    };

    SpGrid.prototype.isStatusChanged = function(){
        return this.status == "edit" || this.status == "create";
    };

    /**
     * 변경된로우 배열 리턴
     * @returns {Array}
     */
    SpGrid.prototype.getModifiedRows = function(){
        var sourceRows = this.getOriginalData();
        var targetRows = this.getData();
        var returnRows = [];

        for( var i = 0 ; i < sourceRows.length ; i ++ ){
            if( !SpGridUtil.dirtyCheck(sourceRows[i], targetRows[i])){
                returnRows.push(targetRows[i]);
            }
        }

        return returnRows;
    };

    /**
     * Grid Footer Summary 사용여부
     * @param useFooterSummary
     * @returns {*}
     */
    SpGrid.prototype.isUseFooterSummary = function(){
        return this._gridOptions.useFooterSummary;
    };
    /**
     * Grid 선택된 로우 지정
     * @param row
     * @returns {SpGrid}
     */
    SpGrid.prototype.setSelectedRow = function( row ){
        angular.forEach( this.getData() , function( _row ){
            if( _row.hasOwnProperty("__isSelected")){
                delete _row.__isSelected;
            }
        });
        row.__isSelected = true;
        return this;
    };

    /**
     * Grid 현재 선택된 로우 인덱스 리턴
     * @returns Number
     */
    SpGrid.prototype.getSelectedIndex = function(){
        var _dataset = this.getData();
        for( var i = 0 ; i < _dataset.length ; i ++ ){
            if( _dataset[i].hasOwnProperty("__isSelected")
                && _dataset[i].__isSelected ){
                return i;
            }
        }
    };

    /**
     * Grid 현재 선택된 로우  리턴
     * @returns Number
     */
    SpGrid.prototype.getSelectedRow = function(){
        return this.getData()[this.getSelectedIndex()];
    };

    /**
     *
     */
    SpGrid.prototype.selectCancelAll = function(){
        angular.forEach( this.getData() , function( row ){
            if( row.hasOwnProperty("__isSelected") ){
                delete row.__isSelected;
            }
        })
    };


    SpGrid.prototype.init = function(){
        var _self    = this;
        var _columns = this.getColumnDef();


        if( this.isEditable() || this.isDeleteable()){
            _columns.push({
                type : "html",
                name: "",
                width: "150px",
                bindHtml : $templateCache.get(SpGridConstant.template.SP_GRID_DATA_ROW_BTN_GROUP)
            });
        }



        // if( this.getData() && this.getData.length > 0 ){
        //     this.generateIdx( this.getData());
        // }

        //Column Type 초기화
        if( _columns && _columns.length > 0 ){
            for( var i = 0 ; i < _columns.length ; i ++ ){
                _columns[i] = angular.extend( {}, this.defaultColumnOptions, _columns[i]);
            }
        }

    };

    // SpGrid.prototype.generateIdx = function( dataset){
    //     for( var i = 0 ; i < dataset.length ; i ++ ){
    //         dataset[i].__idx = i+1;
    //     }
    // };

    SpGrid.prototype.getFilterOptions = function(){
        return this._gridOptions.filterOptions;
    };

    SpGrid.prototype.getPageSize = function(){
        return this._gridOptions.pagingOptions.pageSize;
    };

    SpGrid.prototype.getCurrentPage = function(){
        return this._gridOptions.pagingOptions.currentPage;
    };

    SpGrid.prototype.getTotalRecordCount = function(){
        return this.getData().length;
    };

    SpGrid.prototype.getGridAction = function(){
        return this._gridOptions.gridAction;
    };

    /**
     *
     * @returns {boolean}
     */
    SpGrid.prototype.isEnablePaging = function(){
        return this._gridOptions.enablePaging;
    };
    /**
     *
     * @returns {SpGrid._defaultOptions.pagingOptions|{currentPage, pageSize}}
     */
    SpGrid.prototype.getPagingOptions = function(){
        return this._gridOptions.pagingOptions;
    };

    /**
     * 엑셀 내보내기용 컬럼리턴
     */
    SpGrid.prototype.getExcelColumn = function(){
        var columnArr = [];
        angular.forEach(this.getColumnDef() , function( column ){
            if( column.type == "data" || (column.type =="html" && column.hasOwnProperty("id"))){
                columnArr.push({
                    columnid : column.id,
                    title    : SpGridUtil.removeTags(column.name)
                });
            }
        });

        return columnArr;
    };
    /**
     * 등록할 Function List
     * @returns {Array}
     */
    SpGrid.prototype.getRegisterFunction = function(){
        return this._gridOptions.registerFunction;
    };

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
        // this.generateIdx( dataset );
        angular.copy(dataset,this._gridOptions.dataset);
        angular.copy(this._gridOptions.dataset,this._originalDataset );

        if( this._gridOptions.enablePaging ){
            this._gridOptions.pagingOptions.totalRecordCount = dataset.length;
        }
        // this._gridOptions.dataset = dataset;
        // this._originalDataset = angular.copy( this._gridOptions.dataset );
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
     * Grid Editable 리턴
     * @returns {boolean|*}
     */
    SpGrid.prototype.isEditable = function(){
        return this._gridOptions.editable;
    };

    /**
     * Grid Editable 설정
     * @param editMode
     * @returns {SpGrid}
     */
    SpGrid.prototype.setEditable = function( editable ){
        this._gridOptions.editable = editable;
        return this;
    };

    /**
     * Grid Selectable 리턴
     * @param selectable
     * @returns {boolean}
     */
    SpGrid.prototype.isSelectable = function( ){
        return this._gridOptions.selectable;
    };


    /**
     * Grid selectable 설정
     * @param selectable
     * @returns {SpGrid}
     */
    SpGrid.prototype.setSelectable = function( selectable ){
        this._gridOptions.selectable = selectable;
        return this;
    };


    /**
     * Grid Deleteable 설정
     * @returns {boolean|*}
     */
    SpGrid.prototype.isDeleteable = function(){
        return this._gridOptions.deleteable;
    };

    /**
     * Grid Deleteable 설정
     * @param deleteable
     * @returns {SpGrid}
     */
    SpGrid.prototype.setDeleteable = function( deleteable){
        this._gridOptions.deleteable = deleteable;
        return this;
    };

    /**
     * Grid 로우 추가
     */
    SpGrid.prototype.addEmptyRow = function( ){
        var _columns = this.getColumnDef();
        var _row     = {};

        if ( !this.getGridAction().onRowCreateBefore() ){
            return ;
        }
        if( this.isStatusChanged() ){
            return;
        }

        for( var i = 0 ; i < _columns.length ; i ++ ){
            //컬럼타입이 데이터인 애들만 추가해줌
            if( _columns[i].type == "data" ){
                _row[_columns[i].id] = "";
            }

        }
        _row.cudFlag = SpGridConstant.CREATE_FLAG;
        _row.__isTempSave = false;
        _row.__valid      = false;
        this.setStatus("create");
        this.getCreateData().push(_row);
        return _row;
    };

    /**
     * UI를 통한 insert가 아닌 직접적인 로우 삽입
     * @param row
     */
    SpGrid.prototype.addRow = function( row ){
        row.cudFlag = SpGridConstant.CREATE_FLAG;
        row.__isTempSave = true;
        row.__valid      = true;
        this.getData().push(row);
        return row;
    };

    /**
     * UI를 통한 update가아닌 직접적인 로우 수정
     * @param rowIdx
     * @param obj - 수정할 프로퍼티가 포함된객체
     * @returns {*}
     */
    SpGrid.prototype.updateRow = function( rowIdx, obj ){
        this.getData()[rowIdx].cudFlag = SpGridConstant.UPDATE_FLAG;
        this.getData()[rowIdx].__isTempSave = true;
        this.getData()[rowIdx].__valid      = true;
        this.getData()[rowIdx] = angular.extend( {}, this.getData()[rowIdx], obj);
        return this.getData()[rowIdx];
    };

    /**
     * SpGrid Delete Row
     * @param rowIdx
     * @returns {SpGrid}
     */
    SpGrid.prototype.deleteRow = function( rowIdx ){
        this.getData()[rowIdx].cudFlag = SpGridConstant.DELETE_FLAG;
        return this;
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
                && _dataset[i].cudFlag != "" && _dataset[i].__valid ){
                _result.push(_dataset[i]);
            }
        }
        return _result;
    };

    /**
     * cell 스타일 변경
     * @param rowIdx
     * @param colIdx
     * @param style
     */
    SpGrid.prototype.setCellStyle = function( rowIdx, colIdx, style ){
        $rootScope.$broadcast( this.getId() + "cellStyleChange", {
            rowIdx : rowIdx,
            colIdx : colIdx,
            style : style
        });
    };

    /**
     * 로우 스타일 변경
     * @param rowIdx
     * @param style
     */
    SpGrid.prototype.setRowStyle = function( rowIdx, style ){
        $rootScope.$broadcast( this.getId() + "rowStyleChange", {
            rowIdx : rowIdx,
            style : style
        });
    };

    /**
     * hidden 처리된 컬럼을 제외하고 리턴
     * @returns {Array}
     */
    SpGrid.prototype.getVisibleColumn = function(){
        var _columns = [];

        angular.copy( this.getColumnDef(), _columns);
        //히든처리
        for( var j = _columns.length - 1 ; j > - 1 ; j -- ){
            if( _columns[j].hasOwnProperty("hidden") &&
                _columns[j].hidden === true ){
                _columns.splice( j, 1 );
            }
        }
        return _columns;
    };

    /**
     * column Property 셋팅 ID이용
     * @param id
     * @param propObj
     */
    SpGrid.prototype.setColumnPropertyById = function( id, propObj ){
        var _columns = this.getColumnDef();

        for( var i = 0 ; i < _columns.length ; i ++ ){
            if( _columns[i].hasOwnProperty("id") && _columns[i].id == id ){
                this.setColumnProperty( i, propObj );
                break;
            }
        }
    };

    /**
     * column property 셋팅
     * @param colIdx
     * @param propObj
     * @param overwrite
     * @returns {SpGrid}
     */
    SpGrid.prototype.setColumnProperty = function( colIdx, propObj, overwrite ){
        overwrite = overwrite || true;
        var column = this.getColumnDef()[colIdx];

        if( overwrite ){
            this.getColumnDef()[colIdx] = angular.extend({}, column, propObj );
        } else {
            this.getColumnDef()[colIdx] = angular.extend({}, propObj );
        }

        $rootScope.$broadcast("gridColumnChange");

        return this;
    };

    /**
     * colIdx 로 컬럼 객체를 찾아 리턴
     * @param colIdx
     * @returns {*}
     */
    SpGrid.prototype.getColumnProperty = function( colIdx ){
        return this.getColumnDef()[colIdx];
    };


    return SpGrid;
}
module.exports = function(app){
    app.factory("SpGrid", SpGrid);
};