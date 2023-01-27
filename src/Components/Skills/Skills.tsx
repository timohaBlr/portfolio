import React from 'react';
import s from './Skills.module.css'
import Skill from "./Skill/Skill";

const Skills = () => {
    const skills = [
        {id: 1, title: 'JavaScript', description: 'TypeScript'},
        {id: 2, title: 'React', description: 'And Redux'},
        {id: 3, title: 'HTML', description: 'CSS Flex/Grid'},
        {id: 4, title: 'Axios', description: 'Rest API'},
        {id: 5, title: 'Material UI', description: 'Some styles'},
        {id: 6, title: 'React-Router', description: 'For navigation and pagination'},
        {id: 7, title: 'Git/GitHub', description: 'For version control'},
    ]
    const mappedSkills = skills.map(skill=> {
        return ( <div className={s.item} key={skill.id}>
            <Skill title={skill.title} description={skill.description}/>
        </div> )
    })
    return (
        <div className={s.skillsBlock}>
                <div className={s.header}>
                    <h2> My skills</h2>
                </div>
                <div className={s.items}>
                    {mappedSkills}
                </div>


        </div>
    );
};

export default Skills;
