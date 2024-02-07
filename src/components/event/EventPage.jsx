import EventCard from "./EventCard";
import eventData from "./eventData";

const EventPage = () => {
  return (
    <div className="EventPage">
      <div className="title">
        <h1>EVENTS</h1>
      </div>
      <div className="event-card-container">
        {eventData.map((event) => (
          <EventCard key={event.id} eventProp={event} />
        ))}
      </div>
    </div>
  );
};

export default EventPage;
