// require("../../public/less/SpGrid.less");
// var angular = require("angular");
// import angular from 'angular';
import SpGrid from './factories/SpGrid';
import vsRepeat from 'angular-vs-repeat';
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

const app = angular.module("SpGrid", [ vsRepeat ]);



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
        .filter('startFrom', startFrom)
        .filter('to_trusted', toTrusted)
        .filter('convertToNumber', convertToNumber)
        .directive('wResize', resize)
        .directive('compileHtml', compileHtml)
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



 