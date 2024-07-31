import { useEffect, useState } from "react";
import "./ReservationList.css";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/formatDate";

const ReservationList = () => {
  const [reservationList, setReservationList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5001/reservations`);
      const data = await response.json();
      setReservationList(data);
    };

    fetchData();
  }, []);

  console.log(reservationList);
  return (
    <>
      <h1>Upcoming reservations</h1>
      <ul className="reservationList">
        {reservationList.map(({ date, id, restaurantName }) => {
          return (
            <li className="reservation reservationListItem" key={id}>
              <h2 className="reservationListHeading">{restaurantName}</h2>
              <p className="reservationDate">{formatDate(date)}</p>
              <Link className="reservationListLink" to={`/reservations/${id}`}>
                View details &rarr;
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ReservationList;
