"use strict";

var router = require('koa-router')(),
  users = require('../utils/db')('users');

var actions = {
  login: function *() {

    var requestUser = this.request.body;

    var dbUser = yield users.findOne({username: requestUser.username});

    if(!dbUser) {
      this.body = {error: 'Username not found'};
      this.status = 400;
    } else if (dbUser.password !== requestUser.password) {
      this.body = {error: 'Incorrect password'};
      this.status = 400;
    } else {
      this.session.user = dbUser;
      this.body = dbUser;
      this.status = 200;
    }
  },

  logout: function *() {
    this.session.user = null;
    this.status = 200;
  },

  getLoggedInUser: function *() {
    this.body = this.session.user;
    this.status = 200;
  },
};

router.post("/login", actions.login);
router.post("/logout", actions.logout);
router.get("/loggedInUser", actions.getLoggedInUser);

module.exports = router;