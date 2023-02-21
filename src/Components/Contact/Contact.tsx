import React from 'react';
import {Title} from "../Title/Title";
import s from './Contact.module.css'
import {ContactForm} from "./ContactForm/ContactForm";
import codeWars_icon from '../../Common/Images/codewars.png'
import linkedIn_icon from '../../Common/Images/linkedin.png'
import mail_icon from '../../Common/Images/mail.png'
import telegram from '../../Common/Images/telegram.png'
import phone_icon from '../../Common/Images/phone.png'
import gitHub_icon from '../../Common/Images/github.png'
import freeCodeCamp_icon from '../../Common/Images/freecodecamp.png'
import facebook_icon from '../../Common/Images/facebook.png'


const title = {
    header: ['get', 'in touch'],
    span: 'I’m always open to discussing product design work or partnerships.'
}
const leftCol = [
    {title: 'phone', source: 'tel:+375445951545', value: '+375 44 595 15 45', icon: phone_icon,},
    {title: 'Email', source: 'mailto:94timoha@gmail.com', value: '94timoha@gmail.com', icon: mail_icon,},
    {title: 'Telegram', source: 'https://telegram.me/timoha94by', value: '@timoha94by', icon: telegram,},
    {
        title: 'LinkedIn',
        source: 'https://www.linkedin.com/in/tsimafei-haiduk/',
        value: 'Tsimafei Haiduk',
        icon: linkedIn_icon,
    },
    // {key: 'phone', value: '+375 44 595 15 45',icon: faPhone},
    // {key: 'Email', value: '94timoha@gmail.com', icon: faEnvelope},
    // {key: 'Telegram', value: '@timoha94by',icon: faPaperPlane},
    // {key: 'LinkedIn', value: 'Tsimafei Haiduk',icon: faAt},
]
const social = [
    {title: 'Codewars', source: 'https://www.codewars.com/users/94timoha', icon: codeWars_icon,},
    {title: 'FreeCodeCamp', source: 'https://www.freecodecamp.org/timoha', icon: freeCodeCamp_icon,},
    {title: 'GitHub', source: 'https://www.facebook.com/timofey.gaiduk', icon: gitHub_icon,},
    {title: 'Facebook', source: 'http', icon: facebook_icon,},
]

export const Contact = () => {

    return (
        <section id={s.contact}>
            <Title header={title.header} span={title.span}/>
            <div className={s.container}>
                <div className={s.row}>
                    <div className={s.colR}>
                        <ContactsMedia/>
                    </div>
                    <div className={s.colL}>
                        <ContactForm/>
                    </div>
                </div>
            </div>

        </section>
    );
};


export const ContactsMedia = () => {
    const mappedLeftCol = leftCol.map(m => {
        return <li key={m.title}>
            <h6>
                <span className={s.contactTitle}>
                    {m.title}
                </span>
                <a className={s.contactTitleIcon} title={m.title} href={m.source} target={'_blank'}>
                    <img src={m.icon} alt={m.title}/>
                </a>
                <span className={s.contactContent}>
                {m.value}
            </span>
            </h6>
        </li>
    })
    const mappedSocial = social.map((m, index) => {
        return <li key={index}>
            <a title={m.title} href={m.source} target={'_blank'}>
                <img src={m.icon} alt={m.title}/>
            </a>
        </li>
    })
    return <div>
        <ul className={s.customList}>
            {mappedLeftCol}
        </ul>
        <div className={s.social}>
            <h6>Social Profiles</h6>
            <ul>
                {mappedSocial}
            </ul>
        </div>
    </div>
}
