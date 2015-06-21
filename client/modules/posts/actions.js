var _ = require('lodash'),
  RestApi = require('../rest-api'),
  model = require('./model'),
  Flux = require('../../flux'),
  ACTION_TYPES = require('./action-types');

var postApiActions = RestApi.createApiActions(model);

module.exports = _.extend({}, postApiActions, {
  getCommentsForPost(id) {
    model.getComments(id).then(function (comments) {
      Flux.dispatch(ACTION_TYPES.GET_COMMENTS, {
        postId: id,
        data: comments
      })
    })
  },

  addCommentToPost(id, comment) {
    model.addComment(id, comment).then(function (comment) {
      Flux.dispatch(ACTION_TYPES.ADD_COMMENT, {
        postId: id,
        data: comment
      })
    })
  }
});
