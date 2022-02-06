import React from 'react';
  // props.video
const EventItem = ({ title, venue, date }) => {

  return (
    <div className="event-item item">
      <div className="content">
        <div className="header">
        {title}
        </div>
        <br />
        <span>{venue}</span>
        <br />
        <span>{date}</span>
      </div>
  
    </div>
);
};

export default EventItem;