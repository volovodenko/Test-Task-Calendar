import React from 'react';

import styles from '../styles.scss';

export const ChevronLeft = (props: IProps) => (
    <svg
        className={styles.chevron}
        onClick={props.prevMonth}
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        viewBox='0 0 86 86'
    >
        <g>
            <path
                d='M64.998,80.095c1.338,1.352,1.338,3.541,0,4.893c-1.336,1.35-3.506,1.352-4.844,0l-39.151-39.54
		c-1.338-1.352-1.338-3.543,0-4.895l39.15-39.539c1.338-1.352,3.506-1.352,4.844,0C66.335,2.366,66.335,4.556,65,
		5.907L29.294,43.001L64.998,80.095z'/>
        </g>
    </svg>
);

interface IProps {
    prevMonth?: () => void;
}


