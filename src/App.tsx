import React from 'react';
import './App.css';
import styles from './App.module.css'
import {useLocation, useOutlet} from "react-router-dom";
import {Navbar} from "./Components/Navbar/Navbar";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import {routes} from "./router";

function App() {

    const location = useLocation()
    const currentOutlet = useOutlet()
    const {nodeRef} = routes.find((route) => route.path === location.pathname) ?? {}

    return (<>

            <Navbar/>

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