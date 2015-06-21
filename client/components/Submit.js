var React = require('react/addons'),
  Flux = require('../flux'),
  SubmitModule = require('../modules/submit-post'),
  PostModule = require('../modules/posts');

var Submit = React.createClass({
  mixins: [Flux.ReactMixin],

  getDataBindings: function () {

  },

  _submitPost: function () {
    PostModule.actions.save({
      title: this.refs['titleInput'].getDOMNode().value,
      url: this.refs['urlInput'].getDOMNode().value,
      text: this.refs['textInput'].getDOMNode().value,
    })
  },

  render: function () {
    return (
      <div>
        <div className="row">
          <div className="twelve columns">
            <label for="titleInput">Title</label>
            <input className="u-full-width" type="text" id="titleInput" ref="titleInput"/>
          </div>
        </div>
        <div className="row">
          <div className="twelve columns">
            <label for="urlInput">Url</label>
            <input className="u-full-width" type="text" id="urlInput" ref="urlInput"/>
          </div>
        </div>
        <div className="row">
          <div className="twelve columns">
            <label for="textInput">Text</label>
            <textarea className="u-full-width" id="textInput" ref="textInput"/>
          </div>
        </div>
        <div className="row">
          <div className="six columns">
            <button className="u-full-width" onClick={this._submitPost}>Submit</button>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Submit;
