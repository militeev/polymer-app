goog.provide('coligo.behaviors.StateAccessor');

coligo.behaviors.StateAccessor = {

  properties: {

    /**
     * 
     */
    state: {
      type: Object,
    } 

  },

  attached: function() {
    console.log('state accessor attached');
//     this.state = document.querySelector('clg-app').state;
  }
  
}