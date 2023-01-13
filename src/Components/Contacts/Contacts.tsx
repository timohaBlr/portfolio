import React from 'react';
import s from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
                <div className={s.header}>
                    <h2> Contacts </h2>
                </div>
                <form className={s.contact} method={'get'} action={''}>
                    <div className={s.contact}>
                        <label htmlFor={'name'}> Enter your name:</label>
                        <input type={"text"} name={'name'} id={'name'} required/>
                    </div>
                    <div className={s.contact}>
                        <label htmlFor={'email'}> Enter your email:</label>
                        <input type={'email'} name={'email'} id={'email'} required/>
                    </div>
                    <div className={s.contact}>
                        <label htmlFor={'message'}> Enter your message:</label>
                        <textarea  name={'message'} id={'message'} required/>
                    </div>
                </form>
                <div className={s.contact}>
                    <button  onClick={()=> {}}>Send message!</button>
                </div>
        </div>
    );
};

export default Contacts;
