goog.provide('coligo.behaviors.ActionEmitter');

coligo.behaviors.ActionEmitter = {

  emitAction: function(details) {
    this.fire('dispatch-action', details);
  }
  
}