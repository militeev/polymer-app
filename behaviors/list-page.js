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

  beforeRegister() {
    this.registeredActionDispatchers = [];
  },

  routeChanged_(route) {
//     console.log('route changed: ', route);
    if (route.hash) {
      this.highlightedItemId_ = route.valueAt(1) || '';
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
      this.unRegisterActionDispatchers();
    }
  },

  registerActionDispatchers() {
    if (this.actionDispatchers) {
      let application = document.querySelector('clg-app');
      this.actionDispatchers.forEach(ad => {
        let actionDispatcher = event => {
          event.detail.statePath = this.get('elementState').getPath();
          ad.dispatchAction.call(application, event.detail.type, event.detail);
        };
        application.addActionDispatcher(actionDispatcher);
        this.registeredActionDispatchers.push(actionDispatcher);
      });
    }
  },

  unRegisterActionDispatchers() {
    this.registeredActionDispatchers.forEach(ad => {
      document.querySelector('clg-app').removeActionDispatcher(ad);
    })
  }

}
