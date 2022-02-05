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
            <div className="bandcamp-div">
              <iframe className="bandcamp-plugin" src="https://bandcamp.com/EmbeddedPlayer/album=3258859475/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless>
              <a href="https://youwantmilk.bandcamp.com/album/pretty-colors-to-paint-a-waterfall">Pretty Colors to Paint a Waterfall by You Want Milk</a>
              </iframe>
            </div>
          </div>
      </div>
    );
  }
}

export default App;