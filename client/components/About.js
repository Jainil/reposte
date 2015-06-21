var React = require('react/addons');

var About = React.createClass({
  render: function () {
    return (
      <p>Welcome{this.props.user ? ', ' + this.props.user.username + ',': ''} to a community for sharing news, opinions and of course, ripostes for all the trolls!</p>
    )
  }
});

module.exports = About;
