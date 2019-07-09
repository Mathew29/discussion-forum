import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Discussion(props) {
  return(
    <div>
      <div>
        <Link to='/pickeddiscussion/{props.id}'><h5>{props.title}</h5></Link>
        {/* <Link to="/{id}"></Link> */}
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