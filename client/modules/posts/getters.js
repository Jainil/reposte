var RestApi = require('../rest-api'),
  model = require('./model'),
  toImmutable = require('nuclear-js').toImmutable;

exports.entityMap = RestApi.createEntityMapGetter(model);

exports.byId = RestApi.createByIdGetter(model);

exports.postList = [
  exports.entityMap,
    map => map.toList()
];

exports.postComments = function(id) {
  return [
    ['postComments', id],
    /**
     * @return {Immutable.Map}
     */
      function(entityMap) {
      // protect the entityMap here from being undefined, there are cases
      // where an entity type isn't loaded yet, so we need to always to
      // return an Immutable.Map for getters downstream
      if (!entityMap) {
        return [];
      } else {
        return entityMap.toList()
      }
    }
  ]
};