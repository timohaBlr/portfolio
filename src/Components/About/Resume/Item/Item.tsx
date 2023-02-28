import s from './Item.module.css'
import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar} from "@fortawesome/free-solid-svg-icons/faCalendar";

export type ItemType = {
    year: string
    position: string[]
    description: string
}
type ItemPropsType = {
    item: ItemType
}

export const Item: React.FC<ItemPropsType> = ({item}) => {
    const {year, position, description} = item
    return (
        <div className={s.item}>
            <span className={s.bullet}> </span>
            <div className={s.card}>
                <div className={s.cardHeader}>
                    <span className={s.year}>
                    <FontAwesomeIcon icon={faCalendar} className={s.fa}/>
                        {year}
                    </span>
                    <span className={s.profession}>
                       {position[0]}
                        <span className={s.separator}> </span>
                        <span>{position[1]}</span>
                    </span>
                </div>
                <div className={s.cardBody}>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};
