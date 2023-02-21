import React from 'react';
import s from './Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faSuitcase} from "@fortawesome/free-solid-svg-icons/faSuitcase";
import ReactTypingEffect from 'react-typing-effect';
import fone from'./../../Common/Images/fone.jpg'

export const Home = () => {
    return (
            <section id={s.home} style={{backgroundImage: `url(${fone})`}}>
                <div className={s.mainTextContainer}>
                    <div className={s.mainText}>
                        <h3>Hi there !</h3>
                        <h1 className={s.ahHeadline}>I'm &nbsp;
                            <ReactTypingEffect
                                text={["Tsimafey Haiduk", "A web developer"]}
                                className={s.introduction}
                                speed={150}
                                eraseSpeed={50}
                                eraseDelay={2500}
                                typingDelay={1000}
                                cursor={' '}
                            />
                        </h1>
                        <p>I strives to build immersive and beautiful web applications through carefully
                            crafted code and user-centric design. Hope you enjoy my Photoshop skills=)</p>
                        <div className={s.callToActionsHome}>
                            <div className={s.textLeft}>
                                <a href={'/about'} className={s.btn +' '+ s.linkPortfolioOne}>
                                    <span>
                                        <FontAwesomeIcon icon={faUser} className={s.fa}/> &nbsp;
                                         more about me
                                    </span>
                                </a>
                                <a href={'/work'} className={s.btn +' '+ s.btnSecondary +' '+ s.linkPortfolioTwo}>
                                    <span>
                                        <FontAwesomeIcon icon={faSuitcase} className={s.fa}/> &nbsp;
                                        portfolio
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

