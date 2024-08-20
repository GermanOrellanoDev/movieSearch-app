import "./styles/MovieSearchApp.css";
import { useState } from "react";

export const MovieSearchApp = () => {
  const url = "https://api.themoviedb.org/3/search/movie";
  const apiKey = import.meta.env.VITE_API_KEY;

  const [movieSearch, setMovieSearch] = useState("");
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleImputChange = (e) => {
    setMovieSearch(e.target.value);
  };

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${url}?query=${movieSearch}&api_key=${apiKey}`
      );
      const data = await response.json();

      if (Array.isArray(data.results) && data.results.length > 0) {
        setMovie(data.results || []);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No results found!",
          width: "400px",
          customClass: {
            title: "custom-title",
            text: "custom-text",
            confirmButton: "custom-confirm-button",
          },
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while searching for movies",
        customClass: {
          title: "custom-title",
          text: "custom-text",
          confirmButton: "custom-confirm-button",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovies();
  };

  return (
    <div className="container">
      <h1 className="title-page">Buscador de películas</h1>
      <form onSubmit={handleSubmit} className="mb-1 form-container">
        <label htmlFor="formGroupExampleInput" className="form-label">
          Ingrese el título de la película
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="¿Qué película desea buscar?"
          value={movieSearch}
          onChange={handleImputChange}
        />
        <button type="submit" className="btn btn-primary">
          Buscar
        </button>
      </form>

      {loading ? (
        <div className="d-flex justify-content-center spinner">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="card-container">
          {movie.map((each) => (
            <div key={each.id} className="card">
              <img
                src={`https://image.tmdb.org/t/p/w500/${each.poster_path}`}
                className="card-img-top"
                alt={each.title}
              />
              <div className="card-body">
                <p className="card-text">{each.overview}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
