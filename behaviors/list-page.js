goog.provide('coligo.behaviors.ListPage');

goog.require('coligo.scripts.actions');

coligo.behaviors.ListPage = {

  properties: {

    route: {
      type: Object,
      observer: 'routeChanged_'
    },

    selectedItemId_: {
      type: Number
    }

  },

  routeChanged_(route) {
//     console.log('route changed: ', route);
    if (route.hash) {
      this.selectedItemId_ = Number(route.valueAt(1));
    }
  }

}
