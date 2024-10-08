import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <main className="main-section">
        <h1>Elhadj Abdoul Diallo 👨🏻‍💻 </h1>
        <p>Software Engineer | Speaker | Volunteer</p>
        <p>
          Thank you for swinging by. In this website you will find all the
          projects I have been working on since I joined{" "}
          <a href="https://codeyourfuture.io/">Code Your Future</a>
        </p>
        <p><Link className="checkout-my-work-btn" to="/portfolio">Checkout my work</Link></p>
      </main>
    </>
  );
};

export default HomePage;
