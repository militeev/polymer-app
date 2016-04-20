goog.provide('coligo.behaviors.ActionDispatcher');

goog.require('coligo.scripts.actions');
goog.require('coligo.behaviors.ActionEmitter');

coligo.behaviors.ActionDispatcher = [{

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
      case(coligo.scripts.actions.SAVE_DEPARTMENT):
        this.callDataService_('saveDepartment', detail.model);
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
      case(coligo.scripts.actions.SAVE_EMPLOYEE):
        this.emitAction({
          type: coligo.scripts.actions.VALIDATE_EMPLOYEE,
          model: detail.model,
          statusPath: detail.statusPath
        });
        if (this.get([detail.statusPath, 'isValid'])) {
          this.callDataService_('saveEmployee', detail.model);
        }
        break;
      case(coligo.scripts.actions.DELETE_EMPLOYEE):
        this.callDataService_('deleteEmployee', detail.id);
        break;
      case(coligo.scripts.actions.FETCH_PROJECTS):
        this.callDataService_('fetchAllProjects');
        break;
      case(coligo.scripts.actions.FETCH_PROJECT):
        this.callDataService_('fetchProject', detail.id);
        break;
      case(coligo.scripts.actions.SAVE_PROJECT):
        this.callDataService_('saveProject', detail.model);
        break;
      case(coligo.scripts.actions.DELETE_PROJECT):
        this.callDataService_('deleteProject', detail.id);
        break;
    }
  },

  callDataService_: function(method, ...args) {
    args = args || [];
    this.$['data-service'][method](...args);
  }

}, coligo.behaviors.ActionEmitter];