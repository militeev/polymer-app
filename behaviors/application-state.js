goog.provide('coligo.behaviors.ApplicationState');

coligo.behaviors.ApplicationState = {

  properties: {

    /**
     * 
     */
    state: {
      type: Object,
      value: {
        elements: [],
        route: {
          hash: '',
        },
        catalogs: {
          TASK_SIZES: [{
            value: 's',
            label: 'Small'
          }, {
            value: 'm',
            label: 'Medium'
          }, {
            value: 'l',
            label: 'Large'
          }]
        }
      }
    } 

  }
  
}