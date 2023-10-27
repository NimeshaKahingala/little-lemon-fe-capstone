import React, { useState } from "react";
import './BookingForm.scss';

function BookingForm() {
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
                    <label htmlFor="res-date">Choose date</label>
                    <input
                        type="date"
                        id="res-date"
                        value={reservationDate}
                        onChange={(e) => setReservationDate(e.target.value)}
                    />
                </div>
                <div className="form-fields">
                    <label htmlFor="res-time">Choose time</label>
                    <select
                        id="res-time"
                        value={reservationTime}
                        onChange={(e) => setReservationTime(e.target.value)}
                    >
                        <option value={"17:00"}>17:00</option>
                        <option value={"18:00"}>18:00</option>
                        <option value={"19:00"}>19:00</option>
                        <option value={"20:00"}>20:00</option>
                        <option value={"21:00"}>21:00</option>
                        <option value={"22:00"}>22:00</option>
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
                        onChange={(e) => setGuestCount(e.target.value)} />
                </div>
                <div className="form-fields">
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        value={occasionType}
                        onChange={(e) => setOccasionType(e.target.value)}
                    >
                        <option value={"Birthday"}>Birthday</option>
                        <option value={"Anniversary"}>Anniversary</option>
                    </select>
                </div>
                <button disabled={!reservationDate && !reservationTime && !guestsCount && !occasionType} type="submit" className="btn-submit">Make Your reservation</button>
            </fieldset>
        </form>
    </>
}

export default BookingForm;