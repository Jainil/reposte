"use strict";

var config = require('./utils/config')(),
  app = require('koa')(),
  serve = require('koa-static'),
  bodyParser = require('koa-bodyparser'),
  router = require('koa-router')(),
  session = require('koa-session'),
  postRoutes = require('./apis/post'),
  commentRoutes = require('./apis/comment'),
  authRoutes = require('./apis/auth'),
  userRoutes = require('./apis/user');

app.use(bodyParser());

app.keys = ['some secret hurr'];
app.use(session(app));

app.use(serve('static'));

app
  .use(userRoutes.routes())
  .use(postRoutes.routes())
  .use(commentRoutes.routes())
  .use(authRoutes.routes())
  .use(router.routes())
  .use(router.allowedMethods());

router.get('/', function *() {
  this.body = 'yo im the main router lo';
  this.status = 200;
});

app.listen(config.port);
console.log('Reposte started on port: ' + config.port);