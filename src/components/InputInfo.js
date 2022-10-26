import React, { useState } from "react";

export default function InputInfo({ personInfo, setPersonInfo }) {
  const [inputValues2, setInputValues2] = useState({
    first_name: "",
    last_name: "",
    pronouns: "",
    isHosting: false,
    contact: [],
  });

  const [inputVal3, setInputVal3] = useState("");
  const [contactData, setContacData] = useState([]);

  const addPerson = (e) => {
    e.preventDefault();
    if (inputValues2 === "" || inputVal3 === "")
      return alert("please make sure all fields are filled");

    const newArr = personInfo.slice();
    newArr.splice(0, 0, { ...inputValues2, contact: contactData });

    setPersonInfo(newArr);
  };

  const addContact2 = (e) => {
    e.preventDefault();
    if (inputVal3 === "")
      return alert("please dont forget to add a contact info");
    setContacData([...contactData, inputVal3]);
  };

  const changeHandler = (e) => {
    e.preventDefault();
    setInputValues2({ ...inputValues2, [e.target.name]: e.target.value });
  };

  const contactChangeHandler = (e) => {
    e.preventDefault();
    setInputVal3(e.target.value);
  };

  return (
    <div style={{ minHeight: "40vh" }}>
      <section>Put your info here</section>
      <section>
        <form onSubmit={addPerson}>
          <div className="profile-input">
            {Object.keys(inputValues2)?.map((r, i) => {
              return (
                <div key={i} style={{ padding: "0 5%" }}>
                  {r === "contact" ? (
                    <div>
                      <label>{r}</label>
                      <input
                        value={inputVal3}
                        onChange={contactChangeHandler}
                      />

                      <button onClick={addContact2}>add more</button>

                      {contactData?.map((item, j) => (
                        <div key={j}>
                          <div>{item}</div>
                          <span>
                            <button>🗑️</button>
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : // <>
                  //   <label>{r}</label>
                  //   <input
                  //     type="text"
                  //     name={r}
                  //     value={inputValues2.r}
                  //     onChange={changeHandler}
                  //   />
                  // </>
                  r === "isHosting" ? (
                    <>
                      <label>Are You Hosting or Looking</label>
                      <input
                        type="text"
                        name={r}
                        value={inputValues2.r}
                        onChange={changeHandler}
                      />
                    </>
                  ) : (
                    <>
                      <label>{r}</label>
                      <input
                        type="text"
                        name={r}
                        value={inputValues2.r}
                        onChange={changeHandler}
                      />
                    </>
                  )}
                </div>
              );
            })}

            {/* reference: https://codesandbox.io/s/elastic-wave-36ous?fontsize=14&hidenavigation=1&theme=dark&file=/src/App.js:847-854 */}
          </div>
          {/* add ability to add multiple inputs sets */}

          <div>
            <button style={{ width: "100%", padding: "1%" }}>Send</button>
          </div>
        </form>
      </section>
    </div>
  );
}
