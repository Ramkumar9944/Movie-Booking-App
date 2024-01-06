import { useState, useEffect } from "react";
import Menu from "../components/Menu/Menu";
import MovieMenu from "../components/Menu/MovieMenu";
import Leo from "../assets/Leo.jpg";
import Jailer from "../assets/Jailer.jpg";
import Jigarthanda from "../assets/jigar.jpg";
import Vadachennai from "../assets/Vadachennai2.jpg";
import Vikram from "../assets/Vikram.jpeg";
const HomePage = (props) => {
  const [movieData, setMovieData] = useState("");
  const selectedMovieHandler = (movie) => {
    props.selectedMovie(movie);
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://ghost-37ddc-default-rtdb.firebaseio.com/BookmyTickets.json",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      const loadedData = [];
      const imageList = [
        { id: "t1", image: Leo },
        { id: "t2", image: Jailer },
        { id: "t3", image: Vadachennai },
        { id: "t4", image: Vikram },
        { id: "t5", image: Jigarthanda },
      ];
      let i = 0;
      for (const id in responseData) {
        loadedData.push({
          id: id,
          movie: responseData[id].movie,
          theatre: responseData[id].theatre,
          city: responseData[id].city,
          image: imageList[i].image,
          language: responseData[id].language,
          certificate: responseData[id].certificate,
          duration: responseData[id].duration,
        });
        i++;
      }
      setMovieData(loadedData);
    };
    fetchData().catch((error) => {});
  }, []);
  const filteredMovies =
    movieData &&
    movieData.filter((movie) => {
      return movie.city === props.location;
    });
  props.onfilteredMovies(filteredMovies);
  return (
    <div>
      <Menu movieData={movieData} />
      <MovieMenu
        Movies
        movieData={filteredMovies}
        selectedMovie={selectedMovieHandler}
      />
    </div>
  );
};
export default HomePage;
