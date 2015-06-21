var React = require('react/addons'),
  flux = require('../flux'),
  PostModule = require('../modules/posts/index'),
  Link = require('react-router').Link;

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
    const posts = this.state.posts.sortBy(post => post.get('created_at')).reverse().map(post => {
      var author = post.get('user') ? '[' + post.get('user').get('username') + ']: ' : '';
      return (<li><Link to={`/post/${post.get('_id')}`}>{author}{post.get('title')}</Link></li>);
    });
    return (
      <div>
        <ul>{posts}</ul>
      </div>
    );
  }
});

module.exports = Posts;
