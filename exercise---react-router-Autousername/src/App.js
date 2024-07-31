import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to my movie review website.</p>
    </div>
  );
};

const Reviews = () => {
  return (
    <div>
      <h2>Reviews Page</h2>
      <ul className="reviews">
        <li>
          <h3>
            Forrest Gump <span>10/10</span>
          </h3>
          <p>
            This movie is perfect. You never get bored of it. The characters are
            so enlightening and I find myself nodding along. All of these
            characters are strong, and Tom Hanks delivers an absolute stunning
            role as Forrest Gump.
          </p>
        </li>
        <li>
          <h3>
            The Godfather <span>10/10</span>
          </h3>
          <p>
            It does't get much better than this. Brilliant acting writing
            directing. Scenes are timed perfectly and done perfectly. Something
            small can be made riveting with the power of coppola.
          </p>
        </li>
        <li>
          <h3>
            The Dark Knight <span>10/10</span>
          </h3>
          <p>
            Christopher Nolan brought the full potential out of the iconic
            Batman vs Joker conflict. It's not perfect movie, but from a
            storytelling perspective it's a masterpiece with great acting. The
            camera work gets a little hammy it's nonetheless filled with fun and
            visually appealing moments.
          </p>
        </li>
      </ul>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <h2>Contact Page</h2>
      <p>
        Get in touch via <a href="mailto:reviews@myreviews.com">email</a>
      </p>
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <h1>Movie Reviews</h1>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <main className="main">
        <Routes>
          <Route path="reviews" element={<Reviews />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
