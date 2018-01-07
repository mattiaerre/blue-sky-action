import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Loading from '../../components/Loading/Loading';
import PrimaryCard from '../../components/PrimaryCard/PrimaryCard';
import Sources from '../../components/Sources/Sources';
import client from '../client';

const query = source => `
query TopHeadlines {
  topHeadlines(source: "${source}") {
    description
    publishedAt
    title
    url
    urlToImage
  }
}
`;

class Articles extends Component {
  constructor(props) {
    super(props);
    this.getArticles(this.props.match.params.source);
  }

  state = {
    articles: this.props.articles || [],
    loading: true
  };

  componentWillReceiveProps(props) {
    // info: https://stackoverflow.com/questions/32261441/component-does-not-remount-when-route-parameters-change
    this.setState({ loading: true });
    this.getArticles(props.match.params.source);
  }

  getArticles = source => {
    client.query(query(source)).then(data => {
      this.setState({ loading: false, articles: data.topHeadlines });
    });
  };

  render() {
    return [
      <Sources
        key="sources"
        category={this.props.match.params.category}
        sources={this.props.sources}
      />,
      <Loading key="loading" loading={this.state.loading} />,
      <div key="articles" className="row">
        <div className="col-12">
          {!this.state.loading && (
            <ul className="list-unstyled">
              {this.state.articles.map((article, index) => {
                if (index === 0) {
                  return (
                    <li key={article.url}>
                      <PrimaryCard article={article} />
                    </li>
                  );
                }
                return (
                  <li key={article.url} className="mt-2">
                    <div className="card">
                      {article.publishedAt && (
                        <div className="card-header">
                          {moment(article.publishedAt).fromNow()}
                        </div>
                      )}
                      <div className="card-body">
                        <h4 className="card-title">
                          <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            dangerouslySetInnerHTML={{ __html: article.title }}
                          />
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
    ];
  }
}

Articles.propTypes = {
  articles: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  sources: PropTypes.array.isRequired
};

export default Articles;
