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
        <img src={background} className="App-background" alt="background"></img>
        <ExternCard cardType="todo" title="🗒️ To Do">
          <InternCard img={male} title="Christmas Banners">
            <Tag ContainerCard="todo" txt="Label"></Tag>
          </InternCard>
          <InternCard img={male} title="Redo Portfolio">
            <Tag ContainerCard="todo" txt="Label"></Tag>
          </InternCard>
        </ExternCard>
        <ExternCard cardType="inprogress" title="💻 In Progress">
          <InternCard img={female} title="Coffee Break">
            <Tag ContainerCard="inprogress" txt="Always"></Tag>
          </InternCard>
          <InternCard img={female} title="Updating Portfolio">
            <Tag ContainerCard="inprogress" txt="Webflow"></Tag>
          </InternCard>
        </ExternCard>
        <ExternCard cardType="review" title="🖍 Review">
          <InternCard img={male} title="Release to Figma Community">
            <Tag ContainerCard="review" txt="Release"></Tag>
          </InternCard>
          <InternCard img={male} title="User Feedback">
            <Tag ContainerCard="review" txt="Feedback"></Tag>
          </InternCard>
          <InternCard img={male} title="Background images from humaaans.com">
            <Tag ContainerCard="review" txt="Sourcing"></Tag>
          </InternCard>
        </ExternCard>
        <ExternCard cardType="done" title="🚀 Done">
          <InternCard img={female} title="Style Guide">
            <Tag ContainerCard="done" txt="UI"></Tag>
          </InternCard>
          <InternCard img={female} title="Component Library">
            <Tag ContainerCard="done" txt="UI"></Tag>
          </InternCard>
          <InternCard img={female} title="Sticker Components">
            <Tag ContainerCard="done" txt="UI"></Tag>
          </InternCard>
        </ExternCard>
      </body>
    </div>
  );
}

export default App;
