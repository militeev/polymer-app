goog.provide('coligo.behaviors.ModelView');

goog.require('coligo.scripts.actions');

coligo.behaviors.ModelView = {

  properties: {

    model: {
      type: Object,
    },

    status: {
      type: Object,
    },

    /** Probably currently unused */
    modelPath: {
      type: String,
    },

  },

  observers: [
    'modelViewModelChanged_(model.*)'
  ],

  saveModel(action) {
    this.emitAction({
      type: action,
      model: this.model,
      modelPath: 'model',
      path: 'model',
      statusPath: 'status'
    });
  },

  modelViewModelChanged_(change) {
    if (change.path == 'model' && this.get('elementState')) {
      this.set([this.get('elementState').getPath(), 'status'], {validationErrors: []});    
    }
  }

}
