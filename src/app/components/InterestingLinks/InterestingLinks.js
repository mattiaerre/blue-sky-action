import React from 'react';
import links from '../../../data/links.json';

const InterestingLinks = () => (
  <div>
    <div className="row">
      <div className="col-12">
        <h3>Interesting links</h3>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <ul className="list-unstyled">
          {Object.keys(links).map(key => (
            <li key={key}>
              <a
                href={links[key].url}
                rel="noopener noreferrer"
                target="_blank"
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
