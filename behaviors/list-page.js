goog.provide('coligo.behaviors.ListPage');

goog.require('coligo.scripts.actions');

coligo.behaviors.ListPage = {

  properties: {

    highlightedItemId_: {
      type: Number
    },

    route: {
      type: String
    },

    isPageActive: {
      type: Boolean,
      value: false,
      observer: 'listPagePageActiveChanged_'
    }

  },

  observers: [
    'listPageRouteChanged_(state.route)'
  ],

  beforeRegister() {
  },

  listPageRouteChanged_(route) {
    if (route.hash) {
      if (this.route == route.valueAt(0)) {
        this.set('isPageActive', true);
        this.highlightedItemId_ = route.valueAt(1) || '';
      } else {
        this.set('isPageActive', false);
        this.highlightedItemId_ = undefined;
      }
    }
  },

  listPagePageActiveChanged_(isPageActive) {
    if (isPageActive) {
      if (this.fetchAction) {
        this.emitAction({
          type: this.fetchAction,
          path: 'list'
        });
      }
      this.registerActionDispatchers();
    } else {
      this.unRegisterActionDispatchers();
    }
  },

};
