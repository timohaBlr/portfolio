import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import useOutsideClickListener from "../../Common/useOutsideClickListener";

const navItems = [
    {title: 'Home', link: '/'},
    {title: 'About me', link: '/about'},
    {title: 'my Portfolio', link: '/work'},
    {title: 'get in touch', link: '/contact'},
]

export const Navbar = () => {

    const {ref, isShow, setIsShow} = useOutsideClickListener(false)
    const onClickHandler = () => {
        setIsShow(!isShow)
    }

    const mappedItems = navItems.map((m, index) => {
        return <li key={index}>
            <NavLink id={m.title}
                     to={m.link}
                     className={({isActive}) => isActive
                         ? s.activeStyle
                         : undefined}>
                < span> {m.title}</span>
            </NavLink>
        </li>
    })

    const navBarClassName = isShow
        ? s.cdStretchyNav + ' ' + s.navIsVisible
        : s.cdStretchyNav


    return (
        <div className={navBarClassName}>
            <a id={'menu'} className={s.cdNavTrigger} onClick={onClickHandler} ref={ref}>
                <span aria-hidden> </span>
            </a>
            <ul id={s.nav}>
                {mappedItems}
            </ul>
            <span aria-hidden className={s.stretchyNavBg}> </span>
        </div>
    );
};
