// import React from 'react';
// import PropTypes from 'prop-types';
// import NewDiscussionForm from './NewDiscussionForm';


// export default class DiscussionControl extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       redirectToHome: false
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit() {
//     this.setState({ redirectToHome: true });
//   }

//   render() {
//     const redirectToHome = this.state.redirectToHome;
//     console.log(this.props);
//     if (redirectToHome) {
//       this.props.history.push('/')
      
      
//     }

//     return(
//        <div onSubmit={this.handleSubmit}>
//             <NewDiscussionForm onNewDiscussionCreation={this.props.onNewDiscussionCreation}/>
//        </div>  
//     );
//   }
// }

// DiscussionControl.propTypes = {
//   onNewDiscussionCreation: PropTypes.func
// };