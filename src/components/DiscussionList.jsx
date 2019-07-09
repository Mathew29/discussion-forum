import React from 'react';
import Discussion from './Discussion';
import PropTypes from 'prop-types';

export default function DiscussionList(props) {
    console.log(props.discussionList);
    
  return (
    <div>
      <hr/>
      {props.discussionList.map((discussion) =>
        <Discussion userName={discussion.userName}
          title={discussion.title}
          description={discussion.description}
          key={discussion.id}/>
      )}
    </div>
  );
}

DiscussionList.propTypes = {
  discussionList: PropTypes.array
};