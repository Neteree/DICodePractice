import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";

const App = () => {
  const [properties, setProperties] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:5001/properties");
    const data = await response.json();

    setProperties(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <h1>Properties for sale</h1>

        {properties.map(
          ({ address, askingPrice, description, id, img, title }) => {
            return (
              <li key={id}>
                <img src={img} alt={address} />
                <h2>{title}</h2>
                <p>{address}</p>
                <p>{askingPrice}</p>
                <p>{description}</p>
              </li>
            );
          }
        )}
      </div>
    </>
  );
};

export default App;
