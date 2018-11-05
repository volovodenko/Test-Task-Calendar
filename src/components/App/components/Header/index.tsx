import React from 'react';
import {Link} from 'react-router-dom';

import styles from './styles.scss';
import {ChevronLeft} from 'src/components/Chevron';


export const Header = () => {
    const homePage = window.location.pathname === '/';

    return (
        <header className={styles.header}>
            {
                !homePage
                    ?
                    <Link to='/'>
                        <ChevronLeft/>
                    </Link>
                    : null
            }
            <span>super film</span>
        </header>
    );
};
