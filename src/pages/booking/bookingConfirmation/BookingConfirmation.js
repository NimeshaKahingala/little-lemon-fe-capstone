import React from "react";
import './bookingConfirmation.scss';


function Confirmation() {
    return <>
        <div className="confirmation">
            <h2>Thank You</h2>
            <h1 className="title">Booking Confirmed</h1>
            <div className="description">We are pleased to inform you that your reservation request has been received and confirmed.</div>
        </div>
    </>
}

export default Confirmation;