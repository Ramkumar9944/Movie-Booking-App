import Movies from "../components/Movies/Movies";
const MovieListingPage = (props) => {
  const selectedMovieHandler = (movie) => {
    props.selectedMovie(movie);
  };
  return (
    <div>
      <Movies movies={props.movies} selectedMovie={selectedMovieHandler} />
    </div>
  );
};
export default MovieListingPage;
