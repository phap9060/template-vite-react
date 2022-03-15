import './app.css';
import Logo05 from './assets/Logo05.png';

const App = (): any => {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={Logo05} className="App-logo" alt="logo" />
          <h1>Escutem meu podcast:</h1>
          <p>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://open.spotify.com/show/7L3y1F8Nc8JWjQ5ktJjPvA"
            >
              <button className="button" type="button">
                Spotify
              </button>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.deezer.com/br/show/2671052A"
            >
              <button className="button" type="button">
                Deezer
              </button>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://discord.com/invite/sYy53UnVhaA"
            >
              <button className="button" type="button">
                Discord
              </button>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/fliperamanerdoficial/"
            >
              <button className="button" type="button">
                Instagram
              </button>
            </a>
          </p>
        </header>
      </div>
    </div>
  );
};
export default App;
