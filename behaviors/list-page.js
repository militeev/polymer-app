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
  }

}
