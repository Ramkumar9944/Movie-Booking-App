import ShowTiming from "./ShowTiming";
import "./Movie.css";
const Movie = (props) => {
  return (
    <div>
      <div className="synopsis">
        <img
          className="movie-image"
          src={`${props.movie.image}`}
          alt="sample"
        />
        <div className="movie-details">{props.movie.name}</div>
        <div className="description">
          <div>Certificate : {props.movie.certificate}</div>
          <div>Duration : {props.movie.duration}</div>
        </div>
      </div>
      <ShowTiming theatre={props.movie.theatre} onTiming={props.onTiming} />
    </div>
  );
};
export default Movie;
