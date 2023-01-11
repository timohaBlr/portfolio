import React from 'react';
import s from './Skill.module.css'

type SkillPropsType = {
    title: string
    description: string
}
const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}>

            </div>
            <h3>React</h3>
            <span className={s.description}>
    Wery cool proger using very mach hacks and features
</span>

        </div>
    );
};

export default Skill;
