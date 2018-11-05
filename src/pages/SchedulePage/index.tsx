import React from 'react';


import styles from './styles.scss';
import {Header, Content} from 'src/components/SchedulePage';
import SchedulePageController,
{IPropsView} from 'src/controllers/PageControllers/SchedulePageController';


const Component = (props: IPropsView) => {
    return (
        <section className={styles.scheduleList}>
            <Header scheduleListDate={props.scheduleList.date}/>
            <Content scheduleListData={props.scheduleList.data}/>
        </section>
    );
};

export const SchedulePage = SchedulePageController(Component);
