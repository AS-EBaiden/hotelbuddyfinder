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

    if (initialValues === "" || (!contactData.length > 0 && inputValue === ""))
      return alert("please make sure all fields are filled");

    const newArr = personInfo.slice();

    newArr.splice(0, 0, {
      ...initialValues,
    });

    setPersonInfo(newArr);
    setInitialValues({
      username: "",
      username2: "",
    });
  };

  const changeHandler = (e) => {
    e.preventDefault();
    setInitialValues({ ...initialValues, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div>Did you find your match? Fill the form so we can unlist you</div>
      <div>
        <form onSubmit={submitMatch}>
          <label>Your Username</label>
          <input onChange={changeHandler} username="username" />

          <label>Your match username</label>
          <input onChange={changeHandler} username2="username2" />

          <button>I matched</button>
        </form>
      </div>
    </div>
  );
}
