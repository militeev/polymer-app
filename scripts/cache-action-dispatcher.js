goog.provide('coligo.scripts.CacheActionDispatcher');

goog.require('coligo.scripts.actions');

(function() {

  let cache = {};

  coligo.scripts.CacheActionDispatcher = {

    dispatchAction: function(action, options) {
      console.log('Cache dispatching action: ', options);
      let actionType = action.toString().
      replace('Symbol(', '').replace(')', '');
      if (actionType.startsWith('FETCH_') && options.id) {
        if (cache[options.id]) {
          this.set(options.path, cache[options.id]);
          event.stopImmediatePropagation();
        }
      }
      if ((actionType.endsWith('_FETCHED') ||
        actionType.endsWith('_ADDED') ||
        actionType.endsWith('_UPDATED')) && options.response) {
        let array = goog.isArray(options.response) ?
          options.response : [options.response];
        array.forEach(elem => { cache[elem.id] = elem; });
      }
      if (actionType.endsWith('_DELETED') && options.id) {
        delete cache[options.id];
      }
    },

  }

})();

