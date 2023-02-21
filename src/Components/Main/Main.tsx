import s from './Main.module.css'
import React from 'react';
import {Navbar} from "../Navbar/Navbar";
import { Outlet } from 'react-router-dom';

export const Main = () => {
    return (
        <main id={s.main}>
            {/*<Home/>*/}
            <div className={s.container + ' ' + s.active}>
                <Outlet/>
                {/*<About/>*/}
                {/*<Portfolio/>*/}
            </div>
            {/*<Contact/>*/}
            <Navbar/>
        </main>
    );
};
