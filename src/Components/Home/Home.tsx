import React, {useEffect, useState} from 'react';
import s from './Home.module.css'
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faSuitcase} from "@fortawesome/free-solid-svg-icons/faSuitcase";
import ReactTypingEffect from 'react-typing-effect';
import fone from './../../Common/Images/fone.jpg'
import Button from "../../Common/Button/Button";
import {useOutletContext} from "react-router-dom";
import {isHomeContextType} from "../../App";

export const Home: React.FC = () => {


    const isHome = useOutletContext<isHomeContextType>()

    useEffect(() => {
        isHome.setIsHome(true)
        return () => {
            isHome.setIsHome(false)
        }
    }, [])

    return (
        <section id={s.home}>
            <div className={s.mainTextContainer}>
                <div className={s.mainText}>
                    <h3>Hi there !</h3>
                    <h1>I'm <br/>
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
                    <div className={s.buttons}>
                        <Button name={'more about me'} icon={faUser} path={'/about'}/>
                        <Button name={'portfolio'} icon={faSuitcase} path={'/work'} outlined/>
                    </div>
                </div>
            </div>
        </section>
    );
};


export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({width: 0, height: 0});
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSize;
};

