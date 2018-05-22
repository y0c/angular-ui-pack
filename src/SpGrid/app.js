// require("../../public/less/SpGrid.less");
// var angular = require("angular");
// import angular from 'angular';
import SpGrid from './factories/SpGrid';
import SpGridConstant from './SpGridConstant';
import {
    spGridDataColumn,
    spGridDataRow,
    spGridGroupingRow,
    spGridFooter,
    spGridHeader,
    spGridBody,
    spGridPaging,
    spGrid,
    syncScroll,
    compileHtml,
    convertToNumber,
    onFinishRender,
    startFrom,
    toTrusted,
    resize
} from './directives';

import {
    SpGridDataColumnController,
    SpGridDataRowController,
    SpGridFooterController,
    SpGridHeaderController,
    SpGridBodyController,
    SpGridController,
    SpGridPagingController
} from './controllers';

const app = angular.module("SpGrid", [ ]);



    require("./factories/SpGridUtil")(app)

    app.directive('spGridDataColumn', spGridDataColumn)
        .directive('spGridDataRow', spGridDataRow)
        .directive('spGridGroupingRow', spGridGroupingRow )
        .directive('spGridFooter', spGridFooter)
        .directive('spGridHeader', spGridHeader)
        .directive('spGrid', spGrid)
        .directive('spGridBody', spGridBody)
        .directive('syncScroll', syncScroll)
        .directive('spGridPaging', spGridPaging)
        
        //Util Directive
        .directive('startFrom', startFrom)
        .directive('compileHtml', compileHtml)
        .directive('toTrusted', toTrusted)
        .directive('wResize', resize)
        .directive('convertToNumber', convertToNumber)
        .directive('onFinishRender', onFinishRender)

        //Controller
        .controller('SpGridController', SpGridController)
        .controller('SpGridDataRowController', SpGridDataRowController)
        .controller('SpGridDataColumnController', SpGridDataColumnController)
        .controller('SpGridFooterController', SpGridFooterController)
        .controller('SpGridHeaderController', SpGridHeaderController)
        .controller('SpGridBodyController', SpGridBodyController)
        .controller('SpGridPagingController', SpGridPagingController)
        .constant('SpGridConstant', SpGridConstant)
        .factory('SpGrid', SpGrid);



 