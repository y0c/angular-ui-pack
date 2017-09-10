require("../public/stylesheets/SpGrid.css");
var angular = require("angular");


var app = angular.module("spGrid", []);


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

    /**
     * Grid Util
     */
    $templateCache.put( SpGridConstant.template.EDIT_INPUT  , require("./template/SpGridEditInput.tmpl.html"));
    $templateCache.put( SpGridConstant.template.CONTEXT_MENU, require("./template/SpGridDataContextMenu.tmpl.html"));
    $templateCache.put( SpGridConstant.template.DATA_VIEW   , require("./template/SpGridDataView.tmpl.html"));

}])
    .factory("SpGrid"                   , require("./factories/SpGrid"))
    .factory("SpGridUtil"               , require("./factories/SpGridUtil"));

    require("./controllers/spGridController");
    require("./directives/spGrid");
    require("./directives/spGridHeader");
    require("./directives/spGridHeaderRow");
    require("./directives/spGridBody");
    require("./directives/spGridDataRow");
    require("./directives/spGridDataContextMenu");
    require("./directives/spGridDataColumn");
    require("./directives/util/ngRightClick");


