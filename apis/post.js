"use strict";

var router = require('koa-router')({
    prefix: '/posts'
  }),
  posts = require('../utils/db')('posts'),
  comments = require('../utils/db')('comments');

var actions = {
  add: function *() {
    this.body = yield posts.insert(this.request.body);
    this.status = 201;
  },

  getAll: function *() {
    this.body = yield posts.find({});
    this.status = 200;
  },

  get: function *(id) {
    this.body = yield posts.findById(id);
    this.status = 200;
  },

  update: function *() {
    this.body = yield posts.updateById(id, this.request.body);
    this.status = 200;
  },

  remove: function *() {
    yield posts.remove({id: this.params.id});
    this.status = 200;
  },

  getComments: function *() {
    this.body = yield comments.find({postId: this.params.id});
    this.status = 200;
  },

  addComment: function *() {
    var comment = this.request.body;
    comment.postId = this.params.id;
    this.body = yield comments.insert(comment);
    this.status = 200;
  }
};

router.post("/", actions.add);
router.get("/list", actions.getAll);
router.get("/:id", actions.get);
router.put("/:id", actions.update);
router.del("/:id", actions.remove);
router.get("/:id/comments", actions.getComments);
router.post("/:id/comments", actions.addComment);

module.exports = router;