import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      userInput: '',
      food: ['eggs','bacon','toast','nutella'],
      filteredFood: ['eggs','bacon','toast','nutella']
    }
  }

  updateInput(val) {
    let filteredFood = this.state.filteredFood.filter((e) => e.includes(val) === false ? false : true)

    this.setState({
      userInput: val,
      filteredFood: filteredFood
    });
  }

  render() {
    let listOfFoods = this.state.filteredFood.map(( e,i ) => {
      return <h2 key={ i }> { e } </h2>
    });
    return (
      <div className="App">
        <input className="inputBox" onChange={event => this.updateInput(event.target.value)}></input>
        { listOfFoods }
      </div>
    );
  }
}

export default App;
