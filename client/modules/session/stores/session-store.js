var Nuclear = require('nuclear-js'),
  toImmutable = Nuclear.toImmutable,
  actionTypes = require('../action-types'),
  _ = require('lodash');

module.exports = new Nuclear.Store({
  getInitialState() {
    return toImmutable({});
  },

  initialize() {
    this.on(actionTypes.LOGIN, updateCurrentUser);
    this.on(actionTypes.LOGOUT, logoutCurrentUser);
  }
});

function updateCurrentUser(state, { user }) {
  return !_.isUndefined(user.username) ? state.set('user', user) : state;
}

function logoutCurrentUser(state) {
  return state.removeIn(['user']);
}