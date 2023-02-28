import React from 'react';
import s from './Column.module.css'

type ItemType = {
    title: string
    value: string
}
type ColumnPropsType = {
    list: ItemType[]
}
export const Column: React.FC<ColumnPropsType> = (props) => {
    return (
        <div >
            <ul>
                {props.list.map((m, index) => {
                    return <li key={index}>
                        <h6>
                            <span>{m.title}</span>
                            {m.value}
                        </h6>
                    </li>
                })}
            </ul>
        </div>
    );
};

