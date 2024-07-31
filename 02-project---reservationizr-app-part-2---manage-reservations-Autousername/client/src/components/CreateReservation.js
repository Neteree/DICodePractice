import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import { useAuth0 } from "@auth0/auth0-react";
import "react-datepicker/dist/react-datepicker.css";
import "./CreateReservation.css";

const CreateReservation = ({ restaurantName }) => {
  const [partySize, setPartySize] = useState(1);
  const [date, setDate] = useState(Date.now());
  const navigate = useNavigate();
  const { getAccessTokenSilently } = useAuth0();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const accessToken = await getAccessTokenSilently();
    const reservation = { partySize, date, restaurantName };

    if (date < Date.now()) {
      reservation.date = Date.now() + 1000;
    }

    await fetch("http://localhost:5001/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(reservation),
    });

    navigate("/reservations");
  };

  return (
    <>
      <h2 className="createReservationName">Reserve {restaurantName}</h2>
      <form onSubmit={handleSubmit}>
        <div className="createReservationFormGroup">
          <label htmlFor="partySize">Number of guests</label>
          <input
            className="createReservationInput"
            id="partySize"
            value={partySize}
            type="number"
            min="1"
            onChange={(event) => setPartySize(event.target.value)}
            required
          />
        </div>

        <div className="createReservationFormGroup">
          <label htmlFor="date">Date</label>
          <DatePicker
            className="createReservationInput"
            id="date"
            showTimeSelect
            dateFormat="Pp"
            minDate={Date.now()}
            filterTime={(time) =>
              new Date(time).getTime() > new Date().getTime()
            }
            selected={date}
            onChange={(date) => setDate(date)}
            required
          />
        </div>
        <button className="createReservationButton">Submit</button>
      </form>
    </>
  );
};

export default CreateReservation;
