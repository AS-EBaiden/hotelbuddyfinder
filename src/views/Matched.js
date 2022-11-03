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
    console.log("form not enabled");

    // if (initialValues === "" || (!contactData.length > 0 && inputValue === ""))
    //   return alert("please make sure all fields are filled");

    // const newArr = personInfo.slice();

    // newArr.splice(0, 0, {
    //   ...initialValues,
    // });

    // setPersonInfo(newArr);
    // setInitialValues({
    //   username: "",
    //   username2: "",
    // });
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
              username="username"
            />
          </div>
          <div style={{ padding: "2%" }}>
            <label>Your roomate username</label>
            <input
              className="matched-inputs"
              onChange={changeHandler}
              username2="username2"
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
