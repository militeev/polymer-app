goog.provide('coligo.behaviors.StateAware');

coligo.behaviors.StateAware = {

  properties: {

    /**
     * 
     */
    state: {
      type: Object,
      value: {
        departments: [],
        projects: [],
        employees: [],
        route: {
          hash: '',
          'yyy': 'zzz'
        }
      }
    },

    stateAware: {
      type: Boolean,
      value: true,
      reflectToAttribute: true,
      readOnly: true
    }

  },

  observers: [
    'stateChanged_(state.*)'
  ],

  attached: function() {
    this.state = document.querySelector('clg-app').state;
  },

  stateChanged_: function(change) {
    this.notifyStateAwareChildren(change.path, change.value);
  },

  notifyStateAwareChildren: function(path, value) {
    let stateAwareElements = 
      Array.from(Polymer.dom(this.root).querySelectorAll('[state-aware]'));
    stateAwareElements.forEach(element => {
      element.notifyPath(path, value, true);
    });
  }
  
}