import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialnetworks = [
    { name: "linkedin", icon: <FaLinkedinIn/>},
];

const socialnetworks2 = [
  { name: "github", icon: <FaGithub/>},
];

const socialnetworks3 = [
  { name: "instagram", icon: <FaInstagram/>},
];
const SocialNetworks = () => {
  return (
    <section id='social-networks'>
        {socialnetworks.map((network) => (
        <a href='https://www.linkedin.com/in/gianlucca-augusto-745485237'  className='social-btn' id={network.name} key={network.name}>
            {network.icon}
        </a>
      ))}

        {socialnetworks2.map((network) => (
        <a href='https://github.com/Gian-lucca'  className='social-btn' id={network.name} key={network.name}>
            {network.icon}
        </a>
      ))}

      {socialnetworks3.map((network) => (
        <a href='https://www.instagram.com/gianlucaaugusto/'  className='social-btn' id={network.name} key={network.name}>
            {network.icon}
        </a>
      ))}


    </section>
  )
}

export default SocialNetworks