import { useEffect, useState } from "react";

export default function Root(props) {
  const [movies, setPlanets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch("https://swapi.dev/api/films/");
      const responseJson = await resp.json();
      setPlanets(responseJson.results);
    };

    fetchData();
  }, []);

  const moviesList = movies.map((movie, idx) => (
    <div key={idx} className="col-md-12 rounded-20">
      <div className="card mb-4 box-shadow text-center">
        <h4 className="text-muted font-italic">{movie.title}</h4>
        <div className="card-body">
          <p className="card-text">{movie.opening_crawl}</p>
          <div className="d-flex flex-row justify-content-around align-items-center pb-3">
            <span className="badge badge-info">
              Director - {movie.director}
            </span>
            <span className="badge badge-secondary">
              Release Date - {movie.release_date}
            </span>

            <span className="badge badge-primary">
              Episode Id - {movie.episode_id}
            </span>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="album py-5 bg-light">
      <div className="container">
        {moviesList.length === 0 && (
          <div className="row justify-content-center">
            <p>Loading ...</p>
          </div>
        )}
        <div className="row">{moviesList}</div>
      </div>
    </div>
  );
}
