import { ReactComponent as GitHubIcon } from "assets/img/github.svg";

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a href="https://github.com/lcpsantos">
            <div>
              <GitHubIcon />
              <p>/devsuperior</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
