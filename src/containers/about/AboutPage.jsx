import NavbarWrapper from '../../components/navbar/NavbarWrapper'
import About from "../../components/about/About";
import './AboutPage.css'
import Footer from '../../components/footer/Footer';

const AboutPage = () => {
  return (
    <div id="about-wrapper">
      <NavbarWrapper overlay={false} focus={"about"}/>
      <About />
      <Footer />
    </div>
  )
}

export default AboutPage