goog.provide('coligo.scripts.Employees');

goog.require('goog.object');
goog.require('coligo.scripts.CRUD');

coligo.scripts.Employees = {

  list: [{
    id: 201,
    first: 'Estelle',
    last: 'Shimizu',
    sex: 'f',
  }, {
    id: 202,
    first: 'Garry',
    last: 'Chmiel',
    sex: 'm'
  }, {
    id: 203,
    first: 'Myrtice',
    last: 'Luckow',
    sex: 'f',
  }, {
    id: 204,
    first: 'Michal',
    last: 'Pressman',
    sex: 'm',
  }, {
    id: 205,
    first: 'Janay',
    last: 'Giblin'
  }, {
    id: 206,
    first: 'Gwyneth',
    last: 'Crecelius'
  }, {
    id: 207,
    first: 'Ressie',
    last: 'Caulfield'
  }, {
    id: 208,
    first: 'Shelby',
    last: 'Sackrider'
  }, {
    id: 209,
    first: 'Danny',
    last: 'Coley'
  }, {
    id: 210,
    first: 'Joel',
    last: 'Breda'
  }],

}

goog.object.extend(coligo.scripts.Employees, coligo.scripts.CRUD);