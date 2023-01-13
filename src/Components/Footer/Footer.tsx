import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.footer}>
                <h2>Timofey Gaiduk</h2>
                <div className={s.medias}>
                    <div className={s.media}> </div>
                    <div className={s.media}> </div>
                    <div className={s.media}> </div>
                    <div className={s.media}> </div>
                </div>
                <h2> 2023. All rights reserved.</h2>
        </div>
    );
};

export default Footer;