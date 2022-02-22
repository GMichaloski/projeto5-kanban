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
        <Tag ContainerCard="todo"></Tag>
        <Tag ContainerCard="inprogress"></Tag>
        <Tag ContainerCard="review"></Tag>
        <Tag ContainerCard="done"></Tag>
        <Text textContent="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ">
          seu texto
        </Text>
        <Avatar descAlt="imagem mulher" />;
      </body>
    </div>
  );
}

export default App;
