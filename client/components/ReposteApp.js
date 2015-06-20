var React = require('react/addons');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var Posts = require('./Posts');
var Users = require('./Users');
var Submit = require('./Submit');

var App = React.createClass({
  render: function () {
    return (
      <div className="app-container">
        <header>
          <a className="logo" href="/"></a>
          <Link to="posts" className="header-item">Posts</Link>
          <Link to="users" className="header-item">Users</Link>
          <Link to="submit" className="header-item">Submit</Link>
        </header>
        <RouteHandler/>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="posts" handler={Posts}/>
    <Route name="submit" handler={Submit}/>
    <Route name="users" handler={Users}/>
    <DefaultRoute handler={Posts}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});

module.exports = App;