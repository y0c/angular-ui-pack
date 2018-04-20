// require("../../public/less/SpGrid.less");
// var angular = require("angular");


var app = angular.module("SpGrid", [ ]);

app.constant("SpGridConstant", require("./SpGridConstant"));

app.run( ['$templateCache', 'SpGridConstant', function( $templateCache, SpGridConstant ){

    $templateCache.put( SpGridConstant.template.SP_GRID, require( "./template/SpGrid.tmpl.html"));

    /**
     * Grid Header
     */
    $templateCache.put( SpGridConstant.template.SP_GRID_HEADER          , require( "./template/SpGridHeader.tmpl.html" ));
    $templateCache.put( SpGridConstant.template.SP_GRID_HEADER_ROW      , require( "./template/SpGridHeaderRow.tmpl.html"));
    $templateCache.put( SpGridConstant.template.SP_GRID_HEADER_COLUMN   , require("./template/SpGridHeaderColumn.tmpl.html"));


    /**
     * Grid Body
     */
    $templateCache.put( SpGridConstant.template.SP_GRID_BODY        , require("./template/SpGridBody.tmpl.html"));
    $templateCache.put( SpGridConstant.template.SP_GRID_DATA_ROW    , require("./template/SpGridDataRow.tmpl.html"));
    $templateCache.put( SpGridConstant.template.SP_GRID_DATA_COLUMN , require("./template/SpGridDataColumn.tmpl.html"));
    $templateCache.put( SpGridConstant.template.SP_GRID_DATA_ROW_BTN_GROUP, require("./template/SpGridDataRowBtnGroup.tmp.html"));


    $templateCache.put( SpGridConstant.template.SP_GRID_FOOTER        , require("./template/SpGridFooter.tmpl.html"));
    $templateCache.put( SpGridConstant.template.SP_GRID_FOOTER_ROW    , require("./template/SpGridFooterRow.tmpl.html"));
    $templateCache.put( SpGridConstant.template.SP_GRID_FOOTER_COLUMN , require("./template/SpGridFooterColumn.tmpl.html"));

    /**
     * Grid Util
     */
    $templateCache.put( SpGridConstant.template.EDIT_INPUT  , require("./template/SpGridEditInput.tmpl.html"));
    $templateCache.put( SpGridConstant.template.EDIT_TEXTAREA  , require("./template/SpGridEditTextArea.tmpl.html"));
    $templateCache.put( SpGridConstant.template.EDIT_CHECKBOX, require("./template/SpGridEditCheckBox.tmpl.html"));
    $templateCache.put( SpGridConstant.template.EDIT_SELECTBOX, require("./template/SpGridEditSelectBox.tmpl.html"));
    $templateCache.put( SpGridConstant.template.EDIT_DATEPICKER, require("./template/SpGridEditDatePicker.tmpl.html"));
    $templateCache.put( SpGridConstant.template.CONTEXT_MENU, require("./template/SpGridDataContextMenu.tmpl.html"));
    $templateCache.put( SpGridConstant.template.DATA_VIEW   , require("./template/SpGridDataView.tmpl.html"));

    $templateCache.put( SpGridConstant.template.SP_GRID_PAGING, require("./template/SpGridPaging.tmpl.html"));

}]);

    require("./factories/SpGrid")(app);
    require("./factories/SpGridUtil")(app)
    require("./factories/ScrollWatchService")(app);
    require("./controllers/spGridController")(app);
    require("./controllers/spGridBodyController")(app);
    require("./controllers/spGridFooterController")(app);

    require("./directives/spGrid")(app);
    require("./directives/spGridHeader")(app);
    require("./directives/spGridHeaderRow")(app);
    require("./directives/spGridHeaderColumn")(app);
    require("./directives/spGridBody")(app);
    require("./directives/spGridFooter")(app);
    require("./directives/spGridFooterColumn")(app);
    require("./directives/spGridFooterRow")(app);
    require("./directives/spGridDataRow")(app);
    require("./directives/spGridGroupingRow")(app);
    require("./directives/spGridCellSizier")(app);
    // require("./directives/spGridDataContextMenu")(app);
    require("./directives/spGridDataColumn")(app);
    require("./directives/util/spUtil")(app);
    require("./directives/spGridPaging")(app);


 