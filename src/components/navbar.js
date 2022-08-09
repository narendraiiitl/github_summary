import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function InputNavbar({ setUser }) {
    const [data, setData] = useState();
    function handleChange(e) {
        e.preventDefault();
        setData(e.target.value);
    }
    return (
        <Navbar bg="light" expand="lg" >
            <Container fluid>
                <Navbar.Brand href="#">Summarise</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Username"
                            className="me-2"
                            aria-label="Search"
                            onChange={(e) => handleChange(e)}
                            onKeyPress={(e => (e.key === "Enter" ? setUser(data) : e))}

                        />
                        <Button variant="outline-primary" onClick={() => setUser(data)}>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default InputNavbar;