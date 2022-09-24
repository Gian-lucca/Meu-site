import { SiTypescript } from "react-icons/si"   

import{
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiDrupal,
  DiReact,
  DiBootstrap,
} from 'react-icons/di' 

import '../styles/components/technologiescontainer.sass'

const technologies = [
  {id: "drupal", name:"Drupal",icon: <DiDrupal />},
  {id: "html", name:"HTML",icon: <DiHtml5 />},
  {id: "css", name:"CSS",icon: <DiCss3 />},
  {id: "js", name:"JavaScript",icon: <DiJsBadge />},
  {id: "bootstrap", name:"Bootstrap",icon: <DiBootstrap />},
  {id: "react", name:"React",icon: <DiReact />},
  {id: "typescript", name:"TypeScript",icon: <SiTypescript />},
];

const TechnologiesContainer = () => {
  return (
  <section className='technologies-container'>
      <h2>Tecnologias</h2>
    <div className="technologies-grid">
      {technologies.map((tech) => (
        <div className="technology-card" id={tech.id} key={tech.id}>
          {tech.icon}
          <div className="technology-info">
            <h3>{tech.name}</h3>
            
          </div>
        </div>
      ))}
    </div>
  </section>
  );
};

export default TechnologiesContainer;