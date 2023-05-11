import { useState } from "react";
import "./LocationModal.css";
import TamilNadu from "../../assets/sri-ranganathasvamy.png";
import Kerala from "../../assets/relax.png";
import Bengaluru from "../../assets/bangalore-metro-logo.png";
import Delhi from "../../assets/gate-of-india.png";
import Mumbai from "../../assets/india-gate.png";
const LocationModal = (props) => {
  const [locationselected, setLocationselected] = useState(false);
  const LocationHandler = (value) => {
    props.onValue(value.target.innerText);
    setLocationselected(true);
    props.onSelected(locationselected);
  };
  return (
    <div className="location">
      <div>
        <img src={TamilNadu} alt="tamilnadu" />
        <h4 onClick={LocationHandler}>Chennai</h4>
      </div>
      <div>
        <img src={Bengaluru} alt="bengaluru" />
        <h4 onClick={LocationHandler}>Bengaluru</h4>
      </div>
      <div>
        <img src={Mumbai} alt="mumbai" />
        <h4 onClick={LocationHandler}>Mumbai</h4>
      </div>
      <div>
        <img src={Kerala} alt="kerala" />
        <h4 onClick={LocationHandler}>Kochi</h4>
      </div>
      <div>
        <img src={Delhi} alt="delhi" />
        <h4 onClick={LocationHandler}>Delhi</h4>
      </div>
    </div>
  );
};

export default LocationModal;
