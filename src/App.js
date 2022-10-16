import SearchEngine from "./SearchEngine";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <SearchEngine />
          <small>
            <a
              href="https://github.com/Leo-Tampaare/weather-react"
              target="_blank"
              rel="noreferrer"
            >
              Open source code{" "}
            </a>
            by Leo Tampaare
          </small>
        </div>
      </div>
    </div>
  );
}

export default App;
