import React, { Component } from 'react';
import Todo from './Todo';


class App extends Component {
  constructor(){
    super();

    this.state = {
      userInput: '',
      toDoList: []
    }
    this.updateList = this.updateList.bind(this);
  }

  updateUserInput(val) {
    this.setState({
      userInput: val
    });
  }

  updateList() {
    this.setState({
      toDoList: [...this.state.toDoList,this.state.userInput],
      userInput: ''
    });
  }
  render() {
    let toDoList = this.state.toDoList.map((e,i)=>{
      return <Todo key={i} task={e}/>
    })
    return (
      <div className="App">
       <h1>My to-do list:</h1>
       <div>
         <input value={this.state.userInput} placeholder="Enter new task" className="inputBox" onChange={event => this.updateUserInput(event.target.value)}></input>
         <button className = "confirmationButton" onClick={this.updateList}> Add </button>
       </div>
       <br />
       { toDoList }
      </div>
    );
  }
}

export default App;
