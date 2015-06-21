var Flux = require('../../flux')

Flux.registerStores({
  postComments: require('./stores/post-comment-store'),
});

module.exports = {
  actions: require('./actions'),
  getters: require('./getters'),
};
