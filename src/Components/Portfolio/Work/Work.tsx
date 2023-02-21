import React from 'react';
import s from './Work.module.css'
import project from '../../../Common/Images/project-1.jpg'

type WorkPropsType = {
    work: {
        id: number
        title: string
    }
}

export const Work = (props:WorkPropsType) => {
    return (
        <li className={s.col}>
            <a href={'#'}>
                <img src={project} alt={'Project'} className={s.imgFluid}/>
                <div>
                    <span>{props.work.title}</span>
                </div>
            </a>

        </li>
    );
};
