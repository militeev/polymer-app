goog.provide('coligo.behaviors.Utils');

goog.require('coligo.scripts.actions');

coligo.behaviors.Utils = {

  areTwoValuesEqual(value1, value2) {
    return value1 == value2;
  },

  elementAt(array, index, fieldName) {
    let result = array[index];
    if (fieldName) {
      result = result[fieldName];
    }
    return result;
  }

}