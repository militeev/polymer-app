goog.provide('coligo.scripts.DatabaseActionDispatcher');

goog.require('coligo.scripts.actions');

(function() {

  function callDataService_(method, ...args) {
    args = args || [];
    this.$['data-service'][method](...args);
  }

  coligo.scripts.DatabaseActionDispatcher = {

    dispatchAction: function (action, options) {
      console.log('Dispatching action: ', options);
      let callDataService = (...args) => {
        this.$['data-service'].path = options.path;
        callDataService_.call(this, ...args);
      };
      switch (action) {
        case(coligo.scripts.actions.FETCH_DEPARTMENTS):
          callDataService('fetchAllDepartments');
          break;
        case(coligo.scripts.actions.FETCH_DEPARTMENT):
          callDataService('fetchDepartment', options.id);
          break;
        case(coligo.scripts.actions.SAVE_DEPARTMENT):
          callDataService('saveDepartment', options.model);
          break;
        case(coligo.scripts.actions.DELETE_DEPARTMENT):
          callDataService('deleteDepartment', options.id);
          break;
        case(coligo.scripts.actions.FETCH_EMPLOYEES):
          if (options.departmentId) {
            callDataService('fetchDepartmentEmployees',
              options.departmentId);
          } else {
            callDataService('fetchAllEmployees');
          }
          break;
        case(coligo.scripts.actions.FETCH_EMPLOYEE):
          callDataService('fetchEmployee', options.id);
          break;
        case(coligo.scripts.actions.SAVE_EMPLOYEE):
          this.emitAction({
            type: coligo.scripts.actions.VALIDATE_EMPLOYEE,
            model: options.model,
            statusPath: options.statusPath
          });
          if (this.get([options.statusPath, 'isValid'])) {
            callDataService('saveEmployee', options.model);
          }
          break;
        case(coligo.scripts.actions.DELETE_EMPLOYEE):
          callDataService('deleteEmployee', options.id);
          break;
        case(coligo.scripts.actions.FETCH_PROJECTS):
          callDataService('fetchAllProjects');
          break;
        case(coligo.scripts.actions.FETCH_PROJECT):
          callDataService('fetchProject', options.id);
          break;
        case(coligo.scripts.actions.SAVE_PROJECT):
          callDataService('saveProject', options.model);
          break;
        case(coligo.scripts.actions.DELETE_PROJECT):
          callDataService('deleteProject', options.id);
          break;
      }
    },

  };

})();