import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = (props) => {
  let username;
  const [siginClicked, setSigninClicked] = useState(false);
  const [clicked, setClicked] = useState(false);
  let actualLocation = props.location;
  let location;
  if (actualLocation === "") {
    location = "Chennai";
  } else {
    location = actualLocation;
  }
  props.onSetLocation(location);
  const LocationChangeHandler = () => {
    setClicked(true);
    props.onSelected(clicked);
  };
  const SigninHandler = (event) => {
    window.stop();
    event.preventDefault();
    setSigninClicked(true);
    props.onSignin(siginClicked);
  };
  if (props.loggedinStatus.success) {
    username = (
      <div
        style={{
          position: "relative",
          fontWeight: "bolder",
          left: "10rem",
        }}
      >{`Hi ${props.loggedinStatus.name}`}</div>
    );
  } else {
    username = (
      <button type="button" onClick={SigninHandler}>
        Login
      </button>
    );
  }
  return (
    <div>
      <div className="header">
        <NavLink style={{ textDecoration: "none" }} to="/">
          <h1>BookMyTickets</h1>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/movie-list">
          <div className="header-movie">Movies</div>
        </NavLink>
        {/* <div className="header-movie" onClick={props.movieClick}>
          Movies
        </div> */}
        <div className="location-action" onClick={LocationChangeHandler}>
          {location}
        </div>
        <div className="login-button">{username}</div>
      </div>
    </div>
  );
};
export default Header;
