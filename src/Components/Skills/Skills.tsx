import React from 'react';
import s from './Skills.module.css'
import container from './../../Common/Styles/Container.module.css'
import Skill from "../Skill/Skill";

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${container.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'React'}
                           description={'Wery cool proger using very mach hacks and features'}/>
                    <Skill title={'JS'}
                           description={' Wery cool proger using very mach hacks and features'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;
