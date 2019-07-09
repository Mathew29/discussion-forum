import React from 'react';
import PropTypes from 'prop-types';
import PickedDiscussion from './PickedDicussion';

export default function PickedDiscussionList(props) {
    console.log(props.pickedList);
    
  return (
    <div>
      <hr/>
        {props.pickedList.map((picked) =>
        <PickedDiscussion userName={picked.userName}
          title={picked.title}
          description={picked.description}
          key={picked.id}/>
      )}
    </div>
  );
}

PickedDiscussionList.propTypes = {
  discussionList: PropTypes.array
};