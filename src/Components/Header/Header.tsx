import React, {useState} from 'react';
import s from './Header.module.css'
import {Navbar} from "../Navbar/Navbar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {faHouse} from "@fortawesome/free-solid-svg-icons/faHouse";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons/faBriefcase";
import {faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons/faEnvelopeOpen";

const navItems = [
    {title: 'Home', icon: faHouse, link: '#home'},
    {title: 'About me', icon: faUser, link: '#about'},
    {title: 'my Portfolio', icon: faBriefcase, link: '#work'},
    {title: 'get in touch', icon: faEnvelopeOpen, link: '#contact'},
]
export const Header = () => {
    const [open, setOpen] = useState(true)
    const stretchyNavClassName = open
        ? s.cdStretchyNav + ' ' + s.navIsVisible
        : s.cdStretchyNav
    const aClass = open
        ? s.aClass + ' ' + s.active
        : s.aClass
    const onClickHandler = () => {
        setOpen(!open)
    }
    const liClassName = ''
    const mappedNav = navItems.map((m, index) => {
        return <li key={index} className={liClassName}>
            <a className={aClass} href={m.link}>
                <FontAwesomeIcon icon={m.icon}/>
                <span>{m.title}</span>
            </a>
        </li>
    })
    return (
        <header id={s.header}>
            <div className={s.navContainer}>
                <div>
                </div>

                <div className={stretchyNavClassName}>
                    <a className={s.navTrigger} href={'#'}
                       onClick={onClickHandler}>
                        <span aria-hidden> </span>
                    </a>
                    <ul className={s.stretchyNav}>
                        {mappedNav}
                    </ul>
                </div>
            </div>
        </header>
    );
};
