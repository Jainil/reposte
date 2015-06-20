var React = require('react/addons'),
  flux = require('../flux'),
  PostModule = require('../modules/posts/index');

var Posts = React.createClass({
  mixins: [flux.ReactMixin],


  getDataBindings() {
    return {
      posts: PostModule.getters.postList,
    }
  },

  componentWillMount() {
    PostModule.actions.fetchAll();
  },

  _clickPostPost: function () {
    PostModule.actions.save({
      title: 'this is a good time ' + Math.random()
    })
  },

  render: function () {
    const posts = this.state.posts.map(post => {
      return (<ul>{post.get('title')}</ul>);
    });
    return (
      <div>
        <ul>{posts}</ul>
        <button onClick={this._clickPostPost}>Send mock POST post :P</button>
      </div>
    );
  }
});

module.exports = Posts;
