
import React from 'react';
import { Button } from 'react-bootstrap';
import('./Welcome.css')



const Welcome = () => {
    return (
        <div>

            <h2 className="welcome-title"> Welcome to DentalCare</h2>
            <p className="detail">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.

                Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.</p>
            <Button className='button'>Learn More</Button>
        </div>
    );
};

export default Welcome;