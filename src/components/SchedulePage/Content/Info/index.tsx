import React, {Fragment} from 'react';
import dateFns from 'date-fns';


import styles from './styles.scss';
import {IScheduleData} from 'src/store/reducers/actionTypes';

const yearFormat: string = 'YYYY';


export const Info = ({item}: IProps) => (
    <div className={styles.info}>
        <div className={styles.top}>
            <p>{item.show.name}</p>
            <p className={styles.description}>
                {
                    //если description содержит больше 5 слов - обрезаем и добавляем ...
                    item.name.split(' ').length > 5
                        ?
                        <Fragment>
                            {
                                item.name.split(' ')
                                    .slice(0, 4)
                                    .join(' ')
                            }...
                        </Fragment>
                        :
                        item.name
                }
            </p>
            <p className={styles.year}>
                {
                    dateFns.format(
                        item.show.premiered,
                        yearFormat
                    )
                }
                {
                    dateFns.isSameYear(item.show.premiered, new Date())
                        ? null
                        :
                        <Fragment>
                            &nbsp;-&nbsp;...
                        </Fragment>
                }
            </p>
        </div>

        <div className={styles.bottom}>
            <p className={styles.season}>Сезон {item.season}</p>
        </div>
    </div>

);


interface IProps {
    item: IScheduleData;
}
