import React from 'react';
import s from './Main.module.css'
import container from './../../Common/Styles/Container.module.css'

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={container.container}>
                <div className={s.text}>
                    <span> Hi</span>
                    <h1> I am</h1>
                    <p> Timofey, front-end developer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};

export default Main;
