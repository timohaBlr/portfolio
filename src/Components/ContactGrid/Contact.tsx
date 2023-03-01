import React from 'react';
import {Title} from "../Title/Title";
import s from './Contact.module.css'
import {ContactForm} from "./ContactForm/ContactForm";
import {ContactsMedia} from "./ContactsMedia";


const title = {
    header: ['get', 'in touch'],
    span: 'I’m always open to discussing product design work or partnerships.'
}


export const Contact = () => {

    return (
        <section id={s.contact}>
            <Title header={title.header} span={title.span}/>
            <div className={s.container}>

                <div className={s.row}>
                    <div className={s.leftCol}>
                        <ContactsMedia/>
                    </div>
                    <div className={s.rightCol}>
                        <ContactForm/>
                    </div>
                </div>

            </div>
        </section>
    )
        ;
};


