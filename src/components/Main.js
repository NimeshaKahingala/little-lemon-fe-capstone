import React, { useEffect, useReducer, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import HomePage from "../pages/home/Homepage";
import BookingForm from "../pages/booking/BookingForm";

const updateTimes = (state, action) => {
    console.log(action)
    console.log(state)
    return state;
}

const initializeTimes = () => {
    return ["17.00", "17.30", "18.00", "18.30"];
}

function Main() {
    // const [availableTimes, setAvailableTimes]= useState([]);

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

//   const fetchData = () => { 
//     fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`) 
//       .then((response) => response.json()) 
//       .then((jsonData) => setBtcData(jsonData.bpi.USD)) 
//       .catch((error) => console.log(error)); 
//   }; 
    return <>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/booking" element={<BookingForm availableTimes={availableTimes} dispatch={dispatch} />}></Route>
        </Routes>
    </>
}

export default Main;