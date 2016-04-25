goog.provide('coligo.behaviors.DetailsPage');

goog.require('coligo.scripts.actions');

coligo.behaviors.DetailsPage = {

  properties: {

    id_: {
      type: String
    },

    hidden_: {
      type: Boolean,
      value: true,
    },

  },

  observers: [
    'detailsPageRouteChanged_(state.route)',
    'detailsPageModelChanged_(model)'
  ],

  detailsPageRouteChanged_(route) {
    if (route.hash) {
      this.set('hidden_', !(route.valueAt(0) == this.route && route.valueAt(1)));
      if (!this.get('hidden_')) {
        let routeId = route.valueAt(1);
        if (routeId == 'new') {
          this.id_ = '';
          this.model = {};
        } else if (!this.model || this.id_ != routeId) {
          this.id_ = routeId;
          this.emitAction({
            type: this.fetchAction,
            id: this.id_,
            path: 'model'
          });
        }
        this.fire('route-changed', route);
      }
    }
  },

  detailsPageModelChanged_(model) {
    if (model.id && model.id != this.id_) {
      window.location.hash = '#' + this.route + '/' + model.id;
    }
  }

}
