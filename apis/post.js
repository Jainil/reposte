"use strict";

var router = require('koa-router')({
    prefix: '/posts'
  }),
  posts = require('../utils/db')('posts');

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

  remove: function *(id) {
    yield posts.remove({id: id});
    this.status = 200
  }
};

router.post("/", actions.add);
router.get("/list", actions.getAll);
router.get("/:id", actions.get);
router.put("/:id", actions.update);
router.del("/:id", actions.remove);

module.exports = router;