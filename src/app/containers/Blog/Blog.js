import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TiPencil } from 'react-icons/ti';
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
    const {
      match: {
        params: { slug }
      }
    } = this.props;
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
    const {
      match: {
        params: { slug }
      }
    } = this.props;

    const {
      loading,
      post: { body, featured_image, published, summary, title, url } // eslint-disable-line camelcase, max-len
    } = this.state;

    const description = slug ? body : summary;
    return [
      <div className="row" key="heading">
        <div className="col-12">
          <h2>
            <TiPencil className="align-middle" />{' '}
            <span className="align-middle">Blog</span>
          </h2>
        </div>
      </div>,
      <Loading key="loading" loading={loading} />,
      <div className="row pt-0 pb-4" key="post">
        <div className="col-12">
          <PrimaryCard
            article={{
              description,
              publishedAt: published,
              title,
              url: url.replace('https://blue-sky-action.herokuapp.com', ''),
              urlToImage: featured_image
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
