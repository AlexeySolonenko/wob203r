import React from 'react';


const TestLogin = () => {
    console.log('processing test login page');
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <form method='post' action='http://localhost:3001/login'>
                        <input name='username' type='text'></input>
                        <input name='password' type='text'></input>
                        <input type='submit' value='submit'></input>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default {
    component: TestLogin,
};