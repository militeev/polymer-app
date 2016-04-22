goog.provide('coligo.scripts.PostActionDispatcher');

goog.require('coligo.scripts.actions');

(function() {

  function traverseState(path, action, detail) {
    // console.log('traversing state: ' + path);
    let obj = this.get(path);
    if (obj.id && action == 'update' && obj.id == detail.data.id) {
      this.set(path, detail.data);
      return;
    }
    if (goog.isArray(obj) && action == 'delete') {
      for (let i = obj.length - 1; i >= 0; i--) {
        if (obj[i].id == detail.id) {
          this.splice(path, i, 1);
        }
      }
    }
    for (let key of Object.keys(obj)) {
      let field = obj[key];
      if (goog.isObject(field) && !goog.isFunction(field)) {
        traverseState.call(this, path + '.' + key, action, detail);
      }
    }
  }

  coligo.scripts.PostActionDispatcher = {

    dispatchAction: function(action, options) {
      console.log('Post dispatching action: ', options);
      let actionType = action.toString().
          replace('Symbol(', '').replace(')', '');
      if (actionType.endsWith('_FETCHED') ||
          actionType.endsWith('_UPDATED')) {
        if (!goog.isArray(options.response)) {
          traverseState.call(this, 'state', 'update', {data: options.response});
        }
      } else if (actionType.endsWith('_DELETED')) {
        traverseState.call(this, 'state', 'delete', {id: options.id});
      } else if (actionType.endsWith('_ADDED')) {

      }
    },

  }

})();

