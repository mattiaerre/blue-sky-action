import React, { Component } from 'react';
import TiNews from 'react-icons/lib/ti/news';
import SecondaryCard from '../../components/SecondaryCard/SecondaryCard';
import client from '../client';

const querySources = q => `
query Sources {
  sources(q: "${q}") {
    description
    id
    name
  }
}
`;

const queryTopHeadlines = source => `
query TopHeadlines {
  topHeadlines(source: "${source}") {
    author
    description
    publishedAt
    source {
      id
    }
    title
    url
    urlToImage
  }
}
`;

const initialState = {
  articles: [],
  id: '',
  items: [],
  loading: false,
  q: ''
};

class Everything extends Component {
  state = initialState;

  fetchArticles = id => {
    client.query(queryTopHeadlines(id)).then(data => {
      this.setState({ articles: data.topHeadlines });
    });
  };

  fetchSources = q => {
    this.setState({ loading: true }, () => {
      if (q) {
        client.query(querySources(q)).then(data => {
          this.setState(
            Object.assign({}, initialState, { items: data.sources, q })
          );
        });
      } else {
        this.setState(initialState);
      }
    });
  };

  render() {
    const { articles, id, items, loading, q } = this.state; // eslint-disable-line no-unused-vars

    return [
      <div className="row" key="heading">
        <div className="col-12">
          <h2>
            <TiNews /> <span className="align-middle">Top Headlines</span>
          </h2>
        </div>
      </div>,
      <div className="Everything__autocomplete row" key="autocomplete">
        <div className="col-12 mb-2">
          <input
            className="form-control"
            onChange={e => {
              const { value } = e.target;
              this.setState({ q: value }, () => {
                this.fetchSources(this.state.q);
              });
            }}
            type="text"
            value={q}
          />
          <ul className="list-unstyled">
            {items.map(item => (
              <li
                aria-selected="false"
                key={item.id}
                onClick={() => {
                  this.setState(
                    Object.assign({}, initialState, {
                      id: item.id,
                      q: item.name
                    }),
                    () => {
                      this.fetchArticles(this.state.id);
                    }
                  );
                }}
                onKeyUp={() => {}}
                role="option"
                tabIndex="0"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>,
      <div className="Everything__articles row" key="articles">
        {articles.length > 0 && (
          <div className="col-12">
            <ul className="list-unstyled">
              {articles.map(article => (
                <li key={article.url} className="mt-2">
                  <SecondaryCard article={article} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    ];
  }
}

export default Everything;
