import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sources from '../Sources/Sources';

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
      <div>
        <Sources
          category={this.props.match.params.category}
          sources={this.props.sources}
        />
        <div className="row">
          <div className="col-12">
            {this.state.loading && <h3>Loading ...</h3>}
            {!this.state.loading && (
              <ul className="list-unstyled">
                {this.state.articles.map((article, index) => {
                  if (index === 0) {
                    return (
                      <li key={article.url}>
                        <div className="card">
                          <img
                            src={article.urlToImage}
                            className="card-img-top"
                            alt=""
                          />
                          <div className="card-body">
                            <h3 className="card-title">
                              <a
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {article.title}
                              </a>
                            </h3>
                            <p className="card-text">{article.description}</p>
                          </div>
                        </div>
                      </li>
                    );
                  }
                  return (
                    <li key={article.url} className="mt-2">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">
                            <a
                              href={article.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {article.title}
                            </a>
                          </h4>
                          <p className="card-text">{article.description}</p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  }
}

Articles.propTypes = {
  articles: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  sources: PropTypes.array.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Articles;
