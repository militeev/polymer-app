goog.provide('coligo.behaviors.ListPage');

goog.require('coligo.scripts.actions');

coligo.behaviors.ListPage = {

  properties: {

    highlightedItemId_: {
      type: Number
    }

  },

  observers: [
    'listPageRouteChanged_(state.route)'
  ],

  beforeRegister() {
  },

  listPageRouteChanged_(route) {
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

};
