goog.provide('coligo.behaviors.ActionEmitter');

goog.require('coligo.scripts.actions');

coligo.behaviors.ActionEmitter = {

  emitAction: function(detail) {
    if (this.stateAware) {
      detail.path = this.enhancePath(detail.path);
      detail.modelPath = this.enhancePath(detail.modelPath);
      detail.listPath = this.enhancePath(detail.listPath);
      detail.statusPath = this.enhancePath(detail.statusPath);
    }
    this.fire('dispatch-action', detail);
  },

  beforeRegister: function() {
    this.actions = coligo.scripts.actions;
  }

};