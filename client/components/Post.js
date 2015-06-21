var React = require('react/addons'),
  Router = require('react-router'),
  Flux = require('../flux'),
  PostsModule = require('../modules/posts'),
  SessionModule = require('../modules/session');

var Post = React.createClass({
  mixins: [Router.State, Flux.ReactMixin],

  getDataBindings() {
    var id = this.getParams().postId;
    return {
      post: PostsModule.getters.byId(id),
      comments: PostsModule.getters.postComments(id),
      user: SessionModule.getters.currentUser
    };
  },

  componentWillMount() {
    PostsModule.actions.getCommentsForPost(this.getParams().postId);
  },

  _submitComment() {
    PostsModule.actions.addCommentToPost(this.getParams().postId, {
      text: this.refs['commentInput'].getDOMNode().value,
      user: this.state.user
    });
  },

  render() {
    var comments = this.state.comments.map(function (comment) {
      return (
        <li>
          <div>[{comment.get('user').get('username')}]: {comment.get('text')}</div>
        </li>
      )
    });

    console.log(this.state.comments);

    return (
      <div>
        <div className="post-card">
          <h1>{this.state.post.get('title')}</h1>
          <p>{this.state.post.get('author')}</p>
          <p>{this.state.post.get('url')}</p>
          <p>{this.state.post.get('text')}</p>
        </div>

        {this.renderCommentAddForm()}

        <ul>{comments}</ul>

      </div>
    )
  },

  renderCommentAddForm() {
    if (!this.state.user) return;

    return (
      <div>
        <div className="row">
          <div className="twelve columns">
            <label for="textInput">Comment</label>
            <textarea className="u-full-width" id="textInput" ref="commentInput"/>
          </div>
        </div>
        <div className="row">
          <div className="six columns">
            <button className="u-full-width" onClick={this._submitComment}>Submit</button>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Post;


