import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../../components/Loading/Loading';
import PrimaryCard from '../../components/PrimaryCard/PrimaryCard';
import SecondaryCard from '../../components/SecondaryCard/SecondaryCard';
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
    this.getArticles(props.match.params.source);
  }

  state = {
    articles: [],
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
    const { match, sources } = this.props;
    const { articles, loading } = this.state;

    return [
      <Sources
        key="sources"
        category={match.params.category}
        sources={sources}
      />,
      <Loading key="loading" loading={loading} />,
      <div key="articles" className="row">
        <div className="col-12">
          {!loading && (
            <ul className="list-unstyled">
              {articles.map((article, index) => {
                if (index === 0) {
                  return (
                    <li key={article.url}>
                      <PrimaryCard article={article} />
                    </li>
                  );
                }
                return (
                  <li key={article.url} className="mt-2">
                    <SecondaryCard article={article} />
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
  match: PropTypes.object.isRequired,
  sources: PropTypes.array.isRequired
};

export default Articles;
