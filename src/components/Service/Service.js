import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import('./Service.css')

const Service = (props) => {
    const { id, img, title, discription } = props.service;
    return (
        <div>


            <Card className='card' style={{ width: '18rem' }}>


                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>
                        <h3>{title}</h3>
                    </Card.Title>
                    <Card.Text>

                        <p> {discription}</p>
                    </Card.Text>
                    <Link to={`/appointment/${id}`}>
                        <Button className="button">Appointment</Button>
                    </Link>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Service;