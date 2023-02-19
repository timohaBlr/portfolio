import s from './Main.module.css'
import React from 'react';
import {About} from "../About/About";
import {Home} from "../Home/Home";

export const Main = () => {
    return (
        <main id={s.main}>
            <Home/>
            <div className={s.container + ' ' + s.active}>
                <About/>

            </div>
        </main>
    );
};
