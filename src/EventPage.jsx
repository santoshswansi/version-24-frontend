import EventCard from "./components/EventCard";

const EventPage = () => {
  return (
    <div className="EventPage">
      <div className="title">
        <h1>EVENTS</h1>
      </div>
      <div className="event-card-container">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

export default EventPage;
