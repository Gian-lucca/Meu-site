import SocialNetworks from "./SocialNetworks";

import Avatar from "../img/eu.jpeg";

import '../styles/components/Sidebar.sass';
import InformationContainer from "./InformationContainer";


const Sidebar = () => {
  return (
    <aside id='Sidebar'>
      <img src={Avatar} alt="Gianlucca Augusto" />
      <p className='title'>Desenvolvedor Front End</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href="https://drive.google.com/file/d/1Q2T0TInjVe2BnbUqW62QgLG7P2tGij-4/view?usp=sharing" className='btn'>
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar