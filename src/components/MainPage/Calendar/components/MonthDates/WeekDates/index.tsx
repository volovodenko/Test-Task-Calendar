import React from 'react';
import {Link} from 'react-router-dom';
import dateFns from 'date-fns';
import classNames from 'classnames';


import styles from '../../../styles.scss';
import {countryCode} from 'src/config';

const dateFormat = 'D'; //1, 2, ..., 31
const fullDateFormat = 'YYYY-MM-DD';


export const WeekDates = (props: IProps) => props.weekDates
    .map((date: Date) => (
        <li key={date.toString()}>
            <Link to={`/schedule/${countryCode}/${dateFns.format(date, fullDateFormat)}`}
                  className={
                      classNames(
                          dateFns.isSameMonth(date, props.currentMonth)
                              ? null
                              : styles.disabled
                          ,
                          dateFns.isToday(date)
                              ? styles.today
                              : null
                      )
                  }
            >
                <span>{dateFns.format(date, dateFormat)}</span>
            </Link>
        </li>
    ));


interface IProps {
    readonly weekDates: Date[];
    readonly currentMonth: Date;
}
