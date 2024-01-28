import NavbarWrapper from '../../components/navbar/NavbarWrapper'
import './ForgotPasswordPage.css'
import ForgotPassword from '../../components/forgotPassword/ForgotPassword';
import Footer from '../../components/footer/Footer';

const ForgotPasswordPage = () => {
  return (
    <div id="forgot-password-wrapper">
      <NavbarWrapper overlay={false} />
      <ForgotPassword />
      <Footer />
    </div>
  )
}

export default ForgotPasswordPage;