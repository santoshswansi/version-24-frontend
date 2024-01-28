import NavbarWrapper from '../../components/navbar/NavbarWrapper'
import './TeamsPage.css'
import Footer from '../../components/footer/Footer';
import Teams from '../../components/teams/Teams';

const TeamsPage = () => {
  return (
    <div id="teams-wrapper">
      <NavbarWrapper overlay={false} focus={"teams"}/>
      <Teams />
      <Footer />
    </div>
  )
}

export default TeamsPage