goog.provide('coligo.behaviors.EmployeeModel');

coligo.behaviors.EmployeeModel = {

  properties: {

    fullName: {
      type: String,
      computed: 'computeFullName(model.first, model.last)',
      notify: true
    },

    sexOptions: {
      type: Array,
      value: [
        {value: 'm', label: 'Male'},
        {value: 'f', label: 'Female'}
      ],
      readOnly: true
    }

  },

  computeFullName(first, last) {
    //this.set('model.$fullName', first + ' ' + last);
    return first + ' ' + last;
  },

  attached: function() {
  }
  
}
