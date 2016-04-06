goog.provide('coligo.behaviors.ActionDispatcher');

goog.require('coligo.scripts.actions');

coligo.behaviors.ActionDispatcher = {

  listeners: {

    'dispatch-action': 'onDispatchAction_'

  },

  onDispatchAction_: function(event, detail) {
    console.log('Dispatching action: ', detail);
    switch (detail.type) {
      case(coligo.scripts.actions.FETCH_DEPARTMENTS):
        this.callDataService_('fetchAllDepartments');
        break;
      case(coligo.scripts.actions.DELETE_DEPARTMENT):
        this.callDataService_('deleteDepartment', detail.id);
        break;
      case(coligo.scripts.actions.FETCH_EMPLOYEES):
        this.callDataService_('fetchAllEmployees');
        break;
      case(coligo.scripts.actions.DELETE_EMPLOYEE):
        this.callDataService_('deleteEmployee', detail.id);
        break;
    }
  },

  callDataService_: function(method, ...args) {
    args = args || [];
    this.$['data-service'][method](...args);
  }

}