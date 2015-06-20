var _ = require('lodash'),
  RestApi = require('../rest-api'),
  model = require('./model');

var postApiActions = RestApi.createApiActions(model);

module.exports = _.extend({}, postApiActions, {
  // non rest actions
});
