goog.provide('coligo.behaviors.ActionDispatcher');

goog.require('coligo.scripts.actions');

coligo.behaviors.ActionDispatcher = {

  listeners: {

    'dispatch-action': 'onDispatchAction_'

  },

  onDispatchAction_: function(event, detail) {
    console.log('Dispatching action: ', detail);
    this.$['data-service'].path = detail.path;
    switch (detail.type) {
      case(coligo.scripts.actions.FETCH_DEPARTMENTS):
        this.callDataService_('fetchAllDepartments');
        break;
      case(coligo.scripts.actions.FETCH_DEPARTMENT):
        this.callDataService_('fetchDepartment', detail.id);
        break;
      case(coligo.scripts.actions.DELETE_DEPARTMENT):
        this.callDataService_('deleteDepartment', detail.id);
        break;
      case(coligo.scripts.actions.FETCH_EMPLOYEES):
        if (detail.departmentId) {
          this.callDataService_('fetchDepartmentEmployees', 
                                detail.departmentId);
        } else {
          this.callDataService_('fetchAllEmployees');
        }
        break;
      case(coligo.scripts.actions.FETCH_EMPLOYEE):
        this.callDataService_('fetchEmployee', detail.id);
        break;
      case(coligo.scripts.actions.UPDATE_EMPLOYEE):
        this.callDataService_('updateEmployee', detail.model);
        break;
      case(coligo.scripts.actions.DELETE_EMPLOYEE):
        this.callDataService_('deleteEmployee', detail.id);
        break;
      case(coligo.scripts.actions.FETCH_PROJECTS):
        this.callDataService_('fetchAllProjects');
        break;
    }
  },

  callDataService_: function(method, ...args) {
    args = args || [];
    this.$['data-service'][method](...args);
  }

}