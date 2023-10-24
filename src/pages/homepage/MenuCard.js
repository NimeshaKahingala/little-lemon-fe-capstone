import React from "react";
import './MenuCard.scss';

function MenuCard(props) {
    return <article className="meal-card">
        <div className="img-wrap"><img src={props.img} className="img-meal"></img></div>
        <div className="meal-card-header">
            <h3 className="name">{props.name}</h3>
            <span className="price">{props.price}</span>
        </div>
        <div>
            <p className="description">{props.description}</p>
        </div>
        <div className="delivery">Order a delivery <span class=" icon material-symbols-outlined">
            motorcycle
        </span></div>

    </article>
}

export default MenuCard;