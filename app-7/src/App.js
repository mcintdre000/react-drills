import React, { Component } from 'react';
import NewTask from './NewTask';
import List from './List';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      toDoList: []
    }
    this.updateList = this.updateList.bind(this);
  }

  updateList(task) {
    this.setState({
      toDoList: [...this.state.toDoList,task]
    });
  }
  render() {
    return (
      <div className="App">
        <h1>  My to-do list </h1>
        <NewTask add={this.updateList}/>
        <List task={this.state.toDoList}/>
      </div>
    );
  }
}

export default App;
