import React, { Component } from 'react';
import PropTypes from 'prop-types';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: props.articles || []
    };
  }

  componentDidMount() {
    fetch(`/api/v1/articles?source=${this.props.match.path.split('/news/')[1]}`)
      .then(response => response.json())
      .then(articles => this.setState({ articles }));
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h2>News</h2>
          <ul>
            {this.state.articles.map(article => <li>{article.title}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

News.propTypes = {
  articles: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  match: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default News;
