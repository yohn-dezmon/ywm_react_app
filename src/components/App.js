import React from 'react';
import ywm_pic from '../images/terrarium.jpg';
import PicAnimation from './PicAnimation.js';
import TextAnimation from './TextAnimation.js';
import './App.css';


// convert this to a functional component later...
class App extends React.Component {
  
  render() {
    return (
      // you can access this className from ./App.css
      <div className="grid-container">
            <TextAnimation />
          <div className="main">
            <PicAnimation />
          </div>
      </div>
    );
  }
}

export default App;