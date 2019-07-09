import React from 'react';
import PropTypes from 'prop-types';

export default function PickedDiscussion(props) {
  return(
    <div>
      <div>
        <h1>{props.userName}</h1>
        <h5>{props.title}</h5>
        <p>{props.description}</p>
        <hr/>
      </div>
    </div>
  );
}

PickedDiscussion.propTypes = {
  userName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};