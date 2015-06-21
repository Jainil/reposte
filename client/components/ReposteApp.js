var React = require('react/addons');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var Posts = require('./Posts');
var Post = require('./Post');
var Users = require('./Users');
var Submit = require('./Submit');
var Login = require('./Login');
var About = require('./About');

var flux = require('../flux');
var sessionModule = require('../modules/session');

var App = React.createClass({
  mixins: [flux.ReactMixin],

  getDataBindings() {
    return {
      user : sessionModule.getters.currentUser
    }
  },

  componentWillMount() {
    sessionModule.actions.fetchLoggedInUser();
  },

  render() {
    let login = this.state.user ? this.state.user.username : 'Login';

    return (
      <div>
        <nav className="navbar">
          <div className="container">
            <ul className="navbar-list">
              <li className="navbar-item"><Link to="about" className="navbar-link">Reposte</Link></li>
              <li className="navbar-item"><Link to="posts" className="navbar-link">Posts</Link></li>
              <li className="navbar-item"><Link to="users" className="navbar-link">Users</Link></li>
              <li className="navbar-item"><Link to="submit" className="navbar-link">Submit</Link></li>
              <li className="navbar-item u-pull-right"><Link to="login" className="navbar-link">{login}</Link></li>
            </ul>
          </div>
        </nav>
        <div className="container main-view">
          <RouteHandler user={this.state.user}/>
        </div>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="posts" handler={Posts}/>
    <Route path="post/:postId" handler={Post}/>
    <Route name="submit" handler={Submit}/>
    <Route name="users" handler={Users}/>
    <Route name="login" handler={Login}/>
    <Route name="about" handler={About}/>
    <DefaultRoute handler={About}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.body);
});

module.exports = App;