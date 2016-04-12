goog.provide('coligo.behaviors.StateMutator');

coligo.behaviors.StateMutator = {

  properties: {

    /**
     * 
     */
    state: {
      type: Object,
      notify: true,
    }

  },

  observers: [
    'stateChanged_(state.*)'
  ],

  stateChanged_(change) {
//     console.log('s m: ', change);
  }
  
}