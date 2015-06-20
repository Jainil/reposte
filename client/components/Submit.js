var React = require('react/addons');
const Flux = require('../../flux')

var Submit = React.createClass({
  mixins: [Flux.ReactMixin],

  getDataBindings: function () {

  },

  render: function () {
    return (
      <div>This is submit</div>
    )
  }
});

module.exports = Submit;
