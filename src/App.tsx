import React from 'react';
import './App.css';
import s from './App.module.css'
import { useLocation, useOutlet} from "react-router-dom";
import {Navbar} from "./Components/Navbar/Navbar";
import { CSSTransition, SwitchTransition} from "react-transition-group";
import {routes} from "./router";

function App() {

    const location = useLocation()
    const currentOutlet = useOutlet()
    // const [isLoading, setIsLoading] = useState(false)
    const { nodeRef } =  routes.find((route) => route.path === location.pathname) ?? {}



    return (<>

            <Navbar/>

            <SwitchTransition>
                <CSSTransition
                    key={location.pathname}
                    nodeRef={nodeRef}
                    timeout={300}
                    classNames={{...s}}
                    unmountOnExit
                >
                    {(state) => (
                        <div ref={nodeRef} >
                            {currentOutlet}
                        </div>
                    )}
                </CSSTransition>
            </SwitchTransition>

        </>
    );
}

export default App;