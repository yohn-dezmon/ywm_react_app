import React, { useState, useEffect } from 'react';
import EventItem from './components/EventItem';

/* 
two sections, 
(1) previous events 
(2) upcoming events

interactivity? let's have links to the venues or festivals
*/


// how do I write a functional component?

const previousEvents = [
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
    'title': 'Open Mic & You Want Milk at Caffeine Underground'
    'venue' : 'Caffeine Underground'
    'date' : '2022-02-05'
  },

]

const upcomingEvents = [
  {
    'title': "Lila's Wedding",
    'venue': 'TBD',
    'date' : 'TBD'
  },
]

const EventList = ({ events }) => {
  
  const renderedList = events.map((event) => {
    return <EventItem eventTitle={event.title} venue={event.venue} date={event.date}>
  });
  
  return ( 
    <div>
      <title>
      </title>
    </div>
  );
  
};

export default EventList;

import React from 'react';
import VideoItem from './VideoItem';

// instead of props.videos...
const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem video={video} />;
  });
  //props.videos
  return (
    <div className="ui relaxed divided list">
    {renderedList}
    </div>
  );
};

export default VideoList;