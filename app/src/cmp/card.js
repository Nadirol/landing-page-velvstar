import React from "react";

export default function Card(props) {
    return (
        <li className="slider-card__wrapper | flow">
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
            <button className="link-button | button-text button-small">View Full Report &#8594;</button>
        </li>
    )
}