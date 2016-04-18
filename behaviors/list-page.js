goog.provide('coligo.behaviors.ListPage');

goog.require('coligo.scripts.actions');

coligo.behaviors.ListPage = {

  properties: {

    highlightedItemId_: {
      type: Number
    }

  },

  observers: [
    'routeChanged_(state.route)'
  ],

  routeChanged_(route) {
//     console.log('route changed: ', route);
    if (route.hash) {
      this.highlightedItemId_ = route.valueAt(1);
    }
  },

  pageWatcher(detail) {
    if (this.fetchAction && detail.pageSelected) {
      this.emitAction({
        type: this.fetchAction,
        path: 'list'
      });
      this.registerActionDispatchers();
    }
    if (detail.pageDeselected) {
      this.unregisterActionDispatchers();
    }
  },

  registerActionDispatchers() {
    if (actionDispatchers) {
      actionDispatchers.forEach(ad => {
        document.querySelector('clg-app').addActionDispatcher((event, detail => {
          detail.statePath = this.get('elementState').getPath();
          ad.dispatchAction(detail.type, detail);
        }))
      });
    }
  },

  unregisterActionDispatchers() {

  }

}
