import Footer from "../../components/footer/Footer";
import NavbarWrapper from "../../components/navbar/NavbarWrapper";
import NotFound from "../../components/notFound/NotFound";
import "./NotFoundPage.css"

const NotFoundPage = () => {
  return (
    <div id="not-found-wrapper">
      <NavbarWrapper overlay={false} />
      <NotFound />
      <Footer />
    </div>
  );
}

export default NotFoundPage