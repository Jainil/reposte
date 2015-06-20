var _ = require('lodash');
var q = require('qwest');
var { toJS } = require('nuclear-js');

var ENTITY = 'posts';
var URL = 'posts/';

exports.entity = ENTITY;

exports.save = function(instance) {
  instance = toJS(instance);
  if (instance._id) {
    return q.put(URL + instance._id, instance)
  } else {
    return q.post(URL, instance)
  }
};

exports.fetch = function(id) {
  return q.get(URL + id)
};

exports.fetchAll = function(params) {
  return q.get(URL + 'list', params);
};

exports.delete = function(instance) {
  instance = toJS(instance);
  return q.delete(URL + instance._id);
};
