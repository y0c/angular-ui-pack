function SpGrid( SpGridConstant, $templateCache ){

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

        this.init();
    }

    SpGrid.prototype.init = function(){
        var _columns = this.getColumnDef();
        if( this._gridOptions.editMode ){
            _columns.push({
                type : "html",
                name: "버튼",
                width: "100px",
                bindHtml : $templateCache.get(SpGridConstant.template.SP_GRID_DATA_ROW_BTN_GROUP)
            });
        }
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
}

module.exports = function(app){
    app.factory("SpGrid", SpGrid);
};