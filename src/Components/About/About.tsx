import React from 'react';
import {Title} from "../Title/Title";
import s from './About.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons/faDownload";
import {Resume} from "./Resume/Resume";
import {Column} from "./Column/Column";
import aboutMe from '../../Common/Images/about-me.png'

const list1 = [
    {title: 'First Name', value: 'Tsimafei'},
    {title: 'Last Name', value: 'Haiduk'},
    {title: 'Birthdate', value: '7 february 1994'},
    {title: 'Nationality', value: 'Belarusian'},
    {title: 'Phone', value: '+375-44-595-15-45'},
    {title: 'Email', value: '94timoha@gmail.com'},
]
const list2 = [
    {title: 'Native language', value: 'Russian'},
    {title: 'English', value: 'B1'},
    {title: 'Experience', value: '1 year'},
    {title: 'Address', value: 'Minsk'},
    {title: 'Relocation', value: 'Available'},
    {title: 'Freelance', value: 'Available'},
]

const title = {
    header: ['about', 'me'],
    span: 'I crate and code beautiful things, and I love what I do.'
}
const about = 'I\'m a Freelance Frontend Web Developer based in Minsk, Belarus. I strive to build modern and extensible web applications through carefully crafted code and user-centred design.'

export const About = () => {
    return (
        <section id={s.about}>
            <Title header={title.header} span={title.span}/>

            <div className={s.container}>
                <div className={s.row + ' ' + s.personalInfo}>

                    <div className={s.col}>
                        <div className={s.imageContainer}>
                            <img src={aboutMe} alt={'me'}/>
                        </div>
                        <p>{about}</p>
                    </div>

                    <div className={s.row + ' ' + s.col}>
                        <div className={s.col}>
                            <Column list={list1}/>
                        </div>
                        <div className={s.col}>
                            <Column list={list2}/>
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


            </div>
            <Resume/>
        </section>
    );
};


