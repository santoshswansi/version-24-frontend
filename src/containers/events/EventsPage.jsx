import NavbarWrapper from '../../components/navbar/NavbarWrapper'
import EventPage from "../../components/event/EventPage";
import './EventsPage.css'
import Footer from '../../components/footer/Footer';

const EventsPage = () => {
  return (
    <div id="events-wrapper">
      <NavbarWrapper overlay={false} focus={"events"}/>
      <EventPage />
      <Footer />
    </div>
  )
}

export default EventsPage