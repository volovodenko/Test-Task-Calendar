import React from 'react';
import {Switch, Route} from 'react-router-dom';


import styles from './styles.scss';
import {routes} from 'src/routes';


export const Content = () => (
    <main className={styles.mainContent}>
        <Switch>
            {
                routes.map(route => (
                    <Route
                        key={route.name}
                        exact={route.isExact}
                        path={route.path}
                        component={route.component}
                    />
                ))
            }
        </Switch>
    </main>
);
