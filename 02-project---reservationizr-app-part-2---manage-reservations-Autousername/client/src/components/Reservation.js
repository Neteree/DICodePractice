import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { formatDate } from "../utils/formatDate";
import { useAuth0 } from "@auth0/auth0-react";
import "./Reservation.css";

const Reservation = () => {
  const { id } = useParams();
  const [reservation, setReservation] = useState({});
  const [isNotFound, setIsNotFound] = useState(false);
  const { getAccessTokenSilently } = useAuth0();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = await getAccessTokenSilently();
      const response = await fetch(`http://localhost:5001/reservations/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok === false) {
        setIsNotFound(true);
        return;
      }

      const data = await response.json();

      setReservation(data);
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isNotFound) {
    return (
      <>
        <p className="reservationNotFoundParagraph">
          <strong>Sorry! We can't find that reservation</strong>
        </p>

        <Link className="reservationBackLink" to="/reservations">
          ← Back to reservations
        </Link>
      </>
    );
  } else {
    return (
      <>
        <div className="reservation">
          <h1 className="reservationName">{reservation.restaurantName}</h1>
          <p>{reservation.date && formatDate(reservation.date)}</p>
          <p>
            <strong>Party size: </strong>
            {reservation.partySize}
          </p>
        </div>

        <Link className="reservationBackLink" to="/reservations">
          ← Back to reservations
        </Link>
      </>
    );
  }
};

export default Reservation;
