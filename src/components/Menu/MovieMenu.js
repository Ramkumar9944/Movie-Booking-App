import "./MovieMenu.css";
import Card from "../UI/Card/Card";
import { NavLink, useNavigate } from "react-router-dom";
const MovieMenu = (props) => {
  const navigate = useNavigate();
  const seeAllclickHandler = () => {
    navigate("/movie-list");
  };
  const movieCard =
    props.movieData &&
    props.movieData.map((movie) => (
      <div className="movie-container">
        <NavLink style={{ textDecoration: "none" }} to="/movie-details">
          <img
            className="movie-menu-image"
            key={movie.id}
            id={movie.id}
            src={`${movie.image}`}
            alt=""
            style={{ height: "25rem", width: "15rem" }}
            onClick={() => {
              props.selectedMovie({
                name: movie.movie,
                image: movie.image,
                theatre: movie.theatre,
              });
            }}
          />
        </NavLink>
        <h4>Movie : {movie.movie}</h4>
        <h4>Certificate : {movie.certificate}</h4>
      </div>
    ));
  return (
    <div>
      <div className="movie-container-title">
        <h2>Recommended Movies</h2>
        <button onClick={seeAllclickHandler}>See All &raquo; </button>
      </div>

      <Card>
        <div className="movie-card-container">{movieCard}</div>
      </Card>
    </div>
  );
};
export default MovieMenu;
