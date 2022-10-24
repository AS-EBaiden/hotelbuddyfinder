import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./views/Home";
import InputInfo from "./components/InputInfo";

function App() {
  return (
    <main className="App">
      <Nav />
      <InputInfo />
      <Home />
    </main>
  );
}

export default App;
