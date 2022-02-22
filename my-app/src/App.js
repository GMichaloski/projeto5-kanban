import background from "./assets/Home.png";
import Tag from "./Components/Tag/Tag";
import Avatar from "./Components/Avatar/Avatar";
import Text from "./Components/Text/Text";
import InternCard from "./Components/Intern-card/InternCard";
import ExternCard from "./Components/extern-card/ExternCard";
import female from "./Components/Avatar/images/Female.png";
import male from "./Components/Avatar/images/male.png";
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
        <ExternCard cardType="todo">
          <InternCard img={male} tag="todo" title="Christmas Banners">
            <Tag ContainerCard="todo" txt="Label"></Tag>
          </InternCard>
          <InternCard img={male} tag="todo" title="Redo Portfolio">
            <Tag ContainerCard="todo" txt="Label"></Tag>
          </InternCard>
        </ExternCard>
      </body>
    </div>
  );
}

export default App;
