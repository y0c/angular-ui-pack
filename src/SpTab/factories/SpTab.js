function SpTab(){

    function SpTab( options ){
        this.tabs = [];

        this.currentIdx = 0;

        var _defaultOptions = {
            tabAction : {
                onActiveBefore : function(){
                    return true;
                },
                onActiveAfter : function(){

                }
            }
        };

        this.options = angular.extend({}, _defaultOptions, options );

        if( options && options.hasOwnProperty("tabAction") ){
            this.options.tabAction = angular.extend({}, _defaultOptions.tabAction, options.tabAction );
        }


    }

    /**
     * tab
     * @returns {Array|*}
     */
    SpTab.prototype.getTabs = function(){
        return this.tabs;
    };

    /**
     * tabs array return
     * @param tabs
     */
    SpTab.prototype.setTabs = function( tabs ){
        this.tabs = tabs;
    };

    /**
     * Tab property Setting
     * @param idx
     * @param obj
     * @param overwrite
     */
    SpTab.prototype.setTabProperty = function( idx, obj, overwrite ){
        overwrite = overwrite || true;

        if ( overwrite ){
            this.tabs[idx] = angular.extend(this.tabs[idx], obj);
        } else {
            this.tabs[idx] = obj;
        }

    };

    /**
     * TabAction Return
     * @returns {tabAction|{onActiveBefore, onActiveAfter}|*}
     */
    SpTab.prototype.getTabAction = function(){
        return this.options.tabAction;
    };

    /**
     * Tab Action Setting
     * @param tabAction
     */
    SpTab.prototype.setTabAction = function( tabAction ){
        this.options.tabAction = tabAction;
    };

    /**
     * Tab Add
     * @param tab
     */
    SpTab.prototype.addTab = function( tab ){
        this.tabs.push(tab);
        if( this.tabs.length == 1 ){
            tab.active = true;
        }
    };

    /**
     * Tab Remove
     * @param idx
     */
    SpTab.prototype.removeTab = function( idx ){
        this.tabs.splice(idx,1);
    };

    /**
     * Tab Hide
     * @param idx
     */
    SpTab.prototype.hideTab = function( idx ){
        this.tabs[idx].hidden = true;
    };

    /**
     * Tab Deactive All
     */
    SpTab.prototype.deactiveAll = function(){
        angular.forEach( this.tabs, function( tab ){
            tab.active = false;
        });
    };
    /**
     * Tab Active
     * @param idx
     */
    SpTab.prototype.activeTab = function( idx ){
        this.tabs[this.currentIdx].active = false;
        this.tabs[idx].active = true;
        this.currentIdx = idx;
    };

    /**
     * Tab disable
     * @param idx
     */
    SpTab.prototype.disableTab = function( idx ){
        this.tabs[idx].disable = true;
    };

    /**
     * Current Tab Index Return
     * @returns {number|*}
     */
    SpTab.prototype.getCurrentTabIndex = function(){
        return this.currentIdx;
    };

    /**
     * Current Tab Return
     * @returns {*}
     */
    SpTab.prototype.getCurrentTab = function(){
        return this.tabs[this.currentIdx];
    };

    return SpTab;
}

module.exports = function(app){
    app.factory("SpTab", SpTab);
};