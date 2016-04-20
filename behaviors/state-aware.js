goog.provide('coligo.behaviors.StateAware');

coligo.behaviors.StateAware = {

  properties: {

    /**
     * 
     */
    state: {
      type: Object,
    },

    stateAware: {
      type: Boolean,
      value: true,
      reflectToAttribute: true,
      readOnly: true
    },

    elementState: {
      type: Object
    }

  },

  observers: [
    'stateChanged_(state.*)'
  ],

  listeners: {
    'dispatch-action': 'onDispatchAction_',
  },

  attached: function() {
    let app = document.querySelector('clg-app');
    if (!this.state) {
      this.state = app.get('state');
    }
    this.elementState = app.createElementState(this);
  },

  stateChanged_: function(change) {
    if (this.elementState) {
      if (change.path.startsWith(this.elementState.getPath()) &&
          change.path.length > this.elementState.getPath().length) {
        let pathToNotify = change.path.slice(this.elementState.getPath().length + 1);
        this.notifyPath(pathToNotify, change.value, true);
      }
    }
    this.notifyStateAwareChildren(change.path, change.value);
  },

  enhancePath_(path) {
    return (path && !path.startsWith('state.')) ?
        (this.get('elementState').getPath() + '.' + path) : path;
  },

  onDispatchAction_: function(event, detail) {
    detail.path = this.enhancePath_(detail.path);
    detail.modelPath = this.enhancePath_(detail.modelPath);
    detail.listPath = this.enhancePath_(detail.listPath);
    detail.statusPath = this.enhancePath_(detail.statusPath);
    console.log('dispatch action: ' + detail.path);
  },

  notifyStateAwareChildren: function(path, value) {
    let stateAwareElements = 
      Array.from(Polymer.dom(this.root).querySelectorAll('[state-aware]'));
    stateAwareElements.forEach(element => {
      element.notifyPath(path, value, true);
    });
  }
  
}