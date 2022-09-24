import SocialNetworks from "./SocialNetworks";

import Avatar from "../img/eu.jpeg";

import '../styles/components/sidebar.sass';
import InformationContainer from "./InformationContainer";


const Sidebar = () => {
  return (
    <aside id='Sidebar'>
      <img src={Avatar} alt="Gianlucca Augusto" />
      <p className='title'>Desenvolvedor Front End</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href="src\Documentos\Profile.pdf" className='btn'>
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar