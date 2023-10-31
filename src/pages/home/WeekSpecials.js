import React from "react";
import { Link } from "react-router-dom";
import MenuCard from "./MenuCard";
import './WeekSpecials.scss';
import mealSaladImg from '../../assets/greek salad.jpg';
import BruchettaImg from '../../assets/bruchetta.svg';
import LemonDessertsImg from '../../assets/lemon dessert.jpg';

function WeekSpecials() {
    return <section className="section-specials container">
        <div className="title-wrap">
            <h2 className="title">This week specials!</h2>
            <Link className="btn-primary">Online Menu</Link>
        </div>
        <div className="meal-card-wrap"> 
            <MenuCard name="Greek Salad" price="$12.99" img={mealSaladImg} description="The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and rosemary
                croutons."/>
            <MenuCard name="Bruchetta" price="$5.99" img={BruchettaImg} description="Our Bruchetta is made from grilled bread that has been 
                smeared with garlic and seasoned with salt and olive oil."/>
            <MenuCard name="Lemon Dessert" price="$5.00" img={LemonDessertsImg} description="This comes straight from grandma's recipe book, every last 
                ingredient has been sourced and is as authentic as can be imagined."/>
        </div>
    </section>
}

export default WeekSpecials;