import React from 'react';

import logo from './01.png';
import styles from './styles.scss';

export const Content = () => (
    <section className={styles.content}>
        <div className={styles.image}>
            <img src={logo} alt='TV-Logo'/>
        </div>
        <div className={styles.text}>
            <p>Для получения списка сериалов, пожалуйста, выберите необходимый месяц и день.</p>
        </div>
    </section>
);
