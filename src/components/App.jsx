import React from 'react';
import Header from './Header';
import DiscussionList from './DiscussionList';
import NewDiscussionForm from './NewDiscussionForm';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import PickedDiscussionList from './PickedDiscussionList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterDiscussionList: []
    };
    this.handleAddingNewDiscussionToList = this.handleAddingNewDiscussionToList.bind(this);
  }

  handleAddingNewDiscussionToList(newDiscussion) {
    let newMasterDiscussionList = this.state.masterDiscussionList.slice();
    newMasterDiscussionList.push(newDiscussion);
    this.setState({masterDiscussionList: newMasterDiscussionList});
  }

  render() {
    //   console.log(masterDiscussionList);
      
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <DiscussionList discussionList={this.state.masterDiscussionList} />} />
          <Route path='/newdiscussion' render={() => <NewDiscussionForm onNewDiscussionCreation={this.handleAddingNewDiscussionToList}/>} />
          <Route path="/pickeddiscussion/:id" render={() => <PickedDiscussionList pickedList={this.state.masterDiscussionList} /> } />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;