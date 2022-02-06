import React, { useState, useEffect } from 'react';
import EventItem from './EventItem';

/* 
two sections, 
(1) previous events 
(2) upcoming events

interactivity? let's have links to the venues or festivals
*/


// how do I write a functional component?



const EventList = ({ events, listTitle }) => {
  
  const renderedList = events.map((event) => {
    // these parameters are 'props'
    return <EventItem title={event.title} venue={event.venue} date={event.date} />;
  });
  
  return (
    <div className="ui relaxed divided list">
    <h3>{listTitle}</h3>
    {renderedList}
    </div>
  );  
};

export default EventList;