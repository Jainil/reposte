"use strict";

var server = require('koa')(),
  serve = require('koa-static'),
  bodyParser = require('koa-bodyparser'),
  fs = require('co-fs'),
  views = require('co-views'),
  router = require('koa-router')(),
  postRoutes = require('./apis/post'),
  commentRoutes = require('./apis/comment'),
  userRoutes = require('./apis/user');

let render = views(__dirname + '/views/', {'default': 'ejs'});

server.use(bodyParser());

server.use(serve('static'));

server
  .use(userRoutes.routes())
  .use(postRoutes.routes())
  .use(commentRoutes.routes())
  .use(router.routes())
  .use(router.allowedMethods());

router.get('/', function *() {
  this.body = 'yo im the main router lo';
  this.status = 200;
});

server.listen(30000);