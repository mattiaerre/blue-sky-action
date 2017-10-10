import React, { Component } from 'react';
import PropTypes from 'prop-types';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: props.articles || []
    };
  }

  componentWillReceiveProps(props) {
    // info: https://stackoverflow.com/questions/32261441/component-does-not-remount-when-route-parameters-change
    fetch(`/api/v1/articles?source=${props.match.params.source}`)
      .then(response => response.json())
      .then(articles => this.setState({ articles }));
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h2>News</h2>
          <ul>
            {this.state.articles.map((article, index) => (
              <li key={index}>{article.title}</li> // eslint-disable-line react/no-array-index-key
            ))}
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
