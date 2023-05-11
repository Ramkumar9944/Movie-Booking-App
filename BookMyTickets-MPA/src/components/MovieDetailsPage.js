import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Movie from "../components/Movies/Movie";
import TicketBooking from "../components/TicketBooking/TicketBooking";
const MovieDetailsPage = (props) => {
  const navigate = useNavigate();
  const [timingClicked, setTimingClicked] = useState(false);
  const TimingHandler = () => {
    setTimingClicked(true);
  };
  const CloseModalHandler = () => {
    setTimingClicked(false);
  };
  const okClickHandler = () => {
    setTimingClicked(false);
    navigate("/");
  };
  return (
    <div>
      <Movie movie={props.movie} onTiming={TimingHandler} />
      {timingClicked && (
        <TicketBooking
          closeClicked={CloseModalHandler}
          okClicked={okClickHandler}
        />
      )}
    </div>
  );
};
export default MovieDetailsPage;
