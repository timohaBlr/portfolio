import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Skills from "./Components/Skills/Skills";
import Works from "./Components/Works/Works";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";
import {CounterPage} from "./Components/CounterPage/CounterPage";
import {ClocksWithArrows} from "./Components/ClocksWithArrows/ClocksWithArrows";
import SelectContainer from "./Components/Select/SelectContainer";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className={'container'}>
                <span id="main"/> {/*якори не корректно позиционированы из-за Header position: fixed*/}
                <Main/>
                <span id="skills"/>
                <Skills/>
                <span id="projects"/>
                <Works/>
                <span id="contacts"/>
                <Contacts/>
                <Footer/>
                <span id='counter'/> {/*temporary anchor*/}
            </div>
            <div className={'other'}>
                <div>
                    <CounterPage/>
                    <span id='clocksWithArrows'/> {/*temporary anchor*/}</div>
                <div style={{}}>
                    <ClocksWithArrows/>
                </div>
                <div>
                    <SelectContainer/>
                    <span id='selectContainer'/> {/*temporary anchor*/}</div>
            </div>
        </div>
    );
}

export default App;
