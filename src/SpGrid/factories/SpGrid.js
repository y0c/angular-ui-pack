let id = 0;
export default ( SpGridConstant, SpGridUtil, $rootScope ) => {
    return class SpGrid {

        constructor(gridOptions) {
            this._constant = SpGridConstant;
            this._util     = SpGridUtil;
            this._rootScope     = $rootScope;

            this._defaultOptions = {
                editable  : false,
                deleteable : false,
                selectable : false,
                columnDef : [],
                headerDef : null,
                dataset   : [],
                createDataset : [],
                registerFunction : {},
                enablePaging : false,
                groupable : false,
                totalize  : false,
                grouping : {

                },
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
                filterable : false,
                filteringQuery : {},
                filtering : {
                    columns : []
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
                    onRowSelectedChange : function(){

                        return true;
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
                    onRowSaveBefore : function(){
                        return true;
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

            this._filteredDataset = angular.copy( this._gridOptions.dataset );

            this._originalDataset = angular.copy( this._gridOptions.dataset );

            this.pageDataset      = angular.copy( this._gridOptions.dataset);

            this.status = "";

            this.selectedRow = null;

            this.init();

            this.id = this._constant.INSTANCE_ID_PREFIX + id++;
        }

        get columnDef(){ return this._gridOptions.columnDef; }
        
        set columnDef(columnDef){ this._gridOptions.columnDef = columnDef; }

        get gridAction(){ return this._gridOptions.gridAction; }

        set gridAction(action){ this._gridOptions.gridAction = action;}
        /**
         * header Column 정의 
         * @returns {Array} 
         */
        getHeaderDef() { return this._gridOptions.headerDef; } 
        /**
         * Grid Instance Id 리턴 
         * @returns {Int} 
         */
        getId() { return this.id; }

        /**
         * 현재 그리드 모바일 스타일 리턴 
         * @returns {String}  
         */
        getMobileStyle() { return this._gridOptions.mobileStyle; }

        /**
         * 표보기  스타일 여부 체크
         * @returns {Boolean} 
         */
        isMobileHorizontal() { return this.getMobileStyle == this._constant.HORIZONTAL_CLASS; }

        /**
         * 셀보기 스타일 여부 체크 
         * @returns {Boolean}
         */
        isMobileVertical() { return this.getMobileStyle == this._constant.VERTICAL_CLASS; }

        /**
         * 모바일에서의 스타일 지정 
         * 가로 스크롤 그대로 유지
         * @returns {SpGrid}
         */
        setMobileScrollHorizontal() { this._gridOptions = this._constant.HORIZONTAL_CLASS; }

        /**
         * 모바일에서의 스타일 지정 
         * 세로 스크롤로 변경 사용
         * @returns {SpGrid}
         */
        setMobileScrollVertical(){ this._gridOptions.mobileStyle = SpGridConstant.VERTICAL_CLASS; }


        /**
         * Grid 선택된 로우 지정
         * @param row
         * @returns {SpGrid}
         */
        setSelectedRow( row ){
            this.selectCancelAll();
            row.__isSelected = true;
        }

        /**
         * Grid 현재 선택된 로우 인덱스 리턴
         * @returns Number
         */
        getSelectedIndex(){
            return this.getFilteredData().findIndex( v => v.hasOwnProperty('__isSelected') && v.__isSelected) != -1;
        }

        /**
         * Grid 현재 선택된 로우  리턴
         * @returns Number
         */
        getSelectedRow(){
            return this.getFilteredData()[this.getSelectedIndex()];
        }

        /**
         * Grid 선택된 로우 모두 원복 
         */
        selectCancelAll(){
            this.getFilteredData().forEach( v => {
                if( v.hasOwnProperty("__isSelected") ){
                    delete v.__isSelected;
                }
            })
        }

        init(){
            this.columnDef = this.columnDef.map( v=> {
                return angular.extend({}, this.defaultColumnOptions, v);
            });
        }

        /**
         * filter 상태 리턴
         * @returns {boolean|*}
         */
        isFilterable() { return this._gridOptions.filterable; }

        /**
         * filterable 셋팅
         * @param filterable
         * @returns {SpGrid}
         */
        setFilterable( filterable ){ this._gridOptions.filterable = filterable; }
        /**
         * filtering Query 리턴
         * @returns {SpGrid._defaultOptions.filteringQuery|{}}
         */
        getFilteringQuery(){ return this._gridOptions.filteringQuery;  }

        /**
         * filtering Query 셋팅
         * @param options
         * @returns {SpGrid}
         */
        setFilteringQuery( options ){ this._gridOptions.filteringQuery = options; }

        /**
         * filteredDataset 리턴
         * @returns {Array}
         */
        getFilteredData() { return this.isFilterable() ? this._filteredDataset : this.getData(); }

        /**
         * filteredDataset 셋팅
         * @param dataset
         * @returns {SpGrid}
         */
    setFilteredData( dataset ){
        const { options } = this._gridOptions;
            if( options.enablePaging ){
                options.pagingOptions.totalRecordCount = dataset.length;
            }
            this.setCreateData([]);
            $rootScope.$broadcast( this.getId() + "gridDataReset" );
            this._filteredDataset = dataset;
        };

        /**
         * filtering column 인지 체크
         * @param column
         * @returns {boolean}
         */
        isFilteringColumn( column ){
            let filteringColumns = this.getFiltering().columns;
            return filteringColumns.indexOf( column ) > -1;
        };

        /**
         * filtering 컬럼 리턴
         * @returns {Object|*}
         */
        getFiltering(){ return this._gridOptions.filtering;  };

        /**
         * filtering 컬럼 셋팅
         * @param filtering
         */
        setFiltering( filtering ){ this._gridOptions.filtering = filtering;  }


        /**
         * 현재 그리드 페이지 size 리턴 
         * @returns {Int}
         */
        getPageSize(){  return this._gridOptions.pagingOptions.pageSize; }

        /**
         * 그리드 현재 페이지 리턴 
         * @returns {Int}
         */
        getCurrentPage(){ return this._gridOptions.pagingOptions.currentPage; }


        /**
         * 그리드 총 레코드 갯수 리턴 
         * @returns {Int}
         */
        getTotalRecordCount(){  return this.getData().length; }

        /**
         * 페이징이 활성화 되있는지 여부 리턴 
         * @returns {boolean}
         */
        isEnablePaging(){  return this._gridOptions.enablePaging;  }

        /**
         * 그리드 설정 정보 리턴 
         * @returns {SpGrid._defaultOptions.pagingOptions|{currentPage, pageSize}}
         */
        getPagingOptions(){ return this._gridOptions.pagingOptions; }

        /**
         * 엑셀 내보내기용 컬럼리턴
         * @returns {Array}
         */
        getExcelColumn = function(){
            return this.columnDef.map( v=> { 
                if( v.type === 'data' || (v.type === 'html' && v.hasOwnProperty('id')) ) {
                    return {
                        columnid : column.id,
                        title : this._util.removeTags(v.name)
                    }
                }
            });
        };

        /**
         * 등록할 Function List
         * @returns {Array}
         */
        getRegisterFunction(){ return this._gridOptions.registerFunction; }

        /**
         * Grid 컬럼 Define 목록 리턴
         * @returns {Array}
         */
        getColumnDef(){  return this._gridOptions.columnDef;   }

        /**
         * Original Dataset 리턴
         * @returns {*}
         */
        getOriginalData(){ return this._originalDataset;  }

        /**
         * Grid Dataset 리턴
         * @returns {Array}
         */
        getData(){  return this._gridOptions.dataset; };

        /**
         * Grid Dataset 설정
         * @param dataset
         * @returns {SpGrid}
         */
        setData( dataset ){
            angular.copy(dataset,this._gridOptions.dataset);

            //2017.12.04  originalDataset을 업데이트 해주지않아 ajax새로 업데이트 후에도 그전값이 유지되는문제로 변경
            // if( this._originalDataset == null || !this._originalDataset.length > 0 ){
                angular.copy(this._gridOptions.dataset,this._originalDataset );
            // }

            if( this._gridOptions.enablePaging ){
                this._gridOptions.pagingOptions.totalRecordCount = dataset.length;
            }

            if( this.isFilterable() ){
                this.setFilteredData(dataset);
            }

            this.setCreateData([]);

            $rootScope.$broadcast( this.getId() + "gridDataReset" );
        };

        /**
         * Grid 사이즈(너비,높이) 리턴
         * @returns {SpGrid._defaultOptions.gridSize|{width, height}|*}
         */
        getSize(){ return this._gridOptions.gridSize;  }

        /**
         * Grid 사이즈(너비,높이) 설정
         * @param size
         * @returns {SpGrid}
         */
        setSize( size ){  this._gridOptions.gridSize = size;  }

        /**
         * Grid Editable 리턴
         * @returns {boolean|*}
         */
        isEditable(){  return this._gridOptions.editable; }


        /**
         * Grid Selectable 리턴
         * @returns {boolean}
         */
        isSelectable(){ return this._gridOptions.selectable;  }

        /**
         * Grid 총계 상태 리턴
         * @returns {boolean}
         */
        isTotalize(){ return this._gridOptions.totalize; }


        /**
         * Grid 총계 설정
         */
        setTotalize( totalize ){  this._gridOptions.totalize = totalize;  }


        /**
         * Grid groupable 상태 리턴
         * @param groupable
         */
        isGroupable(){ return this._gridOptions.groupable;  }

        /**
         * Grid groupable 설정
         * @param groupable
         * @returns {SpGrid}
         */
        setGroupable( groupable ){  this._gridOptions.groupable = groupable;  }

        /**
         * Grid grouping 객체 리턴
         * @returns {SpGrid._defaultOptions.grouping|{}|grouping|{column, aggregate, groupingRowTemplate}}
         */
        getGrouping(){   return this._gridOptions.grouping;  }

        /**
         * Grid grouping 옵션 설정
         * @param grouping
         * @returns {SpGrid}
         */
        setGrouping(grouping){   this._gridOptions.grouping = grouping; }


        /**
         * Grid Deleteable 설정
         * @returns {boolean|*}
         */
        isDeleteable(){   return this._gridOptions.deleteable;   }

        /**
         * Grid Deleteable 설정
         * @param deleteable
         * @returns {SpGrid}
         */
        setDeleteable( deleteable){   this._gridOptions.deleteable = deleteable; }

        /**
         * Grid 로우 추가
         * @deprecated
         */
        addEmptyRow( ){
            var _columns = this.columnDef;
            var _row     = {};

            if ( !this.gridAction.onRowCreateBefore() ){
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
            $rootScope.$broadcast( this.getId() + "gridDataReset");
            return _row;
        };

        /**
         * UI를 통한 insert가 아닌 직접적인 로우 삽입
         * @deprecated
         * @param row
         */
        addRow( row ){
            row.cudFlag = SpGridConstant.CREATE_FLAG;
            row.__isTempSave = true;
            row.__valid      = true;
            this.getFilteredData().push(row);
            $rootScope.$broadcast( this.getId() + "gridDataReset");
            return row;
        };

        /**
         * UI를 통한 update가아닌 직접적인 로우 수정
         * @deprecated
         * @param rowIdx
         * @param obj - 수정할 프로퍼티가 포함된객체
         * @returns {*}
         */
        updateRow( rowIdx, obj ){
            this.getFilteredData()[rowIdx].cudFlag = SpGridConstant.UPDATE_FLAG;
            this.getFilteredData()[rowIdx].__isTempSave = true;
            this.getFilteredData()[rowIdx].__valid      = true;
            this.getFilteredData()[rowIdx] = angular.extend( {}, this.getFilteredData()[rowIdx], obj);
            $rootScope.$broadcast( this.getId() + "gridDataReset");
            return this.getFilteredData()[rowIdx];
        };

        /**
         * SpGrid Delete Row
         * @param rowIdx
         * @returns {SpGrid}
         */
        deleteRow( rowIdx ){
            this.getFilteredData()[rowIdx].cudFlag = SpGridConstant.DELETE_FLAG;
            // this.getFilteredData()[rowIdx].__valid = true;
            $rootScope.$broadcast( this.getId() + "gridDataReset");
            return this;
        };

        /**
         * Grid 변경된 로우 리턴
         * @depreacted
         * @returns {Array}
         */
        getChangedRow(){
            var _result = [];
            var _dataset = this.getData();
            for( var i = 0 ; i < _dataset.length ; i ++ ){
                if( _dataset[i] && _dataset[i].hasOwnProperty("cudFlag")
                    && _dataset[i].cudFlag != "" /* && _dataset[i].__valid */ ){
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
        setCellStyle( rowIdx, colIdx, style ){
            $rootScope.$broadcast( this.getId() + "cellStyleChange", {
                rowIdx : rowIdx,
                colIdx : colIdx,
                style : style
            });
        }

        /**
         * 로우 스타일 변경
         * @param rowIdx
         * @param style
         */
        setRowStyle( rowIdx, style ){
            $rootScope.$broadcast( this.getId() + "rowStyleChange", {
                rowIdx : rowIdx,
                style : style
            });
        }

        /**
         * 그리드 resize
         */
        resize(){
            $rootScope.$broadcast( this.getId() + "gridColumnChange");
        }

        /**
         * hidden 처리된 컬럼을 제외하고 리턴
         * @returns {Array}
         */
        getVisibleColumn(){  return this.columnDef.filter( v => !v.hasOwnProperty('hidden') && !v.hidden );  }

        /**
         * column Property 셋팅 ID이용
         * @param id
         * @param propObj
         */
        setColumnPropertyById( id, propObj ){
            this.columnDef.forEach( v=> {
                if( v.hasOwnProperty('id') && v.id == id )
                    this.setColumnProperty(i, propObj);
            });
        };

        /**
         * column property 셋팅
         * @param colIdx
         * @param propObj
         * @param overwrite
         * @returns {SpGrid}
         */
        setColumnProperty( colIdx, propObj, overwrite ){
            overwrite = overwrite || true;
            var column = this.columnDef[colIdx];

            if( overwrite ){
                this.columnDef[colIdx] = angular.extend({}, column, propObj );
            } else {
                this.columnDef[colIdx] = angular.extend({}, propObj );
            }
            $rootScope.$broadcast( this.getId() + "gridColumnChange");
            return this;
        };

        /**
         * colIdx 로 컬럼 객체를 찾아 리턴
         * @param colIdx
         * @returns {*}
         */
        getColumnProperty( colIdx ){ return this.columnDef[colIdx];  }
        
        /**
         * @depreacted
         */
        getCreateData() { return this._gridOptions.createDataset; }

        /**
         * @deprecated
         */
        setCreateData(dataset) { this._gridOptions.createDataset = dataset;}
    }
};