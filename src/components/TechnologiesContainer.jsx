import{
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiDrupal,
  DiReact,
  DiBootstrap
} from 'react-icons/di' 

import '../styles/components/technologiescontainer.sass'

const technologies = [
  {id: "drupal", name:"Drupal",icon: <DiDrupal />},
  {id: "html", name:"HTML",icon: <DiHtml5 />},
  {id: "js", name:"JavaScript",icon: <DiJsBadge />},
  {id: "css", name:"CSS",icon: <DiCss3 />},
  {id: "react", name:"React",icon: <DiReact />},
  {id: "bootstrap", name:"Bootstrap",icon: <DiBootstrap />},
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