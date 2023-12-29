import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../../assets/restauranfood.jpg";
import './Hero.scss';

function Hero() {
    return <section className="section-hero">
        <div className="container">
        <div>
            <div className="title" data-testid="title">Little Lemon</div>
            <div className="sub-title">Chicago</div>
            <p className="text">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Link className="btn-primary" to="./booking" aria-label="On Click">Reserve a table</Link>
        </div>
        <div className="img-wrap">
            <img src={HeroImg} className="hero-img"></img>
        </div>
        </div>
    </section>
}

export default Hero;