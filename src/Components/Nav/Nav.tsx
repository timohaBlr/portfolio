import React from 'react';
import s from './Nav.module.css'

const Nav = () => {
    return (
        <div className={s.nav}>
            <a href={'index.html#main'}>Main</a>
            <a href={'index.html#skills'}>Skills</a>
            <a href={'index.html#projects'}>Projects</a>
            <a href={'index.html#contacts'}>Contacts</a>
        </div>
    );
};

export default Nav;