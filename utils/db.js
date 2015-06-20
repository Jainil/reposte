"use strict";

var monk = require('monk'),
  wrap = require('co-monk'),
  db = monk('localhost/reposte');

module.exports = function (table) {
  return wrap(db.get(table));
};


