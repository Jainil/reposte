"use strict";

var router = require('koa-router')({
    prefix: '/users'
  }),
  users = require('../utils/db')('users');

var actions = {
  add: function *() {
    this.body = yield users.insert(this.request.body);
    this.status = 201;
  },

  getAll: function *() {
    this.body = yield users.find({});
    this.status = 200;
  },

  get: function *(id) {
    this.body = yield users.findById(id);
    this.status = 200;
  },

  update: function *() {
    this.body = yield users.updateById(id, this.request.body);
    this.status = 200;
  },

  remove: function *(id) {
    yield users.remove({id: id});
    this.status = 200
  }
};

router.post("/", actions.add);
router.get("/list", actions.getAll);
router.get("/:id", actions.get);
router.put("/:id", actions.update);
router.del("/:id", actions.remove);

module.exports = router;