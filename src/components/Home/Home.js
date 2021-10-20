import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Services from '../Services/Services';
import Welcome from '../Welcome/Welcome';
import('./Home.css')

const Home = (props) => {
    return (
        <div className="home-container">
            <Container>
                <Row>
                    <Col sm={8}> <Welcome></Welcome></Col>
                    <Col sm={4}><img className="img" src={'https://forsterdental.com.au/wp-content/uploads/2017/11/When-Is-It-A-Dental-Emergency-Dentist-Forster.jpg'} alt="" /></Col>
                </Row>

            </Container>


            <Services></Services>

        </div>
    );
};

export default Home;