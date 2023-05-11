import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import RootLayout from "./components/Root";
import HomePage from "./components/HomePage";
import MovieListingPage from "./components/MovieListingPage";
import MovieDetailsPage from "./components/MovieDetailsPage";
import "./App.css";

function App() {
  const [newlocation, setLocation] = useState("");
  const [updatedMovies, setUpdatedMovies] = useState("");
  const [selectedMovie, setSelectedMovie] = useState("");
  const locationHandler = (value) => {
    setLocation(value);
  };
  const FilteredMovieHandler = (movies) => {
    setUpdatedMovies(movies);
  };
  const SelectedMovieHandler = (movie) => {
    setSelectedMovie(movie);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout onSetLocation={locationHandler} />,
      children: [
        {
          index: true,
          element: (
            <HomePage
              location={newlocation}
              onfilteredMovies={FilteredMovieHandler}
              selectedMovie={SelectedMovieHandler}
            />
          ),
        },
        {
          path: "movie-list",
          element: (
            <MovieListingPage
              movies={updatedMovies}
              selectedMovie={SelectedMovieHandler}
            />
          ),
        },
        {
          path: "movie-details",
          element: <MovieDetailsPage movie={selectedMovie} />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
