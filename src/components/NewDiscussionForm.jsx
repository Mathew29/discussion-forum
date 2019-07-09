import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { withRouter } from 'react-router-dom';

function NewDiscussionForm(props) {
  let _userName;
  let _title;
  let _description;

  function handleNewDiscussionFormSubmission(event) {
    event.preventDefault();
    console.log(props);
    
    props.onNewDiscussionCreation({userName: _userName.value, title: _title.value, description: _description.value, id: v4()});
    props.history.push('/')
  }

  

  return(
    <div>
      <form onSubmit={handleNewDiscussionFormSubmission}>
        <input type="text" id='userName' placeholder='User Name' ref={(input) => {_userName = input;}} required/>
        <input type="text" id='title' placeholder='Title' ref={(input) => {_title = input;}} required/>
        <textarea id='description' placeholder='Description' ref={(textarea) => {_description = textarea;}} required/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

NewDiscussionForm.propTypes = {
  onNewDiscussionCreation: PropTypes.func,
  history: PropTypes.object
};

export default withRouter(NewDiscussionForm);