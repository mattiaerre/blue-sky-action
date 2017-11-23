import React from 'react';
import TiPencil from 'react-icons/lib/ti/pencil';

const Blog = () => (
  <div>
    <div className="row">
      <div className="col-12">
        <h2>
          <TiPencil /> <span className="align-middle">Blog</span>
        </h2>
      </div>
    </div>
    <div className="row pt-3">
      <div className="col-12">
        <strong>Launching Soon ...</strong>
      </div>
    </div>
    <div className="row pb-5">
      <div className="col-12">
        <div className="progress">
          <div
            className={`progress-bar progress-bar-striped progress-bar-animated bg-danger w-${25}`}
            role="progressbar"
            aria-valuenow={25}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            25%
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Blog;
