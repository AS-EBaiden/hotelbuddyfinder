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
import {
  getDocs,
  collection,
  query,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./firebase";
import { Helmet, HelmetProvider } from "react-helmet-async";
import CookieConsent from "react-cookie-consent";

function App() {
  const [personInfo, setPersonInfo] = useState([]);

  const helmetContext = {};
  useEffect(() => {
    // const fetchData = async () => {
    //   let list = [];
    //   try {
    //     const querySnapshot = await getDocs(collection(db, "users"));
    //     querySnapshot.forEach((doc) => {
    //       list.push({ id: doc.data(), ...doc.data() });
    //     });
    //     setPersonInfo(list);
    //   } catch (err) {
    //     console.log("err", err);
    //   }
    // };
    // fetchData();

    const unsub = onSnapshot(
      collection(db, "users"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setPersonInfo(list);
      },
      (err) => {
        console.log(err);
      }
    );
    //memory leak clean up function
    return () => {
      unsub();
    };
  }, []);
  return (
    <>
      <HelmetProvider helmetContext={helmetContext}>
        <Helmet>
          <title>Afro Tech Roomie Finder</title>
          <meta
            name="description"
            content="Waited too late to find an affordable place for Afro Tech? Find a roomate"
          />
          <meta
            name="keywords"
            content="AfroTech 2022, AfroTech,  black excellence, techies, baddiesInTech, affordable loding, texas, Austin "
          />
        </Helmet>
      </HelmetProvider>
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
      <CookieConsent
        onAccept={(acceptedByScrolling) => {
          if (acceptedByScrolling) {
            // triggered if user scrolls past threshold
            alert("Accept was triggered by user scrolling");
          } else {
            alert(
              "You've accepted that we use cookies for beter user experience"
            );
          }
        }}
      >
        This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>
    </>
  );
}

export default App;
