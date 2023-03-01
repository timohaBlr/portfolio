import React from 'react';
import s from './Title.module.css'

type TitlePropsType = {
    header: string[]
    span: string
}

export const Title:React.FC<TitlePropsType> = (props) => {
    return (
        <div className={s.pageTitle+ ' '+ s.textCenter}>
            <h2 className={s.textCenter}>
                {props.header[0]}<span> {props.header[1]}</span>
            </h2>
            <span className={s.titleHeadSubtitle}>
                {props.span}
            </span>
        </div>
    );
};
