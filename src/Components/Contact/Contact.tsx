import React from 'react';
import {Title} from "../Title/Title";
import s from './Contact.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";
import {ContactForm} from "./ContactForm/ContactForm";
import {faAt} from "@fortawesome/free-solid-svg-icons/faAt";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons/faPaperPlane";


const title = {
    header: ['get', 'in touch'],
    span: 'I’m always open to discussing product design work or partnerships.'
}
const leftCol = [
    {key: 'phone', value: '+375 44 595 15 45',icon: faPhone},
    {key: 'Email', value: '94timoha@gmail.com', icon: faEnvelope},
    {key: 'Telegram', value: '@timoha94by',icon: faPaperPlane},
    {key: 'Codewars', value: '94timoha',icon: faAt},
]
const social = [
    {},
    {},
    {},
    {},
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
        return <li key={m.key}>
            <h6>
                <span className={s.contactTitle}>
                    {m.key}
                </span>
                <FontAwesomeIcon icon={m.icon} className={s.fa}/>
                <span className={s.contactContent}>
                {m.value}
            </span>
            </h6>
        </li>
    })
    const mappedSocial = social.map((m, index) => {
        return <li key={index}>
            <a title={'Facebook'} href={'#'}>
                <FontAwesomeIcon icon={faPaperPlane} className={s.fa}/>
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
