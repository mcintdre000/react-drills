import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      food: ['eggs','bacon','toast','nutella']
    }


  }
  render() {
    let displayFood = this.state.food.map((e,index)=>{
      return <h2 key={index}> {e} </h2>
      
    });
    console.log(displayFood)
    return (
      <div className="App">
        {displayFood}
      </div>
    );
  }
}

export default App;
