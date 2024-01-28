import NavbarWrapper from '../../components/navbar/NavbarWrapper'
import Login from "../../components/login/Login";
import './LoginPage.css'
import Footer from '../../components/footer/Footer';

const LoginPage = () => {
  return (
    <div id="login-wrapper">
      <NavbarWrapper overlay={false} focus={"login"}/>
      <Login />
      <Footer />
    </div>
  )
}

export default LoginPage