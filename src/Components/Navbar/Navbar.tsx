import React, {useState, MouseEvent} from 'react';
import s from './Navbar.module.css'
import {Link} from "react-router-dom";

const navItems = [
    {title: 'Home', link: '/'},
    {title: 'About me', link: '/about'},
    {title: 'my Portfolio', link: '/work'},
    {title: 'get in touch', link: '/contact'},
]

export const Navbar = () => {
    const [open, setOpen] = useState(false)

    const onClickHandler = (event: MouseEvent<HTMLAnchorElement>) => {
        // if (event.target !== document.getElementById('menu')) {
        //     setOpen(false)
        // }
        setOpen(!open)
    }

    const mappedItems = navItems.map((m, index) => {
        return <li key={index}>
            <Link id={m.title} to={m.link} onClick={onClickHandler}>
                <span>{m.title}</span>
            </Link>
        </li>
    })

    const burgerClassName = open
        ? s.burger + ' ' + s.burgerOn
        : s.burger
    const navBarClassName = open
        ? s.cdStretchyNav + ' ' + s.navIsVisible
        : s.cdStretchyNav



    return (
        <div className={navBarClassName} >
            <a id={'menu'} className={s.cdNavTrigger} onClick={onClickHandler}>
                <span aria-hidden> </span>
            </a>
            <ul id={s.nav}>
                {mappedItems}
            </ul>
            <span aria-hidden className={s.stretchyNavBg}> </span>
        </div>
    );
};
