import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: props.articles || []
    };
  }

  componentDidMount() {
    this.getArticles(this.props.match.params.source);
  }

  componentWillReceiveProps(props) {
    this.getArticles(props.match.params.source);
  }

  getArticles = source => {
    // info: https://stackoverflow.com/questions/32261441/component-does-not-remount-when-route-parameters-change
    fetch(`/api/v1/articles?source=${source}`)
      .then(response => response.json())
      .then(articles => this.setState({ articles }));
  };

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h2>Articles</h2>
          <ul className="list-unstyled">
            {this.state.articles.map(article => (
              <li key={article.url}>
                <h4>{article.title}</h4>
                <p>{article.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

Articles.propTypes = {
  articles: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  match: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Articles;
