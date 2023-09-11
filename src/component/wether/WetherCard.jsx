import React from 'react'
import banner from '../../assets/moon.webp'

const WetherCard = ({ tempInfo }) => {
    const {
        temp,
        humidity,
        visibility,
        pressure,
        name,
        speed,
        country,
        sunset,
        sunrise,
    } = tempInfo;

    let sec = sunset;
    let date = new Date(sec * 1000);
    let timestr = `${date.getHours()}:${date.getMinutes()}`
    let secsunrise = sunrise;
    let datesunsise = new Date(secsunrise * 1000);
    let timesunrise = `${datesunsise.getHours()}:${datesunsise.getMinutes()}`

    const datet = new Date();

    // get the date as a string
    const currentdate = datet.toDateString();

    // get the time as a string
    const currenttime = datet.toLocaleTimeString();
    return (
        <>
            <div className="wether-deatils">
                <div className="wether-left">
                    <div className="banner">
                        <img src={banner} alt="" />
                    </div>
                    <div className="w-main-details">
                        <img src="image/moon.webp" alt="" />
                        <h1>{temp} <sup>o C</sup></h1>
                        <hr />
                        <div className="wether-description">
                            <div className="w-condition">sunny</div>
                            <div className="place">{name}, {country}</div>
                        </div>
                    </div>
                </div>
                <div className="wether-right">
                    <div className="wether-data">
                        <div className="highlight-container">
                            <div className="highlight-text">
                                <h3>Wether's Highlight</h3>
                            </div>
                            <div className="highlight-box-container">
                                <div className="highlight-box">
                                    <span>Date & Time</span><br /><br />
                                    <div className="date-time">
                                        <span>Date : {currentdate}</span>
                                        <span>Time : {currenttime}</span>
                                    </div>
                                </div>
                                <div className="highlight-box">
                                    <span>Wind Status</span><br />
                                    <h1>{speed} <sub>km/h</sub></h1>
                                </div>
                                <div className="highlight-box">
                                    <span>Sunrise & Sunset</span><br /><br />
                                    <div className="sunset">
                                        <span>{timestr} PM</span>
                                        <span>{timesunrise} AM</span>
                                    </div>
                                </div>
                                <div className="highlight-box">
                                    <span>Humidity</span><br />
                                    <h1>{humidity}%</h1>
                                </div>
                                <div className="highlight-box">
                                    <span>Visibility</span><br />
                                    <h1>{visibility} <sub>km/h</sub></h1>
                                </div>
                                <div className="highlight-box">
                                    <span>Air Quality</span><br />
                                    <h1>{pressure}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default WetherCard;