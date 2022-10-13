import React from "react";
import '../style/main.css'
import cardData from "../data/cardData"

function Main() {

    const [currentIndex, setCurrentIndex] = React.useState(1);

    function previousSlide() {
        document.querySelector('.slider').scrollBy({
            top: 0,
            left: -10,
            behavior : "smooth"
        });
    }

    function nextSlide() {
        document.querySelector('.slider').scrollBy({
            top: 0,
            left: 10,
            behavior : "smooth"
        });

    }

    function ToSlide(slideIndex) {
        console.log('working')
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
                    left: slideIndex / document.querySelectorAll('.slider-card__wrapper').length * document.querySelector('.slider').scrollWidth
                    ,
                    behavior: "smooth"
                }
            )
        }

    }

    function detectSlide() {
        const currentScrollPosition = document.querySelector('.slider').scrollLeft

        if (currentScrollPosition === 0) {
            setCurrentIndex(1) 
        } 
        else if (Math.abs(document.querySelector('.slider').scrollWidth - document.querySelector('.slider').scrollLeft - document.querySelector('.slider').clientWidth) <= 3.0) {
            setCurrentIndex(cardElements.length) 
        }
        else {
            if (document.querySelector('.slider').clientWidth < 700) {
                if (Math.floor(currentScrollPosition / document.querySelector('.slider').clientWidth) + 1 > 1) {
                    setCurrentIndex(Math.floor(currentScrollPosition / document.querySelector('.slider').clientWidth) + 1)
                }
            } 
            else if (Math.round(document.querySelector('.slider').clientWidth / currentScrollPosition) > 1) {
                if (Math.round(document.querySelector('.slider').clientWidth / currentScrollPosition) < cardElements.length) {
                    setCurrentIndex(Math.round(document.querySelector('.slider').clientWidth / currentScrollPosition))
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

    const cardElements = cardData.map((props, index) => {
        return (
            <li key={props.id} className="slider-card__wrapper | flow">
                <div className="card-top">
                    <div className="brand-info">
                        <img src={props.logo} alt="" className="card-logo"/>
                        <div>
                            <h1 className="card-brand-name | title-extra-large title-large__mobile-only">{props.brandName}</h1>
                            <h3 className="card-duration | title-normal__semi-bold title-small__semi-bold__mobile-only">{props.duration} campaign</h3>
                        </div>
                    </div>
                    <span className="card-revenue-rate | title-large title-normal__semi-bold__mobile-only">{props.revenueRate} Revenue</span>
                </div>
                <div className="card-analytics | flow">
                    <div className="row-1">
                        <div className="analytics-item total">
                            <h1 className="analytics-title | title-large title-small__semi-bold__mobile-only">Total Store Revenue</h1>
                            <span className="analytics-number | heading-large title-extra-large__mobile-only">${props.total}</span>
                        </div>
                        <div className="analytics-item via-email">
                            <h1 className="analytics-title | title-large title-small__semi-bold__mobile-only">Via Email Marketing</h1>
                            <span className="analytics-number | heading-large title-extra-large__mobile-only">${props.viaEmail}</span>
                        </div> 
                    </div>
                    <div className="row-2">
                        <div className="analytics-item flows">
                            <h1 className="analytics-title | title-normal__semi-bold title-extra-small__semi-bold__mobile-only">Flows</h1>
                            <span className="analytics-number | heading-small title-extra-large__mobile-only">${props.flows}</span>
                        </div>                                
                        <div className="analytics-item campaigns">
                            <h1 className="analytics-title | title-normal__semi-bold title-extra-small__semi-bold__mobile-only">Campaigns</h1>
                            <span className="analytics-number | heading-small title-extra-large__mobile-only">${props.campaign}</span>
                        </div>                                
                        <div className="analytics-item average">
                            <h1 className="analytics-title | title-normal__semi-bold title-extra-small__semi-bold__mobile-only">$/Recipient</h1>
                            <span className="analytics-number | heading-small title-extra-large__mobile-only">${props.average}</span>
                        </div>
                    </div>
                </div>
                <button className="link-button | button-text button-small" onClick={() => openPopUp(index)}>View Full Report &#8594;</button>
            </li>
        )      
    })

    const [popUpCard, setPopUpCard] = React.useState(0)

    const [popUpState, setPopUpState] = React.useState('off')

    function openPopUp(cardIndex) {
        setPopUpState('on');
        setPopUpCard(cardIndex)
    }
    
    function closePopUp() {
        setPopUpState('off')
    }

    const popUpElement = (
        <section className="pop-up |  z-tier-4" data-display={popUpState}>
            <div className="container">
                <div className="pop-up__wrapper | flow">
                    <div className="card-top">
                        <div className="brand-info">
                            <img src={cardData[popUpCard].logo} alt="" className="card-logo"/>
                            <div>
                                <h1 className="card-brand-name | title-extra-large title-large__mobile-only">{cardData[popUpCard].brandName}</h1>
                                <h3 className="card-duration | title-normal__semi-bold title-small__semi-bold__mobile-only">{cardData[popUpCard].duration} campaign</h3>
                            </div>
                        </div>
                        <span className="card-revenue-rate | title-large title-normal__semi-bold__mobile-only">{cardData[popUpCard].revenueRate} Revenue</span>
                    </div>
                    <div className="card-analytics | flow">
                        <div className="row-1">
                            <div className="analytics-item total">
                                <h1 className="analytics-title | title-large title-small__semi-bold__mobile-only">Total Store Revenue</h1>
                                <span className="analytics-number | heading-large title-extra-large__mobile-only">${cardData[popUpCard].total}</span>
                            </div>
                            <div className="analytics-item via-email">
                                <h1 className="analytics-title | title-large title-small__semi-bold__mobile-only">Via Email Marketing</h1>
                                <span className="analytics-number | heading-large title-extra-large__mobile-only">${cardData[popUpCard].viaEmail}</span>
                            </div> 
                        </div>
                        <div className="row-2">
                            <div className="analytics-item flows">
                                <h1 className="analytics-title | title-normal__semi-bold title-extra-small__semi-bold__mobile-only">Flows</h1>
                                <span className="analytics-number | heading-small title-extra-large__mobile-only">${cardData[popUpCard].flows}</span>
                            </div>                                
                            <div className="analytics-item campaigns">
                                <h1 className="analytics-title | title-normal__semi-bold title-extra-small__semi-bold__mobile-only">Campaigns</h1>
                                <span className="analytics-number | heading-small title-extra-large__mobile-only">${cardData[popUpCard].campaign}</span>
                            </div>                                
                            <div className="analytics-item average">
                                <h1 className="analytics-title | title-normal__semi-bold title-extra-small__semi-bold__mobile-only">$/Recipient</h1>
                                <span className="analytics-number | heading-small title-extra-large__mobile-only">${cardData[popUpCard].average}</span>
                            </div>
                        </div>
                    </div>
                    <div className="pop-up__img-wrapper">
                        <img src={process.env.PUBLIC_URL + "/images/statistic-pop-up.png"} alt="" />
                    </div>
                    <img className="close-button" src={process.env.PUBLIC_URL + "/images/x.svg"} alt="" onClick={closePopUp}/>
                </div>
            </div>
        </section>
    )

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
                {popUpElement}
                <section id="about">
                    <div className="container">
                        <h1 className="about-heading | text-center heading-hero heading-small__mobile-only">Meet Our CEO</h1>
                        <div className="about-wrapper">
                            <div className="details-wrapper">
                                <div className="avatar-wrapper | text-center">
                                    <img src={process.env.PUBLIC_URL + "/images/intersect.png"} alt="" className="avatar | mx-auto"/>
                                    <h2 className="name | heading-small title-extra-large__mobile-only">Davud Gurda</h2>
                                    <h4 className="profession | body-extra-large body-normal__mobile-only">CEO &#38; Founder of Velvstar</h4>
                                </div>
                            </div>
                            <div className="details | body-extra-large body-normal__mobile-only flow">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet porttitor iaculis commodo parturient et eu. Semper vivamus vulputate sed tellus ultricies nullam et. Eget amet, neque morbi in proin tincidunt tortor, fames sed. Est feugiat ipsum magna in. </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet porttitor iaculis commodo parturient et eu. Semper vivamus vulputate sed tellus ultricies nullam et. Eget amet, neque morbi in proin tincidunt tortor, fames sed. Est feugiat ipsum magna in. </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet porttitor iaculis commodo parturient et eu. Semper vivamus vulputate sed tellus ultricies nullam et. Eget amet, neque morbi in proin tincidunt tortor, fames sed. Est feugiat ipsum magna in. </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="contact" className="contact">
                    <div className="container">
                        <div className="contact-wrapper">
                            <div className="form-wrapper | text-center">
                                <h1 className="form-heading | heading-hero">Ready to work with an agency that actually delivers? Get in touch!</h1>
                                <form className="primary-form | mx-auto" action="#" id="contact">
                                    <div className="input-box">
                                        <h2 className="input-title">Full Name</h2>
                                        <img className="input-icon" src={process.env.PUBLIC_URL + "/images/user-icon.svg"} alt="" />
                                        <input type="text" placeholder="Your Full Name" required  minLength='3'/>
                                    </div>
                                    <div className="input-box email">
                                        <h2 className="input-title">Email Address</h2>
                                        <img className="input-icon" src={process.env.PUBLIC_URL + "/images/mail-icon.svg"} alt="" />
                                        <input type="email" placeholder="Email Address" required/>
                                    {/*  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" */}
                                    </div>
                                    <div className="input-box">
                                        <h2 className="input-title">Phone Number</h2>
                                        <img className="input-icon" src={process.env.PUBLIC_URL + "/images/mail-icon.svg"} alt="" />
                                        <input type="text" placeholder="Phone Number" required/>
                                    </div>
                                    <div className="input-box message">
                                        <h2 className="input-title">Message</h2>
                                        <textarea name="Message" form="contact" placeholder="Your Message"></textarea>
                                    </div>
                                    <button className="submit-button">
                                        <input className="button-primary" type="submit" value="Send Message"/>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
    )
}

export default Main;