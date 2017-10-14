import React from 'react';
import { links } from './data.json';

const Home = () => (
  <div className="row">
    <div className="col-12">
      <h2>Home</h2>
      <ul>
        {Object.keys(links).map(key => (
          <li key={key}>
            <a href={links[key].url} target="_blank" rel="noopener noreferrer">
              {links[key].label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Home;
