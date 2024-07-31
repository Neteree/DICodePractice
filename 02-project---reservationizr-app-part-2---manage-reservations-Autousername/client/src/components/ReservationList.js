import React, { useState, useEffect } from "react";
import "./ReservationList.css";
import { formatDate } from "../utils/formatDate";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = await getAccessTokenSilently();
      const response = await fetch("http://localhost:5001/reservations", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      setReservations(data);
    };

    fetchData();
  }, []);

  if (reservations.length === 0) {
    return (
      <>
        <h1>Upcoming reservations</h1>
        <p className="reservationListEmptyParagraph">
          You don't have any reservations.
        </p>
        <Link className="reservationListItemLink" to="/">
          View the restaurants
        </Link>
      </>
    );
  }

  return (
    <>
      <h1>Upcoming reservations</h1>
      <ul className="reservationList">
        {reservations.map((reservation) => {
          return (
            <li className="reservationListItem" key={reservation.id}>
              <h2 className="reservationListItemName">
                {reservation.restaurantName}
              </h2>
              <p className="reservationListItemParagraph">
                {formatDate(reservation.date)}
              </p>
              <Link
                className="reservationListItemLink"
                to={`/reservations/${reservation.id}`}
              >
                View details →
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ReservationList;
