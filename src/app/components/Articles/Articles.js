import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: props.articles || [],
      loading: true
    };
  }

  componentDidMount() {
    this.getArticles(this.props.match.params.source);
  }

  componentWillReceiveProps(props) {
    // info: https://stackoverflow.com/questions/32261441/component-does-not-remount-when-route-parameters-change
    this.getArticles(props.match.params.source);
  }

  getArticles = source => {
    this.setState({ loading: true });
    fetch(`/api/v1/articles?source=${source}`)
      .then(response => response.json())
      .then(articles => this.setState({ articles, loading: false }));
  };

  render() {
    return (
      <div className="row">
        <div className="col-12">
          {this.state.loading && <h3>Loading ...</h3>}
          {!this.state.loading && (
            <ul className="list-unstyled">
              {this.state.articles.map((article, index) => {
                if (index === 0) {
                  return (
                    <li key={article.url}>
                      <h3>{article.title}</h3>
                      <p className="lead">{article.description}</p>
                    </li>
                  );
                }
                return (
                  <li key={article.url}>
                    <h4>{article.title}</h4>
                    <p>{article.description}</p>
                  </li>
                );
              })}
            </ul>
          )}
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
