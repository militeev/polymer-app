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
    'modelChanged_(model)'
  ],

  detailsPageRouteChanged_(route) {
    if (route.hash) {
      this.id_ = route.valueAt(1);
      this.set('hidden_', !(route.valueAt(0) == '#' + this.route && this.id_));
      if (!this.get('hidden_')) {
        if (this.id_ == 'new') {
          this.model = {};
        } else if (!this.model || this.id_ != this.model.id) {
          this.emitAction({
            type: this.fetchAction,
            id: this.id_,
            path: 'model'
          });
        }
        if (this.afterRouteChanged) {
          this.afterRouteChanged();
        }
      }
    }
  },

  modelChanged_(model) {
    console.log('model changed');
    if (model.id && model.id != this.id_) {
      window.location.hash = '#' + this.route + '/' + model.id;
    }
  }

}
