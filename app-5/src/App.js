import React, { Component } from 'react';
import Image from './Img';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image image={ "http://www.comedyparadise.com/uploads/video_images/Funny_pics_6_Admin1.jpg" }/>
      </div>
    );
  }
}

export default App;
