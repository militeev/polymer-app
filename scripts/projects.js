goog.provide('coligo.scripts.Projects');

goog.require('goog.object');
goog.require('coligo.scripts.CRUD');

coligo.scripts.Projects = {

  list: [{
    id: 1001,
    name: 'Scarecrow Appropriate'
  }, {
    id: 1002,
    name: 'Forsaken Donut'
  }, {
    id: 1003,
    name: 'Jazz Everyday'
  }, {
    id: 1004,
    name: 'Scarlet Peasant'
  }],

}

goog.object.extend(coligo.scripts.Projects, coligo.scripts.CRUD);