import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./views/Home";
import InputInfo from "./components/InputInfo";
import Lab from "./views/Lab";
import { useState } from "react";
import { users } from "./api/fakeprofiles";

function App() {
  const [personInfo, setPersonInfo] = useState(users);

  return (
    <main className="App">
      <Nav />
      <InputInfo personInfo={personInfo} setPersonInfo={setPersonInfo} />
      <Home personInfo={personInfo} setPersonInfo={setPersonInfo} />
      {/* <Lab /> */}
    </main>
  );
}

export default App;
