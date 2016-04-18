/**
 * Created by militeev on 4/18/16.
 */

goog.provide("coligo.scripts.DepartmentsActionDispatcher");

goog.require('coligo.scripts.actions');

coligo.scripts.DepartmentsActionDispatcher = {

  dispatchAction(action, options) {
    console.log('Departments: dispatching action: ', action);
    let listPath = [options.statePath, 'list'];
    if (action == coligo.scripts.actions.DEPARTMENT_DELETED) {
      let index = this.get(listPath).findIndex(
        elem => elem.id == options.id);
      if (index >= 0) {
        this.splice(listPath, index, 1);
      }
    }
    if (action == coligo.scripts.actions.DEPARTMENT_ADDED) {
      this.push(listPath, options.response);
    }
  }

};