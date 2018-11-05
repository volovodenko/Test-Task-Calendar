import React from 'react';


import {WeekDates} from './WeekDates/index';


export const MonthDates = (props: IProps) => props.monthDates
    .map((weekDates: Date[], index: number) => (
        <ul key={index}>
            {
                WeekDates({
                    weekDates,
                    currentMonth: props.currentMonth
                })
            }
        </ul>
    ));


interface IProps {
    readonly monthDates: Date[][];
    readonly currentMonth: Date;
}
