import React from 'react';
import dateFns from 'date-fns';
import ruLocale from 'date-fns/locale/ru';


import styles from './styles.scss';
const dateFormat: string = 'D MMMM YYYY';


export const Header = ({scheduleListDate}: IProps) => (
    <header className={styles.header}>
        {
            dateFns.format(
                scheduleListDate,
                dateFormat,
                {locale: ruLocale}
            )
        }
    </header>
);


interface IProps {
    scheduleListDate: string;
}
