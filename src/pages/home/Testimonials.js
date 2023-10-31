import React from "react";
import TestimonialsCard from "./TestimonialsCard";
import person1 from '../../assets/testimonials1.jpg';
import person2 from '../../assets/testimonials2.jpg';
import person3 from '../../assets/testimonials3.png';
import person4 from '../../assets/testimonials4.jpg';
import './Testimonials.scss';

function Testimonials() {
    return <section className="section-testimonials">
        <div className="container">
            <h1 className="title">What people say about us!</h1>
            <div className="testimonial-wrap">
                <TestimonialsCard image={person1} name="Brian Jackson" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                <TestimonialsCard image={person3} name="Michael Perera" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                <TestimonialsCard image={person4} name="Marie Robinson" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                <TestimonialsCard image={person2} name="David Rafter" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            </div>
        </div>
    </section>
}

export default Testimonials;