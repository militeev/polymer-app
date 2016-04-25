/**
 * Created by militeev on 4/18/16.
 */

goog.provide("coligo.scripts.EmployeesActionDispatcher");

goog.require('coligo.scripts.actions');

coligo.scripts.EmployeesActionDispatcher = {

  dispatchAction(action, options) {
    console.log('Employees: dispatching action: ', action);
    let listPath = [options.statePath, 'list'];
    let modelPath = [options.statePath, 'model'];
    if (action == coligo.scripts.actions.EMPLOYEE_DELETED) {
      if (this.get('state.route.hash') == '#employees/' + options.id) {
        window.location.hash = 'employees';
      }
    }
    if (action == coligo.scripts.actions.EMPLOYEE_ADDED) {
      this.push(listPath, options.response);
    }
    if (action == coligo.scripts.actions.VALIDATE_EMPLOYEE) {
      coligo.scripts.EmployeesActionDispatcher.
          validateEmployee.call(this, options.model, options.statusPath);
    }
  },

  validateEmployee(model, statusPath) {
    this.set([statusPath, 'validationErrors'], []);
    if (!model.first) {
      this.push([statusPath, 'validationErrors'], 'First name not specified');
    }
    if (!model.last) {
      this.push([statusPath, 'validationErrors'], 'Last name not specified');
    }
    this.set([statusPath, 'isValid'],
             this.get([statusPath, 'validationErrors']).length == 0);
  }

};