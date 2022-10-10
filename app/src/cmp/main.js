import React from "react";
import '../style/main.css'
import Card from "./card";
import cardData from "../data/cardData"

function Main() {

    const [currentIndex, setCurrentIndex] = React.useState(1);

    const cardElements = cardData.map(card => {
        return <Card 
                    key={card.id}
                    {...card}
                />            
    })

    const sliderElement = document.querySelector('.slider');

    function previousSlide() {
        sliderElement.scrollBy({
            top: 0,
            left: -10,
            behavior : "smooth"
        });

    }

    function nextSlide() {
        sliderElement.scrollBy({
            top: 0,
            left: 10,
            behavior : "smooth"
        });

    }

    function ToSlide(slideIndex) {
        if (slideIndex === 1) {
            document.querySelector('.slider').scrollTo(
                {
                    top: 0,
                    left: 0
                    ,
                    behavior: "smooth"
                }
            )
        } 
        else {
            document.querySelector('.slider').scrollTo(
                {
                    top: 0,
                    left: slideIndex / document.querySelectorAll('.slider-card__wrapper').length * sliderElement.scrollWidth
                    ,
                    behavior: "smooth"
                }
            )
        }

    }

    function detectSlide() {
        const currentScrollPosition = sliderElement.scrollLeft

        if (currentScrollPosition === 0) {
            setCurrentIndex(1) 
        } 
        else if (Math.abs(sliderElement.scrollWidth - sliderElement.scrollLeft - sliderElement.clientWidth) <= 3.0) {
            setCurrentIndex(cardElements.length) 
        }
        else {
            
            if (sliderElement.clientWidth < 700) {
                if (Math.floor(currentScrollPosition / sliderElement.clientWidth) + 1 > 1) {
                    setCurrentIndex(Math.floor(currentScrollPosition / sliderElement.clientWidth) + 1)
                }
            } 
            else if (Math.round(sliderElement.clientWidth / currentScrollPosition) > 1) {
                if (Math.round(sliderElement.clientWidth / currentScrollPosition) < cardElements.length) {
                    setCurrentIndex(Math.round(sliderElement.clientWidth / currentScrollPosition))
                }
            }
        }
    }

    const dotElements = cardData.map((card, index) => {
        return (
            <div key={card.id} className={index + 1 === currentIndex ? 'dot active' : 'dot'} id={index} onClick={() => ToSlide(Number(card.id))}>
            </div>
        )      
    })

    return (

            <main className="main-content__wrapper">
                <section id="services">
                    <div className="container">
                        <div className="services-wrapper| text-center">
                            <h1 className="services-heading | heading-hero heading-small__mobile-only">What Do We Offer?</h1>
                            <div className="services-list | flow">
                                <div className="service">
                                    <img src={process.env.PUBLIC_URL + "/images/Email Marketing.svg"} alt="" className="service-icon"/>
                                    <h1 className="service-title | heading-small title-extra-large__mobile-only">Email Marketing</h1>
                                    <p className="service-description | body-extra-large body-normal__mobile-only">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Sed facilisis nunc vitae tortor et mattis neque. Aliquam curabitur turpis adipiscing habitasse enim nec sit. 
                                        Aliquet nunc tortor netus.</p>
                                    <button className="button-outline | button-small">Learn More</button>
                                </div>
                                <div className="service">
                                    <img src={process.env.PUBLIC_URL + "/images/chart.svg"} alt="" className="service-icon"/>
                                    <h1 className="service-title | heading-small title-extra-large__mobile-only">Brand Promotion</h1>
                                    <p className="service-description | body-extra-large body-normal__mobile-only">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Sed facilisis nunc vitae tortor et mattis neque. Aliquam curabitur turpis adipiscing habitasse enim nec sit. 
                                        Aliquet nunc tortor netus.</p>
                                    <button className="button-outline | button-small">Learn More</button>
                                </div>
                                <div className="service">
                                    <img src={process.env.PUBLIC_URL + "/images/message logo.svg"} alt="" className="service-icon"/>
                                    <h1 className="service-title | heading-small title-extra-large__mobile-only">SMS Marketing</h1>
                                    <p className="service-description | body-extra-large body-normal__mobile-only">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Sed facilisis nunc vitae tortor et mattis neque. Aliquam curabitur turpis adipiscing habitasse enim nec sit. 
                                        Aliquet nunc tortor netus.</p>
                                    <button className="button-outline | button-small">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="results">
                    <div className="results-container">
                        <div className="slider-wrapper">
                            <h1 className="slider-heading | heading-large heading-small__mobile-only">Client Results</h1>
                            <ul className="slider" onScroll={detectSlide}>
                                {cardElements}
                            </ul>
                        </div>
                        <div className="slider-button">
                            <img src={process.env.PUBLIC_URL + "/images/chevron-left.svg"} alt="" className="prev-button" onClick={(previousSlide)}/>
                            <img src={process.env.PUBLIC_URL + "/images/chevron-right.svg"} alt="" className="next-button" onClick={nextSlide} />
                        </div>
                        <div className="dot-track | mx-auto">
                            {dotElements}
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