import  HomePage  from '../pages/HomePage.js';
import  ContactPage  from '../pages/ContactPage.js';
import  CoursesPage  from '../pages/CoursesPage.js';
import  DetailsPage  from '../pages/DetailsPage.js';
import  TestimonialsPage  from '../pages/TestimonialsPage.js';
import App from '../App.js';
import NotFoundPage from '../pages/NotFoundPage.js';

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true,
            },
            {
                ...CoursesPage,
                path: '/courses',
                //exact: true,
            }, 
            {
                ...TestimonialsPage,
                path: '/testimonials',
                exact: true,
            },
            {
                ...ContactPage,
                path: '/contact',
                exact: true,
            },
            {
                ...DetailsPage,
                path: '/details',
                exact: true,
            },
            {
                ...NotFoundPage,
            }
        ]
    }
];