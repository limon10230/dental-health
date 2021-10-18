import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import('./Header.css')

const Header = () => {
    return (
        <div className="header-container ">
            <div>

                <Container >
                    <Row>
                        <Col><h2 style={{ color: 'goldenrod', fontSize: '40px' }}>Learn Quran</h2></Col>
                        <Col ><nav >

                            <NavLink className="navlink"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "lightyellow"
                                }}

                                to="/home">Home</NavLink>
                            <NavLink className="navlink"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "lightyellow",

                                }}
                                to="/about">About us</NavLink>
                            <NavLink className="navlink"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "lightyellow"
                                }}
                                to="/services"
                            >Services</NavLink>



                            <NavLink

                                className="navlink"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "lightyellow"
                                }}
                                to="/books">Books</NavLink>
                            <NavLink className="navlink"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "lightyellow"
                                }}
                                to="/contact">Contact Us</NavLink>

                        </nav>
                        </Col>
                    </Row>

                </Container>

            </div>


        </div>
    );
};

export default Header;