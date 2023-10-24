import React from "react";
import './TestimonialsCard.scss';

function TestimonialsCard(props) {
    return <article className="testimonials-card">
        <img src={props.image} className="profile-image"></img>
        <div className="name">{props.name}</div>
        <p className="text">"{props.text}"</p>
    </article>
}

export default TestimonialsCard;