import React from 'react';
import s from './Skill.module.css'

type SkillType = {
    skill: {
        title: string
        percent: number
    }
}

export const Skill: React.FC<SkillType> = ({skill}) => {
    const {title,percent}=skill
    return (
        <div className={s.skill}>
            <span className={s.skillText}>{title}</span>
            <div className={s.chartBar}>
                <span className={s.itemProgress} style={{width: `${percent}%`}}>
                </span>
                <span className={s.percent} style={{right: `calc(100% - ${percent}% - 21px)`}}>
                    {percent}%
                    <b className={s.arrow}></b>
                </span>
            </div>
        </div>
    );
};
