import React from "react";
import Hero from "./Hero";
import WeekSpecials from "./WeekSpecials";
import Testimonials from "./Testimonials";
import OurStory from "./OurStory";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";


function HomePage() {
    return <>
        <Nav/>
        <Hero/>
        <WeekSpecials/>
        <Testimonials/>
        <OurStory/>
        <Footer/>
    </>
}

export default HomePage;
