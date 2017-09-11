/**
 * Grid 전체 영역 Directive
 */

function spGrid( $compile, SpGridConstant ){
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
};


module.exports = function(app){
    app.directive("spGrid", spGrid);
};