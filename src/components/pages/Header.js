import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

function Header() {
    return (
        <>
            <Navbar variant="dark" sticky="top" style={{backgroundColor:'#000000', height:'80px', opacity:'0.7'}}>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </>
    )
}

export default Header
