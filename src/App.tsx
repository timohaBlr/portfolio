import React from 'react';
import './App.css';
import {Main} from "./Components/Main/Main";
import s from "./Components/Main/Main.module.css";
import {BrowserRouter, Outlet, Routes, Route, useLocation} from "react-router-dom";
import {Navbar} from "./Components/Navbar/Navbar";
import {Home} from "./Components/Home/Home";
import {useTransition, animated} from "@react-spring/web";
import {About} from "./Components/About/About";
import {Portfolio} from "./Components/Portfolio/Portfolio";
import {Contact} from "./Components/Contact/Contact";

function App() {
    const location = useLocation()
    const transitions = useTransition(location, {
        from: {opacity: 0, transform: 'translate3d(100%,0,0)'},
        enter: {opacity: 1, transform: 'translate3d(0%,0,0)', display: 'flex', justifyContent: 'center'},
        leave: {opacity: 0, transform: 'translate3d(-50%,0,0)'},
    })

    return (<>
            <Navbar/>
            {transitions((styles, item) => (
                <animated.div style={styles}>
                    <Routes location={item}>
                        <Route path={'/'} element={<Home/>}/>
                        <Route path={'/about'} element={<About/>}/>
                        <Route path={'/work'} element={<Portfolio/>}/>
                        <Route path={'/contact'} element={<Contact/>}/>
                    </Routes>
                </animated.div>
            ))}

            {/*// <div className={s.container + ' ' + s.active}>*/}
            {/*//     <Outlet/>*/}
            {/*// </div>*/}
        </>
    );
}

//
export default App;
//
// const AnimationLayout = () => {
//     const {pathname} = useLocation();
//     const [transitions, api] = useTransition(data, () => ({
//         from: {opacity: 0},
//         enter: {opacity: 1},
//         leave: {opacity: 1},
//     }))
//     return (
//         <animated.div
//             key={pathname}
//             initial="initial"
//             animate="in"
//             variants={pageVariants}
//             transition={pageTransition}
//         >
//             <Outlet/>
//         </animated.div>
//     );
// };
//
//
// function MyComponent({data = [1, 2, 3]}) {
//     const [transitions, api] = useTransition(data, () => ({
//         from: {opacity: 0},
//         enter: {opacity: 1},
//         leave: {opacity: 1},
//     }))
//
//     return transitions((style, item) => (
//         <animated.div style={style}>{item}</animated.div>
//     ))
// }