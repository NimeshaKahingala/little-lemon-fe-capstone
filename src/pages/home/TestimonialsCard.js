import React from "react";
import './TestimonialsCard.scss';
import starIcon from "../../assets/review-star.png";

function TestimonialsCard(props) {
    return <article className="testimonials-card">
        <img src={props.image} className="profile-image"></img>
        <div className="name">{props.name}</div>
        <div className="review">
            <img src={starIcon} className="star-icon"></img>
            <img src={starIcon} className="star-icon"></img>
            <img src={starIcon} className="star-icon"></img>
            <img src={starIcon} className="star-icon"></img>
            <img src={starIcon} className="star-icon"></img>
        </div>
        <p className="text">"{props.text}"</p>
    </article>
}

export default TestimonialsCard;