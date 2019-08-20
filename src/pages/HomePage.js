import React from 'react';

const HomePage = (props) => {
    console.log('homepage',props);
    return (
        <div >
            <h3>STUDYSNAMI</h3>
            <p>Welcome to your online booking and tracking plaform!</p>
        </div>
    );
}

export default {
    component: HomePage,
}