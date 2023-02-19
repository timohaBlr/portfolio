import React from 'react';
import {Title} from "../Title/Title";
import s from './About.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons/faDownload";
import {Resume} from "./Resume/Resume";

const list1 = [
    {title: 'First Name', value: 'Tsimafei'},
    {title: 'Last Name', value: 'Haiduk'},
    {title: 'Birthdate', value: '7 february 1994'},
    {title: 'Nationality', value: 'Belarusian'},
    {title: 'Experience', value: '1 year'},
    {title: 'Address', value: 'Minsk'},
]
const list2 = [
    {title: 'Languages', value: 'English'},
    {title: 'Freelance', value: 'Available'},
    {title: 'Phone', value: '+375-44-595-15-45'},
    {title: 'Email', value: '94timoha@gmail.com'},
    {title: 'Skype', value: 'XXX'},
    {title: 'Dribbble', value: 'XXX'},
]

export const About = () => {
    return (
        <section id={s.about}>
            <Title/>
            <div className={s.row + ' ' + s.personalInfo}>
                <div className={s.col}>
                    <div className={s.imageContainer}>
                        <img src={'https://istanbul-react.vercel.app/img/dark-about.jpg'}/>
                    </div>
                </div>
                <div className={s.row + ' ' + s.col}>
                    <div className={s.col}>
                        <ul className={s.list1}>
                            {list1.map((m, index) => {
                                return <li key={index}>
                                    <h6>
                                            <span className={s.fontWeight600}>
                                                {m.title}
                                            </span>
                                        {m.value}
                                    </h6>
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className={s.col}>
                        <ul className={s.list2}>
                            {list2.map((m, index) => {
                                return <li key={index}>
                                    <h6>
                                            <span className={s.fontWeight600}>
                                                {m.title}
                                            </span>
                                        {m.value}
                                    </h6>
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className={s.col + ' ' + s.resumeBtnContainer}>
                        <a href="#" className={s.btn}><span>
                            <FontAwesomeIcon icon={faDownload} className={s.fa}/>
                            download my cv</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className={s.textCenter}>
                <hr className={s.aboutSection}/>
            </div>
            <Resume/>
        </section>
    );
};
