var React = require('react/addons'),
  Flux = require('../flux'),
  sessionModule = require('../modules/session');

var Submit = React.createClass({
  mixins: [Flux.ReactMixin],

  getDataBindings() {
    return {
      loggedInUser: sessionModule.getters.currentUser
    }
  },

  _registerUser() {
    sessionModule.actions.register({
      username: this.refs['usernameInput'].getDOMNode().value,
      password: this.refs['passwordInput'].getDOMNode().value,
    })
  },

  _loginUser() {
    sessionModule.actions.login({
      username: this.refs['usernameInput'].getDOMNode().value,
      password: this.refs['passwordInput'].getDOMNode().value,
    })
  },

  _logoutUser() {
    sessionModule.actions.logout();
  },

  render: function () {

    var loginForm = (
      <div>
        <div className="row">
          <div className="six columns">
            <label for="usernameInput">Username</label>
            <input className="u-full-width" type="text" id="usernameInput" ref="usernameInput"/>
          </div>
        </div>
        <div className="row">
          <div className="six columns">
            <label for="passwordInput">Password</label>
            <input className="u-full-width" type="password" id="passwordInput" ref="passwordInput"/>
          </div>
        </div>
        <div className="row">
          <div className="six columns">
            <button className="u-full-width" onClick={this._loginUser}>Login</button>
          </div>
        </div>
        <div className="row">
          <div className="six columns">
            <button className="u-full-width" onClick={this._registerUser}>Register</button>
          </div>
        </div>
      </div>
    );

    var logoutButton = (
      <div>
        <div className="row">
          <div className="six columns">
            <button className="u-full-width" onClick={this._logoutUser}>Logout</button>
          </div>
        </div>
      </div>
    );

    return this.state.loggedInUser ? logoutButton : loginForm;
  }
});

module.exports = Submit;
