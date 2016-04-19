goog.provide('coligo.behaviors.PostActionDispatcher');

goog.require('coligo.scripts.actions');

coligo.behaviors.PostActionDispatcher = {

  listeners: {

    'dispatch-action': 'onDispatchPostAction_'

  },

  onDispatchPostAction_: function(event, detail) {
    console.log('Post dispatching action: ', detail);
    let actionType = detail.type.toString().
        replace('Symbol(', '').replace(')', '');
    if (actionType.endsWith('_FETCHED') ||
        actionType.endsWith('_UPDATED')) {
      console.log('fetched or updated');
      if (!goog.isArray(detail.response)) {
        this.traverseState('state', 'update', {data: detail.response});      
      }
    } else if (actionType.endsWith('_DELETED')) {
      console.log('deleted');
    } else if (actionType.endsWith('_ADDED')) {

    }
  },

//   updateStatePostAction: function(response) {
//     //if response is single model, update all occurences of the model in state
//   },

//   deleteFromStatePostAction: function(id) {
//     //delete all occurences with given id
//   },

  traverseState(path, action, detail) {
    console.log('traversing state: ' + path);
    let obj = this.get(path);
    for (let key of Object.keys(obj)) {
      let field = obj[key];
      if (goog.isObject(field) && !goog.isFunction(field)) {
        if (action == 'update') {
          if (field.id == detail.data.id) {
            console.log('about to update ' + field.id);
            continue;
          }
        }
        this.traverseState(path + '.' + key);
      } 
    }
  }

}