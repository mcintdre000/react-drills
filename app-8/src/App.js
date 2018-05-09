import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

const baseUrl = 'https://pokeapi.co/api/v2/'
class App extends Component {
  constructor() {
    super();

    this.state= {
      pokemon: []
    }
  }
  
  componentDidMount() {
    console.log('will mount')
    axios.get(`${baseUrl}pokemon/150/`).then(res => {
      console.log(res);
      this.setState({
        pokemon: res.data
      });
    }).catch(err=>console.log(err))
  }
  render() {
    return (
      <div className="App">
       <h1> Pokemon: { this.state.pokemon.name }</h1>
       <h1> Pokedex #: { this.state.pokemon.id }</h1>
       <h1> Height: { this.state.pokemon.height }</h1>
       <h1> Weight: { this.state.pokemon.weight }</h1>
      </div>
    );
  }
}

export default App;
