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
        // departments: [],
        // projects: [],
        // employees: [],
        route: {
          hash: '',
          'yyy': 'zzz'
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