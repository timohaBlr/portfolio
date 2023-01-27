import React from 'react';
import s from './Works.module.css'
import Work from "./Work/Work";

const Works = () => {
    const works = [
        {title: 'Todolist', description: 'Very useful application', link: 'https://timohablr.github.io/todolist/'},
        {title: 'Social Network', description: 'training project with bases of routing, http request, pagination, even with React Context API', link: 'https://timohablr.github.io/react-way-of-samurai/'},
        {title: 'Shop for Codibly', description: 'My first  Technical Task', link: 'https://timohablr.github.io/shop-for-codibly/?page=1'},
        {title: 'Counter', description: 'Simple counter with base react principles. Settings and current count value saved to a local storage', link: 'index.html#counter'},
        {title: 'Clocks With Arrows', description: 'I stole CSS, but now a understand how it works', link: 'index.html#clocksWithArrows'},
        {title: 'Custom Select', description: 'Tried to imitate default input select', link: 'index.html#selectContainer'},
    ]
    const mappedWorks = works.map(work=> {
        return ( <div className={s.item} key={work.title}>
            <Work title={work.title} description={work.description} link={work.link}/>
        </div> )
    })
    return (
        <div className={s.worksBlock}>
                <div className={s.header}>
                    <h2> My recent works</h2>
                </div>
                <div className={s.items}>
                    {mappedWorks}
                </div>
        </div>
    );
};

export default Works;
