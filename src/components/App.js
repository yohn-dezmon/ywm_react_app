import React from 'react';
import ywm_pic from '../images/terrarium.jpg';
import PicAnimation from './PicAnimation.js';
import TextAnimation from './TextAnimation.js';
import './App.css';
import EventList from './EventList.js';

const previousShows = [
  {
    'title': 'Harrison Watters & You Want Milk Album Release Show',
    'venue': 'Talon Bar',
    'date' : '2021-10-15'
  },
  {
    'title': 'Rat Motel, You Want Milk, Stay off the Fence and The Idolizers at Our Wicked Lady',
    'venue' : 'Our Wicked Lady',
    'date': '2022-01-15' // this is mos def wrong 
  },
  {
    'title': 'Open Mic & You Want Milk at Caffeine Underground',
    'venue' : 'Caffeine Underground',
    'date' : '2022-02-05'
  },

]

const previousListTitle = 'Previous Shows';

const upcomingShows = [
  {
    'title': "Lila's Wedding",
    'venue': 'TBD',
    'date' : 'TBD'
  },
]

const upcomingListTitle = 'Upcoming Shows';


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
            <EventList events={upcomingShows} listTitle={upcomingListTitle} />
            <EventList events={previousShows} listTitle={previousListTitle}/>
          </div>
      </div>
    );
  }
}

export default App;