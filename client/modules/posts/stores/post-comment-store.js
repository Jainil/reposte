var Nuclear = require('nuclear-js'),
  toImmutable = Nuclear.toImmutable,
  actionTypes = require('../action-types'),
  _ = require('lodash');

module.exports = new Nuclear.Store({
  getInitialState() {
    return toImmutable({
      "dummy": "Data"
    });
  },

  initialize() {
    this.on(actionTypes.GET_COMMENTS, setCommentsForPost);
    this.on(actionTypes.ADD_COMMENT, addCommentToPost);
  }
});

function setCommentsForPost(state, payload) {
  var data = payload.data;
  var postId = payload.postId;

  return state.withMutations(function(state) {
    data.forEach(function(entry) {
      state.setIn([postId, entry._id], toImmutable(entry));
    })
  });
}

function addCommentToPost(state, payload) {
  var comment = payload.data;

  return state.withMutations(function(state) {
      return state.setIn([payload.postId, comment._id], toImmutable(comment));
  });
}



