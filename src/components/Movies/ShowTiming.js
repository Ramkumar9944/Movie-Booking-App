import { useState } from "react";
import "./ShowTiming.css";
const ShowTiming = (props) => {
  const [timingClicked, setTimingClicked] = useState(false);
  let timing;
  const TimingHandler = (value) => {
    setTimingClicked(true);
    timing = value.target.innerText;
    props.onTiming({ clicked: timingClicked, time: timing });
  };
  return (
    <section className="theatre">
      <h1>{props.theatre}</h1>
      <div
        className="morning"
        onClick={TimingHandler}
        style={{ color: "green", border: "1px solid green" }}
      >
        10 AM
      </div>
      <div
        className="afternoon"
        onClick={TimingHandler}
        style={{ color: "green", border: "1px solid green" }}
      >
        2 PM
      </div>
      <div
        className="evening"
        onClick={TimingHandler}
        style={{ color: "green", border: "1px solid green" }}
      >
        6 PM
      </div>
      <div
        className="night"
        onClick={TimingHandler}
        style={{ color: "green", border: "1px solid green" }}
      >
        10 PM
      </div>
    </section>
  );
};
export default ShowTiming;
