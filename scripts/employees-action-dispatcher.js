/**
 * Created by militeev on 4/18/16.
 */

goog.provide("coligo.scripts.EmployeesActionDispatcher");

goog.require('coligo.scripts.actions');

coligo.scripts.EmployeesActionDispatcher = {

  dispatchAction(action, options) {
    console.log('Employees: dispatching action: ', action);
    let listPath = [options.statePath, 'list'];
    if (action == coligo.scripts.actions.EMPLOYEE_DELETED) {
      if (this.get('state.route.hash') == '#employees/' + options.id) {
        window.location.hash = 'employees';
      }
    }
    if (action == coligo.scripts.actions.EMPLOYEE_ADDED) {
      this.push(listPath, options.response);
    }
  }

};