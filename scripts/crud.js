goog.provide('coligo.scripts.CRUD');

coligo.scripts.CRUD = {

  get: function(id) {
    for (let elem of this.list) {
      if (elem.id == id) {
        return goog.object.unsafeClone(elem);
      }
    }
    return null;
  },

  delete: function(id) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id == id) {
        let deleted = this.list[i];
        this.list.splice(i, 1);
        return deleted;
      }
    }
    return null;
  },

  insert: function(obj) {
    let maxId = 0;
    for (elem of this.list) {
      if (elem.id > maxId) {
        maxId = elem.id;
      }
    }
    obj = goog.object.unsafeClone(obj);
    obj.id = maxId + 1;
    this.list.push(obj);
  },

  update: function(obj) {
    for (let elem of this.list) {
      if (elem.id == obj.id) {
        goog.object.extend(elem, goog.object.unsafeClone(obj));
        return goog.object.unsafeClone(elem);
      }
    }
  },

  getAll: function(filterFunc) {
    let result = filterFunc ? this.list.filter(filterFunc) : this.list;
    return goog.object.unsafeClone(result);
  },

  delay: function(funcName, ...args) {
    args = args || [];
    let promise = new Promise(
        (resolve, reject) => {
          setTimeout(() => {
            resolve(this[funcName](...args));
          }, 500);
        });
    return promise;
  }

}
