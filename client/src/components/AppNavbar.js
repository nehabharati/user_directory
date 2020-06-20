import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

function AppNavbar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">User directory</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#task">Task</Nav.Link>
                        <Nav.Link href="#users">Users</Nav.Link>
                        <Nav.Link href="#activity">Activity</Nav.Link>
                        <Nav.Link href="#members">Members</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#support">Support</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default AppNavbar