import { useState } from "react";
import Card from "../UI/Card/Card";
import { NavLink } from "react-router-dom";
import "./Movies.css";
const Movies = (props) => {
  const [filteredMovies, setFilteredMovies] = useState(props.movies);
  const TamilFilterHandler = () => {
    setFilteredMovies(
      props.movies &&
        props.movies.filter((movie) => {
          return movie.language === "Tamil";
        })
    );
  };
  const MalayalamFilterHandler = () => {
    setFilteredMovies(
      props.movies &&
        props.movies.filter((movie) => {
          return movie.language === "Malayalam";
        })
    );
  };
  const HindiFilterHandler = () => {
    setFilteredMovies(
      props.movies &&
        props.movies.filter((movie) => {
          return movie.language === "Hindi";
        })
    );
  };
  const TeluguFilterHandler = () => {
    setFilteredMovies(
      props.movies &&
        props.movies.filter((movie) => {
          return movie.language === "Telugu";
        })
    );
  };
  const KannadaFilterHandler = () => {
    setFilteredMovies(
      props.movies &&
        props.movies.filter((movie) => {
          return movie.language === "Kannada";
        })
    );
  };
  const filteredMovieCard =
    filteredMovies &&
    filteredMovies.map((movie) => (
      <div className="filtered-movie-container">
        <NavLink to="/movie-details">
          <img
            className="filtered-movie-image"
            onClick={() => {
              props.selectedMovie({
                name: movie.movie,
                image: movie.image,
                theatre: movie.theatre,
                duration: movie.duration,
                certificate: movie.certificate,
              });
            }}
            key={movie.id}
            id={movie.id}
            src={`${movie.image}`}
            alt=""
            style={{ height: "25rem", width: "15rem" }}
          />
        </NavLink>
      </div>
    ));
  return (
    <section>
      <h1 className="movie-heading">MOVIES</h1>
      <div className="Languages">
        <span className="language-title">Languages</span>
        <div className="language-design" onClick={TamilFilterHandler}>
          Tamil
        </div>
        <div className="language-design" onClick={MalayalamFilterHandler}>
          Malayalam
        </div>
        <div className="language-design" onClick={HindiFilterHandler}>
          Hindi
        </div>
        <div className="language-design" onClick={TeluguFilterHandler}>
          Telugu
        </div>
        <div className="language-design" onClick={KannadaFilterHandler}>
          Kannada
        </div>
      </div>
      <Card className="filtered-movie-card-container">{filteredMovieCard}</Card>
    </section>
  );
};
export default Movies;
