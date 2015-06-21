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

  render: function () {
    const posts = this.state.posts.map(post => {
      return (<li>{post.get('title')}</li>);
    });
    return (
      <div>
        <ul>{posts}</ul>
      </div>
    );
  }
});

module.exports = Posts;
