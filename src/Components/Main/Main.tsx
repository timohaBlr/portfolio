import s from './Main.module.css'
import React from 'react';
import {About} from "../About/About";
import {Home} from "../Home/Home";
import {Portfolio} from "../Portfolio/Portfolio";
import {Contact} from "../Contact/Contact";

export const Main = () => {
    return (
        <main id={s.main}>
            <Home/>
            <div className={s.container + ' ' + s.active}>
                <About/>
                <Portfolio/>


            </div>
            <Contact/>
        </main>
    );
};
