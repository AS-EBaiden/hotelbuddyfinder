import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./views/Home";
import Lab from "./views/Lab";
import { useState } from "react";
import { users } from "./api/fakeprofiles";
import About from "./views/About";
import Matched from "./views/Matched";
import { useEffect } from "react";
import { getDocs, collection, query } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [personInfo, setPersonInfo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.data(), ...doc.data() });
        });
        setPersonInfo(list);
      } catch (err) {
        console.log("err", err);
      }
    };
    fetchData();
  }, []);
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
