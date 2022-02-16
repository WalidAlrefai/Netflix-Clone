import React from 'react'
import { Nav, Container, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; // without Boostrap

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" sticky='top'>
            <Container>
                <Navbar.Brand href="/">Movies</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/favList">Favorites List</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;
