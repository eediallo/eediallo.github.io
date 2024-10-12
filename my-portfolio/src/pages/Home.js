import { Link } from "react-router-dom";
import ProfilePicture from "../images/profile-picture.jpg";

const HomePage = () => {
  return (
    <>
      <main className="main-home">
        <div><img id="profile-picture" src={ProfilePicture} alt="Profile picture of Elhadj Abdoul Diallo"></img></div>
        <div>
      <p id="title">Software Engineer | Speaker | Volunteer</p>
        <h1 id="name">Elhadj Abdoul Diallo 👨🏻‍💻 </h1>
        <p>
          Thank you for swinging by. In this website you will find all the
          projects I have been working on since I joined{" "}
          <a href="https://codeyourfuture.io/">Code Your Future</a>
        </p>
        <p><Link className="checkout-my-work-btn" to="/portfolio">Checkout my work</Link></p>
        </div>
      </main>
    </>
  );
};

export default HomePage;
