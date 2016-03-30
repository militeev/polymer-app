goog.provide('coligo.behaviors.ApplicationState');

coligo.behaviors.ApplicationState = {

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
        route: ""
      }
    } 

  }
  
}