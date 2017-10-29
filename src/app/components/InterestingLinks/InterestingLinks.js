import React from 'react';
import { links } from './data.json';

const InterestingLinks = () => (
  <div>
    <div className="row">
      <div className="col-12">
        <h2>Interesting links</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <ul className="list-unstyled">
          {Object.keys(links).map(key => (
            <li key={key}>
              <a
                href={links[key].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {links[key].label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default InterestingLinks;
