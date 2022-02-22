import background from "./assets/Home.png";
import Tag from "./Components/Tag/Tag";
import Avatar from "./Components/Avatar/Avatar";
import Text from "./Components/Text/Text";
import internCard from "./Components/Intern-card/internCard";
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
        <img src={background} className="App-background" alt="background"></img>
        <internCard tag="todo" img={female} title="Vasco"></internCard>
        <Tag ContainerCard="todo"></Tag>
        <Tag ContainerCard="inprogress"></Tag>
        <Tag ContainerCard="review"></Tag>
        <Tag ContainerCard="done"></Tag>
        <Text textContent="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ">
          seu texto
        </Text>
        <Avatar img={male} descAlt="imagem mulher" />;
      </body>
    </div>
  );
}

export default App;
