import React, { useState } from "react";
import './BookingForm.scss';

function BookingForm(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [reservationDate, setReservationDate] = useState("");
    const [reservationTime, setReservationTime] = useState("");
    const [guestsCount, setGuestCount] = useState(1);
    const [occasionType, setOccasionType] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        setReservationDate("");
        setReservationTime("");
        console.log("form submit");
    }

    return <>
        <h2 className="booking-title">Table reservation</h2>
        <form onSubmit={handleSubmit} className="form-reservation">
            <fieldset>
                <div className="form-fields">
                    <label>First Name</label>
                    <input
                        id="first-name"
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}
                        required
                    />
                </div>
                <div className="form-fields">
                    <label>Last Name</label>
                    <input
                        id="last-name"
                        value={lastName}
                        onChange={(e) => {
                            setLastName(e.target.value);
                        }}
                        required
                    />
                </div>
                <div className="form-fields">
                    <label htmlFor="res-date">Choose date</label>
                    <input
                        type="date"
                        id="res-date"
                        value={reservationDate}
                        onChange={(e) => {
                            setReservationDate(e.target.value);
                            props.dispatch(e.target.value);

                        }}
                        required
                    />
                </div>
                <div className="form-fields">
                    <label htmlFor="res-time">Choose time</label>
                    <select
                        id="res-time"
                        data-testid="res-time"
                        value={reservationTime}
                        onChange={(e) => setReservationTime(e.target.value)}
                        required
                    >
                        {props.availableTimes.map(times =>
                            <option value={times} key={times}>{times}</option>
                        )}
                    </select>
                </div>
                <div className="form-fields">
                    <label htmlFor="guests">Number of guests</label>
                    <input
                        type="number"
                        placeholder="1"
                        min="1"
                        max="10"
                        id="guests"
                        value={guestsCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        required
                    />
                </div>
                <div className="form-fields">
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        value={occasionType}
                        onChange={(e) => setOccasionType(e.target.value)}
                        required
                    >
                        <option value={"Birthday"}>Birthday</option>
                        <option value={"Anniversary"}>Anniversary</option>
                    </select>
                </div>
                <button disabled={!reservationDate && !reservationTime && !guestsCount && !occasionType} type="submit" className="btn-submit" aria-label="On Click">Make Your reservation</button>
            </fieldset>
        </form>
    </>
}

export default BookingForm;