import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import("./Appointment.css")



const Appointment = () => {

    const { serviceId } = useParams();
    const [services, setServices] = useState([]);
    const [singleService, setSingleService] = useState({});


    useEffect(() => {


        fetch('/services.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    useEffect(() => {


        const foundService = services.find(service => service.id == serviceId)
        console.log(foundService)
        setSingleService(foundService)

    }, [services]);



    return (
        <div className="appointment">
            <h2>This is Service Details
            </h2>
            <img src={singleService?.img} alt="" />
            <h4> Service Name: {singleService?.title}</h4>
            <h4> {singleService?.discription}</h4>
        </div>
    );
};

export default Appointment;