import { useState } from "react";
import "./TicketBooking.css";
import Tickets from "../../assets/tickets.png";
import Cinema from "../../assets/cinema.png";
const TicketBooking = (props) => {
  const [submit, setSubmit] = useState(false);
  const SubmitBookingHandler = (event) => {
    event.preventDefault();
    setSubmit(true);
  };
  return (
    <div className="open-modal">
      <div className="booking-modal">
        {!submit && (
          <form className="booking-form">
            <button className="close" onClick={props.closeClicked}>
              X
            </button>
            <img className="tickets-logo" src={Tickets} alt="tickets" />
            <label
              style={{
                margin: "1rem",
                position: "relative",
                top: "3.2rem",
                right: "15%",
              }}
            >
              Number of Tickets
            </label>
            <input
              type="number"
              min="1"
              max="10"
              style={{
                margin: "2rem",
                padding: "0.5rem",
                width: "3rem",
                position: "relative",
                top: "3rem",
                right: "15%",
              }}
            ></input>
            <br></br>
            <button
              style={{
                position: "relative",
                top: "1.5rem",
                margin: "2rem",
              }}
              onClick={SubmitBookingHandler}
            >
              Submit
            </button>
          </form>
        )}
        {submit && (
          <div>
            <img className="cinema-logo" src={Cinema} alt="cinema" />
            <h3>Ticket Registered Successfully!</h3>
            <br></br>
            <button className="OK" onClick={props.okClicked}>
              OK
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default TicketBooking;
