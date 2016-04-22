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
    },

    application: {
      type: Object,
      value: {}
    }

  },

  observers: [
    'stateAwareStateChanged_(state.*)'
  ],

  listeners: {
  },

  beforeRegister() {
    this.registeredActionDispatchers = [];
  },

  attached: function() {
    let app = this.get('application.element');
    if (!this.state) {
      this.state = app.get('state');
    }
    this.elementState = app.createElementState(this);
  },

  stateAwareStateChanged_: function(change) {
    if (this.elementState) {
      if (change.path.startsWith(this.elementState.getPath()) &&
          change.path.length > this.elementState.getPath().length) {
        let pathToNotify = change.path.slice(this.elementState.getPath().length + 1);
        this.notifyPath(pathToNotify, change.value, true);
      }
    }
    this.notifyStateAwareChildren(change.path, change.value);
  },

  enhancePath(path) {
    return (path && !path.startsWith('state.')) ?
        (this.get('elementState').getPath() + '.' + path) : path;
  },

  notifyStateAwareChildren: function(path, value) {
    let stateAwareElements = 
      Array.from(Polymer.dom(this.root).querySelectorAll('[state-aware]'));
    stateAwareElements.forEach(element => {
      element.notifyPath(path, value, true);
    });
  },

  registerActionDispatchers() {
    if (this.actionDispatchers) {
      let application = this.get('application.element');
      this.actionDispatchers.forEach(ad => {
        let actionDispatcher = event => {
          event.detail.statePath = this.get('elementState').getPath();
          ad.dispatchAction.call(application, event.detail.type, event.detail);
        };
        application.addActionDispatcher(actionDispatcher);
        this.registeredActionDispatchers.push(actionDispatcher);
      });
    }
  },

  unRegisterActionDispatchers() {
    this.registeredActionDispatchers.forEach(ad => {
      document.querySelector('clg-app').removeActionDispatcher(ad);
    })
  }

}