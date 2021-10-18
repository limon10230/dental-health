import React from 'react';
import { Button, Card } from 'react-bootstrap';
import('./Service.css')

const Service = (props) => {
    const { img, title, duration, cost } = props.service;
    return (
        <div>


            <Card className='card' style={{ width: '18rem' }}>


                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>
                        <h3>{title}</h3>
                    </Card.Title>
                    <Card.Text>
                        <p>Duration: {duration}</p>
                        <p>Course fee: {cost}</p>
                    </Card.Text>
                    <Button className="button">Buy Now</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Service;