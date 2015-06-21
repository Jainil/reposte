var React = require('react/addons');

var About = React.createClass({
  render: function () {
    return (
      <div>
        <p>Welcome{this.props.user ? ', ' + this.props.user.username + ',' : ''} to a community for sharing news,
          opinions and of course, snarky ripostes for all the trolls!</p>

        <p>Login/Register to submit posts and comments!</p>
      </div>
    )
  }
});

module.exports = About;
