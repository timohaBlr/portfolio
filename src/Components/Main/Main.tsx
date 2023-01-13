import React from 'react';
import s from './Main.module.css'

const Main = () => {
    return (
        <div className={s.mainBlock}>
                <div className={s.text}>
                    <h3>Hello!</h3>
                    <h2> My name is very cool proger</h2>
                    <span>I am create awesome web-cites!</span>
                </div>
                <div className={s.photo}>
                    <img
                        src={'https://www.fonewalls.com/wp-content/uploads/1536x2048-Background-HD-Wallpaper-002-600x800.jpg'}
                        alt={'ss'}/>
                </div>
        </div>
    );
};

export default Main;
