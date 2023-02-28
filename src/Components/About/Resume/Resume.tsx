import s from './Resume.module.css'
import React from 'react';
import {Item, ItemType} from "./Item/Item";
import {Skills} from "./Skills/Skills";


const itemsMed = [
    {
        year: ' 2017 - 2021',
        position: ['SURGEON', 'HOSPITAL'],
        description: 'Receiving patients. Working with documentation. When I was on duty, I was also responsible for the order in the department. At work I often had to find a common language with different people, including those I did not like. I regularly had to agree with my colleagues to consult or examine patients. I followed the rule of never refusing to help my colleagues. I constantly improved my skills and knowledge. I regularly studied new normative and legal documents related to my specialty.'
    }, {
        year: ' 2011-2017',
        position: ['STUDENT', 'BSMU'],
        description: '"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy." - Yes, I have looked into it! lol =) '
    },
]
const itemsProgramming = [
    {
        year: ' 2021 - 2023',
        position: ['Frontend Developer', 'Freelance'],
        description: 'Creating a SPA using React (typescript) with Redux. I am responsible for creating all layers of the application as a UI-BLL-DAL.In the process. I used the following tools/libraries: React-Router for navigation, Formik for form handling, Axios for HTTP requests from browser, StoryBook and Jest for unit-tests. And some additional libraries for visual enhancements like react-transition-group, react-typing-effect. I also have some experience with Material UI, reselect.'
    },
    {
        year: ' 2022 - 2023',
        position: ['student', 'IT-INCUBATOR'],
        description: 'Working with React, Redux, TypeScript, Promise, REST API, GIT, Material UI, StoryBook, TDD, Teamwork'
    },
]

export const Resume = () => {
    return (
        <div className={s.container}>
            <div className={s.row}>
                <ExperienceColumn items={itemsProgramming} title={'Web engineering experience'}/>
                <ExperienceColumn items={itemsMed} title={'Medical background'}/>
            </div>
            <div className={s.row}>
                <Skills/>
            </div>
        </div>
    );
};


type ExperienceColumnPropsType = {
    title: string
    items: ItemType[]
}
const ExperienceColumn: React.FC<ExperienceColumnPropsType> = (props) => {

    const mappedItemsExp = props.items.map((item, index) => {
        return <Item key={index} item={item}/>
    })
    return (
        <div className={s.col}>
            <h2 className={s.header}>
                {props.title}
            </h2>
            {mappedItemsExp}
        </div>
    );
};



