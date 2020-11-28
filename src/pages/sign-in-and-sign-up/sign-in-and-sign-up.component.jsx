import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
//import Layout from '../../components/layout';
import { Container, Row, Col } from 'react-bootstrap';


import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (

    <div className='sign-in-and-sign-up'>
        <Container>
            <Row>
                <Col>
                    <SignIn />
                </Col>    
                <Col>
                    <SignUp />
                </Col>    
            </Row>
        </Container>

    </div>
);

export default SignInAndSignUpPage;