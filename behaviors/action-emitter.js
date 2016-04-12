goog.provide('coligo.behaviors.ActionEmitter');

goog.require('coligo.scripts.actions');

coligo.behaviors.ActionEmitter = {

  emitAction: function(details) {
    this.fire('dispatch-action', details);
  },

  ready: function() {
    this.actions = coligo.scripts.actions;
  }
  
}