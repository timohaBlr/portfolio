import React, {useState} from 'react';
import './App.css';
import styles from './App.module.css'
import {useLocation, useNavigate, useOutlet} from "react-router-dom";
import {Navbar} from "./Components/Navbar/Navbar";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import {routes} from "./router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import {useWindowSize} from "./Common/useWindowSize";

export type isHomeContextType = {
    isHome: boolean
    setIsHome: (isHome: boolean) => void
}

function App() {

    const location = useLocation()
    const {nodeRef} = routes.find((route) => route.path === location.pathname) ?? {}
    const navigate = useNavigate()

    const [isHome, setIsHome] = useState(true)
    /** передаю контекст в аутлет, чтобы оттуда мог менять стейт и вместо домашней страницы в апп
     * отображать меню
     */
    const currentOutlet = useOutlet({isHome, setIsHome})

    // const width = window.innerWidth
    const width = useWindowSize()
    const wide = width.width > 1024

    const onClickBackHandler = () => {
        navigate('/')
    }
    return (<>
            {(wide || isHome)
                ? <Navbar/>
                : <span className={'backMobile'} onClick={onClickBackHandler}>
                <FontAwesomeIcon icon={faArrowLeft}/>
                </span>}

            <SwitchTransition>
                <CSSTransition
                    key={location.pathname}
                    nodeRef={nodeRef}
                    timeout={300}
                    classNames={{...styles}}
                    unmountOnExit
                >
                    {(state) => (
                        <div className={styles.outlet}
                             ref={nodeRef}>
                            {currentOutlet}
                        </div>
                    )}
                </CSSTransition>
            </SwitchTransition>

        </>
    );
}

export default App;