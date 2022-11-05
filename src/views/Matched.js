import React, { useState } from "react";

export default function Matched({ personInfo, setPersonInfo }) {
  const [initialValues, setInitialValues] = useState({
    username: "",
    username2: "",
  });

  const [inputValue, setInputValue] = useState("");
  const [contactData, setContacData] = useState([]);

  const submitMatch = (e) => {
    e.preventDefault();

    let firstInput = personInfo.map((obj) => {
      if (obj.username === initialValues.username) {
        return { ...obj, isMatched: "true" };
      }
      if (obj.username === initialValues.username2) {
        return { ...obj, isMatched: "maybe" };
      }
      return obj;
    });

    setPersonInfo(firstInput);
  };

  const changeHandler = (e) => {
    e.preventDefault();
    setInitialValues({ ...initialValues, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div>Did you find your match? Please fill the form below</div>
      <div
        style={{
          minHeight: "25vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form onSubmit={submitMatch} style={{ display: "inline-flex" }}>
          <div style={{ padding: "2%" }}>
            <label>Your Username</label>
            <input
              className="matched-inputs"
              onChange={changeHandler}
              name="username"
            />
          </div>
          <div style={{ padding: "2%" }}>
            <label>Your roomate username</label>
            <input
              className="matched-inputs"
              onChange={changeHandler}
              name="username2"
            />
          </div>
          <div>
            <button
              style={{
                position: "relative",

                top: "2.5rem",
              }}
            >
              I matched
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
