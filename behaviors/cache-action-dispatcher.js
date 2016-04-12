goog.provide('coligo.behaviors.CacheActionDispatcher');

goog.require('coligo.scripts.actions');

coligo.behaviors.CacheActionDispatcher = {

  listeners: {

    'dispatch-action': 'onDispatchCacheAction_'

  },

  properties: {
    cache: {
      type: Object,
      value: {}
    }
  },

  onDispatchCacheAction_: function(event, detail) {
    console.log('Cache dispatching action: ', detail);
    switch (detail.type) {
      case(coligo.scripts.actions.FETCH_DEPARTMENT):
        if (this.callCache_('getDepartment', detail.id)) {
          event.stopImmediatePropagation();
        }
        break;
      case(coligo.scripts.actions.FETCH_EMPLOYEE):
        if (this.callCache_('getEmployee', detail.id)) {
          event.stopImmediatePropagation();
        }
        break;
      case(coligo.scripts.actions.EMPLOYEE_FETCHED):
        this.callCache_('gotEmployee', detail.response);
        break;
    }
  },

  callCache_: function(method, ...args) {
    args = args || [];
    return this.$['cache'][method](...args);
  }

}
