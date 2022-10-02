import React from "react";
import '../style/main.css'
import Card from "./card";
import cardData from "../data/cardData"

function Main() {
    const cardElements = cardData.map(card => {
        return <Card 
                    key={card.id}
                    {...card}
                />            
    })
    return (
            <main className="main-content__wrapper">
            <section id="services">
                <div className="container">
                    <div className="services-wrapper">
                        <h1 className="services-heading">What Do We Offer?</h1>
                        <div className="services-list">
                            <div className="service">
                                <img src={process.env.PUBLIC_URL + "/images/Email Marketing.svg"} alt="" className="service-icon"/>
                                <h1 className="service-title">Flows</h1>
                                <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Sed facilisis nunc vitae tortor et mattis neque. Aliquam curabitur turpis adipiscing habitasse enim nec sit. 
                                    Aliquet nunc tortor netus.</p>
                                <button className="secondary-button">Learn More</button>
                            </div>
                            <div className="service">
                                <img src={process.env.PUBLIC_URL + "/images/Brand Promotion.svg"} alt="" className="service-icon"/>
                                <h1 className="service-title">Campaigns</h1>
                                <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Sed facilisis nunc vitae tortor et mattis neque. Aliquam curabitur turpis adipiscing habitasse enim nec sit. 
                                    Aliquet nunc tortor netus.</p>
                                <button className="secondary-button">Learn More</button>
                            </div>
                            <div className="service">
                                <img src={process.env.PUBLIC_URL + "/images/MessageSquare.png"} alt="" className="service-icon"/>
                                <h1 className="service-title">Growth</h1>
                                <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Sed facilisis nunc vitae tortor et mattis neque. Aliquam curabitur turpis adipiscing habitasse enim nec sit. 
                                    Aliquet nunc tortor netus.</p>
                                <button className="secondary-button">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="results">
                <div className="container">
                    <div className="carousel-wrapper">
                        <h1 className="carousel-heading">Client Results</h1>
                        <ul className="carousel">
                            {cardElements}
                        </ul>
                    </div>
                </div>
            </section>
            <section id="about">
                <div className="container">
                    <div className="about-wrapper">
                        <h1 className="about-heading">Meet Our CEO</h1>
                        <div className="details-wrapper">
                            <div className="avatar-wrapper">
                                <img src={process.env.PUBLIC_URL + "/images/ceo-avt.png"} alt="" className="avatar"/>
                                <h2 className="name">Davud Gurda</h2>
                                <h4 className="profession">CEO &#38; Founder of Velvstar</h4>
                            </div>
                        </div>
                        <div className="details">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet porttitor iaculis commodo parturient et eu. Semper vivamus vulputate sed tellus ultricies nullam et. Eget amet, neque morbi in proin tincidunt tortor, fames sed. Est feugiat ipsum magna in. </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet porttitor iaculis commodo parturient et eu. Semper vivamus vulputate sed tellus ultricies nullam et. Eget amet, neque morbi in proin tincidunt tortor, fames sed. Est feugiat ipsum magna in. </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet porttitor iaculis commodo parturient et eu. Semper vivamus vulputate sed tellus ultricies nullam et. Eget amet, neque morbi in proin tincidunt tortor, fames sed. Est feugiat ipsum magna in. </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact">
                <div className="container">
                    <div className="form-wrapper">
                        <h1 className="form-heading">Ready to work with an agency that actually delivers? Get in touch!</h1>
                        <form className="primary-form" action="#">
                            <div className="input-box">
                                <h2 className="input-title">Full Name</h2>
                                <input type="text" placeholder="Your Full Name" required/>
                            </div>
                            <div className="input-box">
                                <h2 className="input-title">Email Address</h2>
                                <input type="email" placeholder="Email Address" required/>
                            </div>
                            <div className="input-box">
                                <h2 className="input-title">Phone Number</h2>
                                <input type="text" placeholder="Phone Number" required/>
                            </div>
                            <div className="input-box">
                                <h2 className="input-title">Message</h2>
                                <input type="text" placeholder="Your Message" required/>
                            </div>
                            <button class="button">Send Message
                                <input type="submit" value="Register"/>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main;