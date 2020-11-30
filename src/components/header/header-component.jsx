import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import './header-styles.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/logo-4.svg';
import { auth } from '../../firebase/firebase-utils';
import toggleicon from '../../assets/arlogo.png';

import styled from 'styled-components';

const Styles = styled.div`

    .navbar {
        background-color: green;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

        &: hover {
            color: white;
        }
    }
`;

const Header = ({ currentUser }) => (
    <div className='testit'>
        <Styles>
            <Navbar expand='lg' variant='light'>
                <Navbar.Brand href='/'><img src={toggleicon} alt='toggle icon' /></Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-header-nav' className='icon-settings'></Navbar.Toggle>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ml-auto'>
                        <Nav.Item><Nav.Link href='/'>Home&nbsp;&nbsp;</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href='/shop'>About&nbsp;&nbsp;</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href='/signin'>Contact</Nav.Link> </Nav.Item>
                        {
                            currentUser ? 
                                <Nav.Item><Nav.Link className='option' onClick={() => auth.signOut()}>Sign Out</Nav.Link></Nav.Item>
                            : 
                                <Nav.Item><Nav.Link className='option' href ='/signin'>Sign In</Nav.Link></Nav.Item>        
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
   </div> 
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);