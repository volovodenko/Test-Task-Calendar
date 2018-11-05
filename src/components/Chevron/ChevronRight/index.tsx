import React from 'react';


import styles from '../styles.scss';


export const ChevronRight = (props: IProps) => (
    <svg
        className={styles.chevron}
        onClick={props.nextMonth}
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        viewBox='0 0 86 86'
    >
        <g>
            <path
                d='M21.003,80.094c-1.338,1.352-1.338,3.541,0,4.893c1.337,1.35,3.506,1.352,4.845,0l39.149-39.539
		c1.338-1.352,1.338-3.543,0-4.895L25.848,1.014c-1.339-1.352-3.506-1.352-4.845,0c-1.338,1.352-1.338,3.541-0.001,
		4.893L56.706,43L21.003,80.094z'
            />
        </g>
    </svg>
);

interface IProps {
    nextMonth?: () => void;
}
