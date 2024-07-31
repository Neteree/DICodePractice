import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./RestaurantList.css";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5001/restaurants");
      const data = await response.json();
      setRestaurants(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Restaurants</h1>
      <ul className="restaurantList">
        {restaurants.map((restaurant) => {
          return (
            <li className="restaurantListItem" key={restaurant.id}>
              <img src={restaurant.image} alt={restaurant.name}></img>
              <section>
                <h2 className="restaurantListItemName">{restaurant.name}</h2>
                <p>{restaurant.description}</p>
                <Link
                  className="reserveNow"
                  to={`/restaurants/${restaurant.id}`}
                >
                  Reserve now →
                </Link>
              </section>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default RestaurantList;
