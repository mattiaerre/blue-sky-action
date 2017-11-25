import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TiPencil from 'react-icons/lib/ti/pencil';
import Loading from '../../components/Loading/Loading';
import PrimaryCard from '../../components/PrimaryCard/PrimaryCard';

class Blog extends Component {
  state = {
    loading: false,
    post: {
      url: ''
    }
  };

  componentDidMount() {
    const { slug } = this.props.match.params;
    this.getPost(slug);
  }

  getPost = (slug = 'namaste') => {
    this.setState({ loading: true });
    fetch(`/api/v1/blog/${slug}`)
      .then(response => response.json())
      .then(({ post }) => {
        this.setState({ loading: false, post });
      });
  };

  render() {
    const description = this.props.match.params.slug
      ? this.state.post.body
      : this.state.post.summary;
    return [
      <div className="row" key="heading">
        <div className="col-12">
          <h2>
            <TiPencil /> <span className="align-middle">Blog</span>
          </h2>
        </div>
      </div>,
      <Loading key="loading" loading={this.state.loading} />,
      <div className="row pt-0 pb-4" key="post">
        <div className="col-12">
          <PrimaryCard
            article={{
              description,
              publishedAt: this.state.post.published,
              title: this.state.post.title,
              url: this.state.post.url.replace(
                'https://blue-sky-action.herokuapp.com',
                ''
              ),
              urlToImage: this.state.post.featured_image
            }}
            target="_self"
          />
        </div>
      </div>
    ];
  }
}

Blog.propTypes = {
  match: PropTypes.object.isRequired
};

export default Blog;
