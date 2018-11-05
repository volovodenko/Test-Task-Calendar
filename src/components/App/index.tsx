import React from 'react';


import './styles.scss';
import {Header} from './components/Header';
import {Content} from './components/Content';

export const App = () => {
    return (
        <div className='wrapper'>
            <Header/>
            <Content/>
        </div>
    );
};
