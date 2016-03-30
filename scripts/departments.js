goog.provide('coligo.scripts.Departments');

goog.require('goog.object');
goog.require('coligo.scripts.CRUD');

coligo.scripts.Departments = {

  list: [{
    id: 101,
    name: 'Accounting'
  }, {
    id: 102,
    name: 'Marketing'
  }, {
    id: 103,
    name: 'Information Technology'
  }],

}

goog.object.extend(coligo.scripts.Departments, coligo.scripts.CRUD);