import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Skills from "./Components/Skills/Skills";
import Works from "./Components/Works/Works";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";

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
            </div>
        </div>
    );
}

export default App;
