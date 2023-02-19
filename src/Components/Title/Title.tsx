import React from 'react';
import s from './Title.module.css'

export const Title = () => {
    return (
        <div className={s.pageTitle+ ' '+ s.textCenter}>
            <h2 className={s.textCenter}>
                about
                <span> me</span>
            </h2>
            <span className={s.titleHeadSubtitle}>
                I design and code beautiful things, and I love what I do.
            </span>
        </div>
    );
};
