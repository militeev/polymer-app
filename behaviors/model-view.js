goog.provide('coligo.behaviors.ModelView');

goog.require('coligo.scripts.actions');

coligo.behaviors.ModelView = {

  properties: {

    model: {
      type: Object,
    },

    modelPath: {
      type: String,
    },

  },

  saveModel(action) {
    this.emitAction({
      type: action,
      model: this.model,
      path: 'model'
    });
  }

}
