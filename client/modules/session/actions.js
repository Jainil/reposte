var flux = require('../../flux'),
  actionTypes = require('./action-types'),
  getters = require('./getters'),
  q = require('qwest');

exports.login = function (user) {
  q.post('/login', user).then(
    function (user) {
      flux.dispatch(actionTypes.LOGIN, { user });
    }
  )
};

exports.fetchLoggedInUser = function (user) {
  q.get('/loggedInUser').then(
    function (user) {
      flux.dispatch(actionTypes.LOGIN, { user });
    }
  )
};

exports.logout = function () {
  q.post('/logout').then(
    function (user) {
      flux.dispatch(actionTypes.LOGOUT);
    }
  )
};

exports.register = function (user) {
  q.post('/users', user)
    .then(function (user) {
      exports.login(user);
    })
};