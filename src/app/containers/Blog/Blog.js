import React, { Component } from 'react';
import TiPencil from 'react-icons/lib/ti/pencil';
import Loading from '../../components/Loading/Loading';
import PrimaryCard from '../../components/PrimaryCard/PrimaryCard';

class Blog extends Component {
  state = {
    loading: false,
    post: {}
  };

  componentDidMount() {
    this.getPost();
  }

  getPost = () => {
    this.setState({ loading: true });
    fetch('/api/v1/blog/namaste')
      .then(response => response.json())
      .then(({ post }) => {
        this.setState({ loading: false, post });
      });
  };

  render() {
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
              description: this.state.post.body,
              publishedAt: this.state.post.published,
              title: this.state.post.title,
              urlToImage: this.state.post.featured_image
            }}
          />
        </div>
      </div>
    ];
  }
}

export default Blog;
