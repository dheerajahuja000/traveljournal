import "./App.css";
import data from "./data";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";

function App() {

  const main = data.map((item) => (
    <Main
      key={item.title}
      {...item}
    ></Main>
  ));

  return (
    <div>
     <Navbar/>
     {main}
    </div>
  );
}


export default App;
