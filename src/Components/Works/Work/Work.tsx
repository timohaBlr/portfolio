import React from 'react';
import s from './Work.module.css'
import puppey from './../../../Common/Images/Puppey_300x300.jpg'

type WorkPropsType = {
    title: string
    description: string
}
const Work = (props: WorkPropsType) => {
    return (
        <div className={s.work}>
            <div className={s.image}>
                <a href={'aa'}> <img src={puppey} alt={'work'}/></a>
                           </div>
            <div className={s.description}>
                <div className={s.text}>
                    <h3>{props.title}</h3>
                    <span>{props.description}</span>
                </div>
            </div>

        </div>
    );
};

export default Work;
