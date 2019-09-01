import  HomePage  from '../pages/homePage/HomePage.js';
import  ContactPage  from '../pages/ContactPage.js';
import  CoursesPage  from '../pages/CoursesPage.js';
import  DetailsPage  from '../pages/DetailsPage.js';
import  TestimonialsPage  from '../pages/TestimonialsPage.js';
import App from '../App.js';
import NotFoundPage from '../pages/NotFoundPage.js';
import React from 'react';
import { Redirect } from 'react-router-dom';

export default [
    {
        ...App,
        routes: [
            // {
            //     component: () => (<Redirect to='/home' />),
            //     path:'/',
            //     exact:true,
            // },
            {
                component: HomePage.component,
                path:'/',
                exact:true,
            },
            {
                ...HomePage,
                path: ['/home','/show_collapsible'],
                //exact: true,
            },
            {
                ...CoursesPage,
                path: '/courses',
                //exact: true,
            }, 
            {
                ...TestimonialsPage,
                path: '/testimonials',
                //exact: true,
            },
            {
                ...ContactPage,
                path: '/contact',
                //exact: true,
            },
            {
                ...DetailsPage,
                path: '/details',
                //exact: true,
            },
            {
                ...NotFoundPage,
            }
        ]
    }
];