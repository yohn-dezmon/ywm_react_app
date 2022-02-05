import React, { useState, useEffect } from 'react';

/* 
two sections, 
(1) previous events 
(2) upcoming events

interactivity? let's have links to the venues or festivals
*/


// how do I write a functional component?

const previousEvents = [
  {
    'event title': 'Harrison Watters & You Want Milk Album Release Show',
    'venue': 'Talon Bar',
    'date' : '2021-10-15'
  },
  {
    'event title': 'Rat Motel, You Want Milk, Stay off the Fence and The Idolizers at Our Wicked Lady',
    'venue' : 'Our Wicked Lady',
    'date': '2022-01-15' // this is mos def wrong 
  },
  {
    'event title': 'Open Mic & You Want Milk at Caffeine Underground'
    'venue' : 'Caffeine Underground'
    'date' : '2022-02-05'
  },

]

const upcomingEvents = [
  {
    'event title': "Lila's Wedding",
    'venue': 'TBD',
    'date' : 'TBD'
  },
]

const Event = () => {
  
  return ( 
    <div>
      <title>
      </title>
    </div>
  );
  
};

export default Event;