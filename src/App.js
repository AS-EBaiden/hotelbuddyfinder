import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./views/Home";
import Lab from "./views/Lab";
import { useState } from "react";
import { users } from "./api/fakeprofiles";
import About from "./views/About";
import Matched from "./views/Matched";

function App() {
  const [personInfo, setPersonInfo] = useState(users);

  return (
    <>
      <Nav />
      <main className="App">
        <h1>Roomie-Buddy</h1>
        <Routes>
          <Route
            path="/"
            element={
              <Home personInfo={personInfo} setPersonInfo={setPersonInfo} />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/matched"
            element={
              <Matched personInfo={personInfo} setPersonInfo={setPersonInfo} />
            }
          />

          <Route path="/lab" element={<Lab />} />
          <Route />
        </Routes>
      </main>
    </>
  );
}

export default App;
