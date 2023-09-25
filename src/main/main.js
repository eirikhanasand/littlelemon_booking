import greenLemonWithText from "../assets/logos/greenLemonWithText.png"
import greenlemonVertical from "../assets/logos/greenLemonVertical.png"
import croissant from "../assets/croissant.jpg"
import pancakes from "../assets/pancakes.jpg"
import shrimp from "../assets/shrimp.jpg"
import fruits from "../assets/fruits.jpg"
import React, { useState } from "react"
import "./main.css"

export default function Main() {
    return (
        <main>
            <Header />
            <Body />
            <Footer />
        </main>
    )
}

function Header() {
    return (
        <header className="header">
            <img
                class="logo"
                alt="Green lemon logo with text"
                src={greenLemonWithText}
            />
            <nav role="navigation">
                <h1><a href="#">Home</a></h1>
                <h1><a href="/menu">Menu</a></h1>
                <h1><a href="/book">Book</a></h1>
                <h1><a href="/about">About</a></h1>
            </nav>
        </header>
    )
}

function Body() {
    return (
        <body>
            <div className="banner">
                <div className="inner_banner">
                    <div className="banner_text">
                        <h1 className="banner_title">Autumn Sale! 40% on selected dishes.</h1>
                        <p className="banner_content">
                            Pariatur aliquip deserunt aliqua veniam do sit nulla 
                            incididunt enim ea. Enim eu ut nulla fugiat quis 
                            reprehenderit. Consequat elit aute laborum culpa enim 
                            voluptate incididunt culpa non occaecat mollit incididunt 
                            non deserunt.
                        </p>
                    </div>
                    <img
                        class="banner"
                        alt="Croissant"
                        src={croissant}
                    />
                </div>
            </div>
            <Booking />
            <div class="content">
                <Section title="Main Dishes" src={shrimp} />
                <Section title="Desserts" src={pancakes} />
                <Section title="Refreshers" src={fruits} />
            </div>
        </body>
    )
}

function Footer() {
    return (
        <footer>
            <img 
                className="footer_image" 
                alt="Small green lemon logo with text" 
                src={greenlemonVertical}
            />
            <p className="copyright">Copyright Little Lemon</p>
        </footer>
    )
}

function Section({title, src}) {
    return (
        <section className="section" title={title}>
            <h1>Main dishes</h1>
            <img alt={title} src={src} />
            <p>
                Ea quis deserunt cillum mollit amet. Laboris in ipsum 
                culpa fugiat. Culpa nisi Lorem enim excepteur. Commodo 
                dolor sit do voluptate nostrud eu commodo.
            </p>
            <a href="/">{title}</a>
        </section>
    )
}

function Booking() {
    const [booking, setBooking] = useState(false)

    if (booking == "submitted") {
        return (
            <div className="booking_outline" onClick={() => setBooking(false)}>
                    <div>
                        <p className="booking_text">Submitted</p>
                    </div>
                </div>
        )
    }

    function handleSubmit() {
        setBooking("submitted")
    }

    if (booking) {
        return (
            <div className="booking_form_parent">
                <div className="booking_form">
                    <h1>Date</h1>
                    <input className="booking_input" type="date" />
                    <h1>Time</h1>
                    <input className="booking_input" type="time" />
                    <h1>Number of guests:</h1>
                    <input className="booking_input" type="number" />
                    <h1>Occasion</h1>
                    <input className="booking_input" type="string" />
                </div>
                <div className="booking_outline_submit" onClick={handleSubmit}>
                    <p className="booking_submit">Submit reservation</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="booking_outline" onClick={() => setBooking(true)}>
                <div>
                    <p className="booking_text">Book table</p>
                </div>
            </div>
        )
    }
}