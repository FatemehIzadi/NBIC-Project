import React from 'react';
import {Navbar, Container, Nav, Card} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import './Navbar.css';
export default function NavigationBar() {
    return(
        <div>
        <Navbar className="navbar" expand="md">
            <Container>
                <Navbar.Brand className="order-md-last" href="https://utnbic.ir/">
                     <Image 
                    src={require('./images/nbiclogo.png')} 
                    alt="nbic logo" 
                    width="50"
                    className="d-inline-block align-top"
                     />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="">گزارش خطا</Nav.Link>
                        <Nav.Link href="https://utnbic.ir/fa/about">درباره ما</Nav.Link>                            
                        <Nav.Link href="https://utnbic.ir/fa/contact-us">تماس با ما</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
</div>
    );
}