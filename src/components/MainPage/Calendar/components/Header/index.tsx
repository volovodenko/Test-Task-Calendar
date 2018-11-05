import React from 'react';
import dateFns from 'date-fns';
import ruLocale from 'date-fns/locale/ru';


import styles from './styles.scss';
import {ucFirst} from 'src/helpers';
import {ChevronLeft, ChevronRight} from 'src/components/Chevron';
const currentMonthFormat: string = 'MMMM'; //January, February, ..., December


export const Header = (props: IProps) => (
        <div className={styles.header}>
            <ChevronLeft prevMonth={props.prevMonth}/>
            <span>
                {
                    ucFirst(
                        dateFns.format(
                            props.currentMonth,
                            currentMonthFormat,
                            {locale: ruLocale}
                        ))
                }
            </span>
            <ChevronRight nextMonth={props.nextMonth}/>
        </div>
);

interface IProps {
    prevMonth: ()=> void;
    nextMonth: ()=> void;
    currentMonth: Date;
}
