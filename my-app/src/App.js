import logo from './logo.svg';
import './App.css';
import Tag from "./Components/Tag/Tag";
import Text from "./Components/Text/Text";


function App() {
  return (
    <div>
        <Tag ContainerCard='todo'></Tag>
        <Tag ContainerCard='inprogress'></Tag>
        <Tag ContainerCard='review'></Tag>
        <Tag ContainerCard='done'></Tag>
        <Text textContent="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ">seu texto</Text>

    </div>
  );
}

export default App;
