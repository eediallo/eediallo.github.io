import { Link } from "react-router-dom";
import ProfilePicture from "./images/ProfilePicture.png";
import "./PersonalSite.css";

const PersonalSiteProject = () => {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const age = currentYear - 1998
    return (
        <div>
            <img src={ProfilePicture} alt="Profile of Elhadj" />
            
            <h1>Hi, my name is Elhadj</h1>
            <h2>Fun facts about me:</h2>

            <ul>
                <li>{age} years old</li>
                <li>Live in London</li>
                <li>Run the Big Half Marathon 2024</li>
            </ul>
            <p>
                Please connect with me on{" "}
                <a href="https://www.linkedin.com/in/abdoul224diallo/">Linkedln here</a>
            </p>
            <input type="email" placeholder="Enter email..." />
            <br />
            <button>Join newsletter</button>
            <p>
                Return to <Link to="/">Home Page</Link>
            </p>
        </div>
    );
};

export default PersonalSiteProject;
