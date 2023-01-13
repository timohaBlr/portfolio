import React from 'react';
import s from './Works.module.css'
import Work from "./Work/Work";

const Works = () => {
    return (
        <div className={s.worksBlock}>
                <div className={s.header}>
                    <h2> My recent works</h2>
                </div>
                <div className={s.items}>
                    <div className={s.item}>
                        <Work title={'Todolist'} description={'Very useful application'}/>
                    </div>
                    <div className={s.item}>
                        <Work title={'Todolist'} description={'Very useful application'}/>
                    </div>
                    <div className={s.item}>
                        <Work title={'Todolist'} description={'Very useful application'}/>
                    </div>
                    <div className={s.item}>
                        <Work title={'Todolist'} description={'Very useful application'}/>
                    </div>
                </div>
        </div>
    );
};

export default Works;
