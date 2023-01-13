import React from 'react';
import s from './Skills.module.css'
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
                <div className={s.header}>
                    <h2> My skills</h2>
                </div>
                <div className={s.items}>
                    <Skill title={'React'} description={'React kabzda kak prosto'}/>
                    <Skill title={'React'} description={'React kabzda kak prosto'}/>
                    <Skill title={'React'} description={'React kabzda kak prosto'}/>
                    <Skill title={'React'} description={'React kabzda kak prosto'}/>
                </div>


        </div>
    );
};

export default Skills;
