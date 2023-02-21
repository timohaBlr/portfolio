import React from 'react';
import s from './Skills.module.css'
import {Skill} from "./Skill/Skill";

const skills = [
    {title: 'html', percent: 80},
    {title: 'javascript', percent: 75},
    {title: 'css', percent: 60},
    {title: 'react js', percent: 65},
    {title: 'typescript', percent: 60},
    {title: 'redux', percent: 80},
    {title: 'material ui', percent: 60},
    {title: 'storybook', percent: 45},
    {title: 'photoshop', percent: 45},
]

export const Skills = () => {
    const mappedSkills = skills.map(skill => {
        return  <Skill key={skill.title} skill={skill}/>
    })
    return (
        <div className={s.skills}>
            <div className={s.header}>
                <h2>
                    skills
                </h2>
            </div>
            {mappedSkills}
        </div>
    );
};
