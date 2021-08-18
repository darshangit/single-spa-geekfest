export default function Root(props) {
  return (
    <>
      <header>
        <div className="navbar navbar-dark bg-dark box-shadow">
          <div className="container d-flex justify-content-between">
            <a
              href="/planets"
              className="navbar-brand d-flex align-items-center"
            >
              <strong>Starwars</strong>
            </a>
          </div>
        </div>
      </header>
      <main role="main">
        <section
          className="jumbotron text-center"
          style={{ background: "linear-gradient(to right,#c21500, #ffc500)" }}
        >
          <div className="container">
            <h1 className="jumbotron-heading" style={{ color: "white" }}>
              Starwars
            </h1>
            <p className="lead " style={{ color: "white" }}>
              A starwars saga in your favourite microfront end architecture.
            </p>
            <p>
              <a href="/planets" className="btn btn-primary my-2">
                Planets - React 1
              </a>
              -
              <a href="/movies" className="btn btn-secondary my-2">
                Movies - React 2
              </a>
            </p>
          </div>
        </section>
      </main>
      {/* <footer class="text-muted">
        <div class="container">
          <p class="float-right">
            <a href="#">Back to top</a>
          </p>
          <p>
            Album example is &copy; Bootstrap, but please download and customize
            it for yourself!
          </p>
          <p>
            New to Bootstrap? <a href="../../">Visit the homepage</a> or read
            our <a href="../../getting-started/">getting started guide</a>.
          </p>
        </div>
      </footer> */}
    </>
  );
}
