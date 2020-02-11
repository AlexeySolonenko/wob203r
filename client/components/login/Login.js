import React from 'react';
import { apiPost } from '../../app_utils/apiPost.js';
import Cookies from 'universal-cookie';
import { connect } from 'react-redux';
import { Button, Col, Form, Row } from 'react-bootstrap';


const Login = (props) => {

    const cookies = new Cookies();
    console.log('testing cookies', cookies.getAll());

    const clickTest = async () => {
        try {
        console.log('apiPost start',new Date());
        const res = await apiPost(APP_CONFIG.apiUrl + 'login2',{test: 'test'});
        console.log('apiPost ready',new Date(), res);

        } catch (e){
            console.warn('apiPost failed',e);
        }
    }

    return (
        <React.Fragment>
            <Form>
                <Row>
                    <Form.Group as={Col} xs='12' md='6' controlId='Login'>
                        <Form.Label>Login</Form.Label>
                        <Form.Control type='text' placeholder='Enter username or email' />
                    </Form.Group>
                    <Form.Group as={Col} xs='12' md='6'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='Enter you password' />
                    </Form.Group>
                    <Form.Group as={Col} xs='12' className='ml-auto'>
                        <Button variant='primary' onClick={clickTest}>
                            Login
                        </Button>
                    </Form.Group>
                </Row>
            </Form>
        </React.Fragment>
    );
}

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps)(Login);

// class Login extends React.Component {

//     constructor(props){
//         super(props);
//         this.state = {
//             login
//         }
//     }

//     render(){

//         return (
//             <React.Fragment>

//             </React.Fragment>
//         );
//     }
// } 





