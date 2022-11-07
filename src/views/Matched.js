import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
export default function Matched({ personInfo, setPersonInfo }) {
  const [initialValues, setInitialValues] = useState({
    username: "",
    username2: "",
  });

  const [successSubmit, setSuccessSubmit] = useState(false);

  const submitMatch = (e) => {
    e.preventDefault();

    let firstInput = personInfo.map(async (obj) => {
      if (obj.username === initialValues.username) {
        if (obj.isMatched === "true") return;

        await setDoc(doc(db, "users", obj.id), {
          ...obj,
          isMatched: "true",
        });
        return { ...obj, isMatched: "true" };
      }
      if (initialValues.username2 !== "") {
        if (obj.username === initialValues.username2) {
          if (obj.isMatched === "true") return;
          await setDoc(doc(db, "users", obj.id), {
            ...obj,
            isMatched: "maybe",
          });
          return { ...obj, isMatched: "maybe" };
        }
      }
      return obj;
    });

    setPersonInfo(firstInput);
    setSuccessSubmit(true);
  };

  const changeHandler = (e) => {
    e.preventDefault();
    setInitialValues({ ...initialValues, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div>Did you find your match? Please fill the form below</div>
      <ul className="match-instructions">
        <li>
          if you know your match's username please enter in the second field
        </li>
        <li>
          if your match has nominated you please fill your username in the first
          field to confirm your match
        </li>
      </ul>
      <div
        style={{
          minHeight: "25vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {successSubmit ? (
          <div style={{ padding: "0 0 20%" }}>
            <h3 style={{ fontSize: "2.5rem", color: "#77bd7d" }}>Success!!</h3>
            <h3>Enjoy AfroTech 2022!</h3>
          </div>
        ) : (
          <form onSubmit={submitMatch} className="match-form">
            <div style={{ padding: "2%" }}>
              <label>Your Username</label>
              <input
                placeholder="your username"
                className="matched-inputs"
                onChange={changeHandler}
                name="username"
              />
            </div>
            <div style={{ padding: "2%" }}>
              <label>Your roomate username</label>
              <input
                placeholder="roomate's username"
                className="matched-inputs"
                onChange={changeHandler}
                name="username2"
              />
            </div>
            <div>
              <button className="match-btn">I matched</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
