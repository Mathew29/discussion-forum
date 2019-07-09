import React from 'react';
import Discussion from './Discussion';
import PropTypes from 'prop-types';
// import PickedDiscussion from './PickedDicussion';

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
      {/* {props.discussionList.map((picked) =>
        <PickedDiscussion userName={picked.userName}
          title={picked.title}
          description={picked.description}
          key={picked.id}/>
      )} */}
    </div>
  );
}

DiscussionList.propTypes = {
  discussionList: PropTypes.array
};