import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ReferInfo({ id, title, desc1, desc2, element, tag, version, view, use, definition }) {
  return (
    <li>
      <Link
        to={{
          pathname: 'refer-datail',
          state: {
            id,
            title,
            desc1,
            desc2,
            element,
            tag,
            version,
            view,
            use,
            definition,
          },
        }}
      >
        <span className="num">{id}</span>
        <span className="attr">{title}</span>
        <span className="desc">{desc1}</span>
        <span className="Inline">{use}</span>
      </Link>
    </li>
  );
}

export default ReferInfo;

ReferInfo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  desc1: PropTypes.string.isRequired,
  desc2: PropTypes.string.isRequired,
  element: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  use: PropTypes.string.isRequired,
  definition: PropTypes.array.isRequired,
};
