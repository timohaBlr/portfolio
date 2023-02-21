import React from 'react';
import {Title} from "../Title/Title";
import s from './Portfolio.module.css'
import {Work} from "./Work/Work";


const title = {
    header: ['my', 'portfolio'],
    span: 'a few recent design and coding projects. Want to see more? Email me.'
}
const works = [
    {
        title: 'todolist app',
        image: '',
        description: 'Very useful application',
        demo: 'https://timohablr.github.io/todolist/',
        code: ''
    },
    {
        title: 'Social Network',
        image: '',
        description: 'training project with bases of routing, http request, pagination, even with React Context API',
        demo: 'https://timohablr.github.io/react-way-of-samurai',
        code: ''
    },
    {
        title: 'Shop for Codibly',
        image: '',
        description: 'My first Technical Task',
        demo: 'https://timohablr.github.io/shop-for-codibly',
        code: ''
    },
]

export const Portfolio = () => {
    const mappedWorks = works.map((work, index) => {
        return <Work key={index} work={work}/>
    })
    return (
        <section id={s.work}>
            <Title header={title.header} span={title.span}/>

            <div className={s.portfolioSection + ' ' + s.container}>
                <ul id={s.portfolioItems} className={s.row}>
                    {mappedWorks}
                </ul>
            </div>

        </section>
    );
};


