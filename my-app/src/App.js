import background from "./assets/Home.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Kanban</h1>
        </div>
      </header>
      <body className="App-body">
        <img src={background} className="App-background" alt="background"></img>
      </body>
    </div>
  );
}

export default App;
