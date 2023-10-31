import React, { useEffect, useReducer, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Nav from "./Nav";
import Footer from "./Footer";
import HomePage from "../pages/home/Homepage";
import BookingForm from "../pages/booking/BookingForm";

function Main() {
    // const [availableTimes, setAvailableTimes]= useState([]);
    const updateTimes = (state, action) => {
        console.log(action)
        console.log(state)
        return state;
    }

    const initializeTimes = () => {
        return ["17.00", "17.30", "18.00", "18.30"];
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

//   const fetchData = () => { 
//     fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`) 
//       .then((response) => response.json()) 
//       .then((jsonData) => setBtcData(jsonData.bpi.USD)) 
//       .catch((error) => console.log(error)); 
//   }; 
    return <>
        <Nav />
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/booking" element={<BookingForm availableTimes={availableTimes} dispatch={dispatch} />}></Route>
        </Routes>
        <Footer />
    </>
}

export default Main;