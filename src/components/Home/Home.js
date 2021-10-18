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
                    <Col sm={4}><img className="img" src={'https://static.vecteezy.com/system/resources/previews/002/144/069/original/kids-family-learn-to-read-quran-islamic-holy-book-in-ramadan-cartoon-vector.jpg'} alt="" /></Col>
                </Row>

            </Container>


            <Services></Services>

        </div>
    );
};

export default Home;