import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CreateReservation from "./CreateReservation";
import "./Restaurant.css";

const Restaurant = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5001/restaurants/${id}`);
      // FIXME: Make a fetch request and call setRestaurant with the response body
      const data = await response.json();

      setRestaurant(data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="restaurant">
        <img src={restaurant.image} alt={restaurant.name}></img>
        <section>
          <h1 className="restaurantName">{restaurant.name}</h1>
          <p>{restaurant.description}</p>
        </section>
      </div>

      <CreateReservation restaurantName={restaurant.name} />
    </>
  );
};

export default Restaurant;
