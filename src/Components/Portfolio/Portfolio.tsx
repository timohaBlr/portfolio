import React from 'react';
import {Title} from "../Title/Title";
import s from './Portfolio.module.css'
import {Work} from "./Work/Work";


const title = {
    header: ['my', 'portfolio'],
    span: 'a few recent design and coding projects. Want to see more? Email me.'
}
const works = [
    {id: 1, title: 'todolist app'},
    {id: 2, title: 'todolist app'},
    {id: 3, title: 'todolist app'},
    {id: 4, title: 'todolist app'},
    {id: 5, title: 'todolist app'},
    {id: 6, title: 'todolist app'},
]

export const Portfolio = () => {
    const mappedWorks = works.map(work => {
        return <Work key={work.id} work={work}/>
    })
    return (
        <section id={s.work}>
            <Title header={title.header} span={title.span}/>

            <div className={s.portfolioSection}>
                <ul id={s.portfolioItems} className={s.row}>
                    {mappedWorks}
                </ul>
            </div>

        </section>
    );
};


