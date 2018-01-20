import React, { Component } from 'react';
import client from '../client';

const query = q => `
query Sources {
  sources(q: "${q}") {
    description
    id
    name
  }
}
`;

const initialState = {
  loading: false,
  id: '',
  items: [],
  q: ''
};

class Everything extends Component {
  state = initialState;

  fetchSources = q => {
    this.setState({ loading: true }, () => {
      if (q) {
        client.query(query(q)).then(data => {
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
    const { loading, id, items, q } = this.state; // eslint-disable-line no-unused-vars

    return (
      <div className="Everything row">
        <div className="col-12">
          <input
            className="form-control"
            onChange={e => {
              const { value } = e.target;
              this.setState({ q: value }, () => {
                this.fetchSources(value);
              });
            }}
            type="text"
            value={this.state.q}
          />
          <ul>
            {items.map(item => (
              <li
                aria-selected="false"
                key={item.id}
                onClick={() => {
                  this.setState(
                    Object.assign({}, initialState, {
                      id: item.id,
                      q: item.name
                    })
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
      </div>
    );
  }
}

export default Everything;
