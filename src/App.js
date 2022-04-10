import { Container, Row } from "react-bootstrap";
import "./App.css";
import { Title } from "./components/title/Title";
import { SearchForm } from "./components/search-form/SearchForm";
import { CustomCard } from "./components/card/CustomCard";
import { MovieList } from "./components/movie-list/MovieList";
import { fetchMovie } from "./helper/axiosHelper";
import { useState, useEffect } from "react";

function App() {
  // All the hooks have to be created at the top level, it can't be
  // written inside a function.
  const [searchedMovie, setSearchMovie] = useState({});
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    // console.log("useEffect executed...")
    // create random character
    const char = randomChar();
    getMovie(char);
    console.log;
  }, []);

  const getMovie = async (search) => {
    // console.log(search);
    const movie = await fetchMovie(search);
    setSearchMovie(movie.data);
    console.log(movie.data);
  };

  /// Create a function to delete movie from list
  const deleteMovie = (imdbID) => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      // alert(imdbID);

      const filteredMovieList = movieList.filter(
        (movie) => movie.imdbID !== imdbID
      );
      setMovieList(filteredMovieList);
    }
  };

  //// Create a function
  const addToMovieList = (type) => {
    // const mv = { ...searchedMovie, category: type }; instead of this line #26
    setMovieList([...movieList, { ...searchedMovie, category: type }]);
    setSearchMovie({}); // setting the movielist empty, passing the empty object
  };

  console.log(searchedMovie, movieList);

  return (
    <div className="wrapper">
      <Container>
        <Title />
        <SearchForm getMovie={getMovie} />
        {searchedMovie?.imdbID && (
          <CustomCard movieObj={searchedMovie} func={addToMovieList} />
        )}
        <hr />
        <MovieList movieList={movieList} deleteMovie={deleteMovie} />
      </Container>
    </div>
  );
}

export default App;
