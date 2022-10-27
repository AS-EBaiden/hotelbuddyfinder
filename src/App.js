import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./views/Home";
import Lab from "./views/Lab";
import { useState } from "react";
import { users } from "./api/fakeprofiles";
import About from "./views/About";

function App() {
  const [personInfo, setPersonInfo] = useState(users);

  return (
    <>
      <Nav />
      <main className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home personInfo={personInfo} setPersonInfo={setPersonInfo} />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/lab" element={<Lab />} />
          <Route />
        </Routes>
      </main>
    </>
  );
}

export default App;
