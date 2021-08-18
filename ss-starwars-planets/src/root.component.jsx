import { useEffect, useState } from "react";

export default Root = (props) => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch("https://swapi.dev/api/planets/");
      const responseJson = await resp.json();
      setPlanets(responseJson.results);
    };

    fetchData();
  }, []);

  const planetsList = planets.map((planet, idx) => (
    <div key={idx} className="col-md-6 rounded-20 mb-5">
      <div className="list-group box-shadow text-center">
        <button
          type="button"
          className="list-group-item list-group-item-action active"
          style={{ background: "linear-gradient(to left, #283048, #859398)" }}
        >
          {planet.name}
        </button>
        <button type="button" className="list-group-item list-group-item-action">
          <span className="badge badge-secondary">
            Population - {planet.population}
          </span>
        </button>
        <button type="button" className="list-group-item list-group-item-action">
          <span className="badge badge-info">
            Gravity - {planet.gravity}
          </span>
          {" / "}
          <span className="badge badge-secondary mb-1">
            Orbital Period - {planet.orbital_period}
          </span>
        </button>
        <button type="button" className="list-group-item list-group-item-action">
          <span className="badge badge-secondary mb-1">
            Terrain - {planet.terrain}
          </span>
        </button>
        <button
          type="button"
          className="list-group-item list-group-item-action"
          disabled
        >
          <span className="badge badge-info">
            Climate - {planet.climate}
          </span>
          {" / "}
          <span className="badge badge-secondary">
            {planet.surface_water == 1
              ? "Surface Water - Water"
              : "Surface Water - No Water"}
          </span>
        </button>
      </div>
    </div>
  ));

  return (
    <div className="album py-5 bg-light">
      <div className="container">
        {planetsList.length === 0 && (
          <div className="row justify-content-center">
            <p>Loading ...</p>
          </div>
        )}
        <div className="row">{planetsList}</div>
      </div>
    </div>
  );
}
