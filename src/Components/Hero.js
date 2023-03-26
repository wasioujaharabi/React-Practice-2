import React from "react"
import image from "../images/blob-960-960-0-0-fill.jpg"
export default function Hero() {
    return (
        <section className="hero">
            <img src={image} className="hero--photo" alt=""/>
            <h1 className="hero--header">Extra-Ordinary Experiences</h1>
            <p className="hero--text">My Favorite Films For the past Days till Now</p>
        </section>
    )
}