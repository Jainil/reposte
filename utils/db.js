"use strict";

var monk = require('monk'),
  wrap = require('co-monk'),
  db = monk('localhost/reposte'),
  _ = require('lodash');

module.exports = function (table) {
  var collection = wrap(db.get(table));

  var _coll = Object.create(collection);

  _coll.insert = function (obj) {
    obj['created_at'] = new Date();
    return this.__proto__.insert(obj);
  };

  _coll.update = function (query, obj) {
    obj['updated_at'] = new Date();
    return this.__proto__.update(query, obj);
  };

  return _coll;
};


