import React from 'react';


import {MainPage, SchedulePage} from 'src/pages';


export const routes = [
    {
        name: 'Home',
        path: '/',
        isExact: true,
        component: MainPage
    },
    {
        name: 'Schedule',
        path: '/schedule/:countryCode/:date',
        isExact: true,
        component: SchedulePage
    },
];
