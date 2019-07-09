import React from 'react';
import Header from './Header';
import DiscussionList from './DiscussionList';
import NewDiscussionForm from './NewDiscussionForm';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

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
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <DiscussionList discussionList={this.state.masterDiscussionList} />} />
          <Route path='/newdiscussion' render={() => <NewDiscussionForm onNewDiscussionCreation={this.handleAddingNewDiscussionToList}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;