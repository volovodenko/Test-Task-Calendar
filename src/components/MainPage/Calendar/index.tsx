import React from 'react';


import styles from './styles.scss';
import {Header} from './components/Header';
import CalendarController, {IPropsView} from 'src/controllers/ComponentControllers/CalendarController';
import {MonthDates} from './components/MonthDates/index';


const Component = (props: IPropsView) => (
    <section className={styles.calendar}>
        <Header
            prevMonth={props.prevMonth}
            nextMonth={props.nextMonth}
            currentMonth={props.currentMonth}
        />

        <div className={styles.dates}>
            {
                MonthDates({
                    monthDates: props.monthDates,
                    currentMonth: props.currentMonth
                })
            }
        </div>
    </section>
);

const Calendar = CalendarController(Component);

export {Calendar};
