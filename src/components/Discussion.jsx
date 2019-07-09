import React from 'react';
import PropTypes from 'prop-types';

export default function Discussion(props) {
  return(
    <div>
      <div>
        <h3>{props.userName}</h3>
        <h5>{props.title}</h5>
        <p>{props.description}</p>
        <hr/>
      </div>
    </div>
  );
}

Discussion.propTypes = {
  userName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};