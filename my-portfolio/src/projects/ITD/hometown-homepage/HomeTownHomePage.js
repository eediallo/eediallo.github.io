import React, { useState } from "react";
import tinkaMountain from "./images/Tinka-mountain.jpg";
import dalabaTourism from "./images/dalaba-tourism.webp";
import highestAltitude from "./images/highest-altitude.jpeg";
import mariamMakeba from "./images/Mariam-makeba.jpeg";
import potatoes from "./images/potatoes.jpeg";
import profilePicture from "./images/profile-picture.png";
import "./home-town-home-page.css";
import lightModeIcon from './images/light-mode.svg'
import darkModeIcon from './images/dark-mode.svg'


const HomeTownHomePage = () => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleMode = () => {
        setDarkMode(!darkMode);
    };


    return (
        <div className={`home-town-home-page ${darkMode ? "dark-mode" : ""}`}>
            <div className="hero">
                <button onClick={toggleMode} className="material-symbols-outlined">
                <img className="toggle_btn_icon" src={darkMode ? lightModeIcon : darkModeIcon} alt="Toggle Dark Mode" />
                </button>
                <h1 className="title">
                    <span id="title">Visit Dalaba</span>
                </h1>
                <p>
                    <span id="sub-title">
                        Enjoy culture and waterfalls in the highest town (in altitude) in{" "}
                        <span id="guinea">Guinea</span>
                    </span>
                </p>
            </div>
            <h2>Fun facts about Dalaba</h2>

            <div className="fun-facts">
                <div>
                    <img width="300px" src={tinkaMountain} alt="Tinka Mountain" />
                    <h4>Mountainous town</h4>
                    <p>
                        Home of 11 named mountains with{" "}
                        <a href="https://peakvisor.com/peak/mont-tinka.html">Mont Thinka</a>{" "}
                        the highest
                    </p>
                </div>

                <div>
                    <img width="300px" src={dalabaTourism} alt="Dalaba Tourism" />
                    <h4>Tourist destination</h4>
                    <p>
                        Home of many tourist destinations including the{" "}
                        <a href="https://www.tripadvisor.com/Attraction_Review-g19093145-d28130553-Reviews-Chutes_De_Ditinn-Dalaba_Mamou_Region.html">
                            Chute de Ditinn
                        </a>
                    </p>
                </div>

                <div>
                    <img width="300px" src={highestAltitude} alt="Highest Altitude" />
                    <h4>Highest in altitude in Guinea</h4>
                    <p>
                        It is approximately 200 km by air from the capital Conakry and about
                        280 km by road
                    </p>
                </div>

                <div>
                    <img width="300px" src={mariamMakeba} alt="Mariam Makeba" />
                    <h4>Home to Miriam Makeba</h4>
                    <p>
                        It was once home to{" "}
                        <a
                            href="https://en.wikipedia.org/wiki/Miriam_Makeba"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Miriam Makeba
                        </a>
                    </p>
                </div>

                <div>
                    <img width="300px" src={potatoes} alt="Potatoes" />
                    <h4>Town of farmers</h4>
                    <p>
                        Dalaba produces the majority of potatoes consumed in Guinea and
                        neighboring countries.
                    </p>
                </div>
            </div>
            <div id="about-me">
                <div className="profile-description">
                    <h3>Your guide</h3>
                    <p>
                        I was born in Dalaba and grew up in Conakry (capital city of
                        Guinea). I am passionate about sharing the vibrant culture, history,
                        and beauty of my city and its surroundings. I believe in creating
                        memorable experiences for travelers by blending storytelling with
                        immersive activities. Whether you're interested in art, history,
                        food, or adventure, I tailor each tour to meet your interests and
                        ensure you discover the authentic essence of Dalaba.
                    </p>
                </div>
                <div className="profile-pic">
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img
                        width="250px"
                        height="250px"
                        src={profilePicture}
                        alt="profile"
                    />
                </div>
            </div>

            <h3>Contact me</h3>
            <form action="">
                <label htmlFor="fname">First Name:</label>
                <input type="text" name="fname" id="fname" />
                <label htmlFor="lname">Last Name:</label>
                <input type="text" name="lname" id="lname" /> <br />
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" id="email" /> <br />
                <label htmlFor="message">Your message:</label>
                <textarea name="message" id="message"></textarea>
                <input type="submit" name="submit" id="submit-btn" value="Submit" />
            </form>

            <footer>
                <p>&copy;2024 EDA Technology. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomeTownHomePage;
