import React from "react";

export default function Films(props){
    return(
        <div className="card">
            <img src={props.film.coverImg} className="card--image" alt="" />
            <div className="card--stats">
                <img src="" className="card--star" alt=""/>
                <span>{props.film.stats.rating}</span>
                <span className="gray">({props.film.stats.reviewCount}) • </span>
                <span className="gray">{props.film.location}</span>
            </div>
            <p className="card--title">{props.film.title}</p>
        </div>
    )
}