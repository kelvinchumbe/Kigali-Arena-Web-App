import React from "react";
import EventCard from "./EventCard";

const RenderEvents = (props) => {
  if (!props.events.isFetching) {
    console.log("RENDER EVENTS");

    return (
      <div className="events-list">
        {props.events.events.slice(0, props.no_of_events).map((event) => {
          return <EventCard event={event} key={event.id} />;
        })}
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default RenderEvents;
