import s from './Resume.module.css'
import React from 'react';
import {Item, ItemType} from "./Item/Item";
import {Skills} from "./Skills/Skills";



const itemsExp = [
    {
        year: ' 2017 - 2019',
        position: ['web designer', 'Envato'],
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy.'
    }, {
        year: ' 2014 - 2017',
        position: ['WEB DEVELOPER', 'twitter'],
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy.'
    }, {
        year: ' 2017 - 2021',
        position: ['SURGEON', 'HOSPITAL'],
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy.'
    },
]
const itemsEdu = [
    {
        year: ' 2022 - 2023',
        position: ['IT-INCUBATOR', 'student'],
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy.'
    }, {
        year: ' 2021-2022',
        position: ['STUDENT', 'BSMU'],
        description: '"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy." - Yes, I have looked into it! lol =) '
    },{
        year: ' 2011-2017',
        position: ['STUDENT', 'BSMU'],
        description: '"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy." - Yes, I have looked into it! lol =) '
    },
]

export const Resume = () => {
    return (
        <div>
            <div className={s.row}>
                <ExperienceColumn items={itemsExp} title={'experience'}/>
                <ExperienceColumn items={itemsEdu} title={'education'}/>
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



