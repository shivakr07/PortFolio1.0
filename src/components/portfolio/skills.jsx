import React from 'react';
import './skills.css';
import img1 from '../../assets/html.png'
import img2 from '../../assets/js.png'
import img8 from '../../assets/docker.png'
import img3 from '../../assets/atom.png'
import img4 from '../../assets/cloud-data.png'
import img5 from '../../assets/python.png'
import img6 from '../../assets/letter-c.png'
import img7 from '../../assets/c++.png'

const SkillsSection = () => {
  const technologies = [
    {
      name: 'React',
      image: img1,
      expertise: 'Expert',
      level: 3,
    },
    {
      name: 'JavaScript',
      image: img2,
      expertise: 'Expert',
      level: 3,
    },
    {
      name: 'CSS',
      image: img3,
      expertise: 'Intermediate',
      level: 2,
    },
    {
      name: 'HTML',
      image: img8,
      expertise: 'Expert',
      level: 3,
    },
    {
      name: 'Python',
      image: img4,
      expertise: 'Intermediate',
      level: 2,
    },
    {
      name: 'Node.js',
      image: img5,
      expertise: 'Expert',
      level: 3,
    },
    {
      name: 'docker',
      image: img6,
      expertise: 'beginner',
      level: 1,
    },
    {
      name: 'mysql',
      image: img7,
      expertise: 'Expert',
      level: 3,
    },
  ];

  const getExpertiseClass = (expertise) => {
    switch (expertise) {
      case 'beginner':
        return 'beginner';
      case 'Intermediate':
        return 'intermediate';
      case 'Expert':
        return 'expert';
      default:
        return '';
    }
  };

  return (
    <div className='skill'>
      <div className="skills-section">
        <h2>Skills</h2>
        <div className="technologies">
          {technologies.map((tech) => (
            <div key={tech.name} className="technology">
              <img src={tech.image} alt={tech.name} />
              <h3>{tech.name}</h3>
              <div className={`expertise ${getExpertiseClass(tech.expertise)}`}>
                {/* {tech.expertise} */}
                {/* {tech.expertise === 'Intermediate' && (
                  <div className="level">
                    <div className="progress" style={{ width: `${(tech.level / 3) * 100}%` }} />
                  </div>
                )} */}

              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='description'>
        <h2>descriptio</h2>
  
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, maxime assumenda voluptas tenetur in rem, esse nisi vero, asperiores non inventore doloremque aliquid dolores?
        </p>
      </div>
    </div>
  );
};

export default SkillsSection;
