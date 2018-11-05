import React from 'react';


import styles from './styles.scss';
import {Image} from './Image';
import {Info} from './Info';
import {IScheduleData} from 'src/store/reducers/actionTypes';


export const Content = ({scheduleListData}: IProps) => (
    scheduleListData.length
        ?
        <ul className={styles.scheduleContent}>
            {
                scheduleListData.map((item: IScheduleData) => (
                    <li key={item.id}>
                        <Image item={item}/>
                        <Info item={item}/>
                    </li>
                ))
            }

        </ul>
        :
        <div className={styles.emptyList}>
            На эту дату рассписание отсутсвует
        </div>
);


interface IProps {
    scheduleListData: IScheduleData[];
}
