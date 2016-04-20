/**
 * Created by militeev on 4/18/16.
 */

goog.provide("coligo.scripts.ProjectsActionDispatcher");

goog.require('coligo.scripts.actions');

coligo.scripts.ProjectsActionDispatcher = {

  dispatchAction(action, options) {
    console.log('Projects: dispatching action: ', action);
    let listPath = [options.statePath, 'list'];
    if (action == coligo.scripts.actions.PROJECT_DELETED) {
      // let index = this.get(listPath).findIndex(
      //   elem => elem.id == options.id);
      // if (index >= 0) {
      //   this.splice(listPath, index, 1);
      // }
      if (this.get('state.route.hash') == '#projects/' + options.id) {
        window.location.hash = 'projects';
      }
    }
    if (action == coligo.scripts.actions.PROJECT_ADDED) {
      this.push(listPath, options.response);
    }
  }

};