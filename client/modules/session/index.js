var Flux = require('../../flux')

Flux.registerStores({
  session: require('./stores/session-store'),
});

module.exports = {
  actions: require('./actions'),
  getters: require('./getters'),
};
