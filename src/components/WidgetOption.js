import React from 'react'
import '../Css/WidgetOption.css'
import mobile from '../assets/Widget/mobile.png'
import java from '../assets/Widget/java.png'
import art from '../assets/Widget/art.jpeg'
import mern from '../assets/Widget/marn.png'
import market from '../assets/Widget/market.jpg'
import architechture from '../assets/Widget/architecture.jpeg'

function WidgetOption() {
    return (
        <div className="widget__contents">
            <div className="widget__content">
                <img
                    src={mobile}
                    alt=""
                />
                <div className="widget__contentTitle">
                    <h5>Mobile App Programmer</h5>
                    <p>The best Mobile App Development Company</p>
                </div>
            </div>
            <div className="widget__content">
                <img
                    src={java}
                    alt=""
                />
                <div className="widget__contentTitle">
                    <h5>Java developer</h5>
                    <p>Daily dosage of unforgettable lines from ...</p>
                </div>
            </div>
            <div className="widget__content">
                <img
                    src={art}
                    alt=""
                />
                <div className="widget__contentTitle">
                    <h5>Art & Artist</h5>
                    <p>A Space retated to creating, practicing an...</p>
                </div>
            </div>
            <div className="widget__content">
                <img
                    src={mern}
                    alt=""
                />
                <div className="widget__contentTitle">
                    <h5>MERN Developer</h5>
                    <p>A Space dedicated to great work of Friedrich...</p>
                </div>
            </div>
            <div className="widget__content">
                <img
                    src={market}
                    alt=""
                />
                <div className="widget__contentTitle">
                    <h5>Stock Market Strategies</h5>
                    <p>Everything about investing in Stock...</p>
                </div>
            </div>
            <div className="widget__content">
                <img
                    src={architechture}
                    alt=""
                />
                <div className="widget__contentTitle">
                    <h5>Architecture World</h5>
                    <p>All about civil architecture...</p>
                </div>
            </div>
        </div>
    )
}
export default WidgetOption;
