import React from "react";

export default function Card(props) {
    return (
        <li className="carousel-card__wrapper">
            <div>
                <img src={props.logo} alt="" className="card-logo"/>
                <h1 className="card-brand-name">{props.brandName}</h1>
                <h3 className="card-duration">{props.duration} campaign</h3>
                <span className="card-revenue-rate">{props.revenueRate} Revenue</span>
            </div>
            <div className="card-analytics">
                <div className="total">
                    <h1 className="analytics-title">Total Store Revenue</h1>
                    <span className="analytics-number">${props.total}</span>
                </div>
                <div className="via-email">
                    <h1 className="analytics-title">Via Email Marketing</h1>
                    <span className="analytics-number">${props.viaEmail}</span>
                </div>                                
                <div className="flows">
                    <h1 className="analytics-title">Flows</h1>
                    <span className="analytics-number">${props.flows}</span>
                </div>                                
                <div className="campaigns">
                    <h1 className="analytics-title">Campaigns</h1>
                    <span className="analytics-number">${props.campaign}</span>
                </div>                                
                <div className="average">
                    <h1 className="analytics-title">$/Recipient</h1>
                    <span className="analytics-number">${props.average}</span>
                </div>
            </div>
            <button className="link-button">View Full Report &#8594;</button>
        </li>
    )
}