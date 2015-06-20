"use strict";

var router = require('koa-router')({
    prefix: '/comments'
  }),
  comments = require('../utils/db')('comments');

var actions = {
  add: function *() {
    this.body = yield comments.insert(this.request.body);
    this.status = 201;
  },

  getAll: function *() {
    this.body = yield comments.find({});
    this.status = 200;
  },

  get: function *(id) {
    this.body = yield comments.findById(id);
    this.status = 200;
  },

  update: function *() {
    this.body = yield comments.updateById(id, this.request.body);
    this.status = 200;
  },

  remove: function *(id) {
    yield comments.remove({id: id});
    this.status = 200
  }
};

router.post("/", actions.add);
router.get("/list", actions.getAll);
router.get("/:id", actions.get);
router.put("/:id", actions.update);
router.del("/:id", actions.remove);

module.exports = router;