import Footer from '../../components/footer/Footer';
import NavbarWrapper from '../../components/navbar/NavbarWrapper'
import Register from "../../components/register/Register";
import './RegisterPage.css'

const RegisterPage = () => {
  return (
    <div id="register-wrapper">
      <NavbarWrapper overlay={false}/>
      <Register />
      <Footer />
    </div>
  )
}

export default RegisterPage