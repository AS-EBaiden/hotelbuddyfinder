import React, { useState } from "react";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
export default function InputInfo({ personInfo, setPersonInfo }) {
  const [initialValues, setInitialValues] = useState({
    first_name: "",
    username: "",
    pronouns: "",
    img: "",
    isHosting: false,
    contact: [],
  });

  const [inputValue, setInputValue] = useState("");
  const [contactData, setContacData] = useState([]);
  const [selectOption, setSelectOption] = useState(false);
  const [submissionSucces, setSubmissionSuccess] = useState(false);

  const addPerson = async (e) => {
    e.preventDefault();
    console.log("printed");
    try {
      const res = await addDoc(collection(db, "cities"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA",
      });
      console.log("res", res);
    } catch (err) {
      console.log(err);
    }
  };

  // const addPerson = () => {
  //   setSubmissionSuccess(true);
  // };
  // const addPerson = async (e) => {
  //   e.preventDefault();

  //   if (initialValues === "" || (!contactData.length > 0 && inputValue === ""))
  //     return alert("please make sure all fields are filled");

  //   const newArr = personInfo.slice();

  //   newArr.splice(0, 0, {
  //     ...initialValues,
  //     isHosting: selectOption,
  //     contact:
  //       contactData.length > 1 ? contactData : [...contactData, inputValue],
  //   });

  //   setPersonInfo(newArr);

  //   setInitialValues({
  //     first_name: "",
  //     username: "",
  //     pronouns: "",
  //     isHosting: false,
  //     isMatched: false,
  //     contact: [],
  //   });
  //   setInputValue("");
  // };

  const addContact = (e) => {
    e.preventDefault();
    if (inputValue === "")
      return alert("please dont forget to add a way to reach you");
    setContacData([...contactData, inputValue]);
    setInputValue("");
  };

  const changeHandler = (e) => {
    e.preventDefault();
    setInitialValues({ ...initialValues, [e.target.name]: e.target.value });
  };

  const contactChangeHandler = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  return (
    <div
      style={{
        minHeight: "40vh",
        textAlign: submissionSucces ? "-webkit-center" : "unset",
      }}
    >
      {submissionSucces ? (
        <div className="successSubmission">Success</div>
      ) : (
        <section>
          <h2>Put your info here</h2>
          <form onSubmit={addPerson} className="hero-form-container">
            <div className="profile-input">
              {/* <div className="input-container"> */}
              {Object.keys(initialValues)?.map((r, i) => {
                return (
                  <>
                    {r === "contact" ? (
                      <div style={{ gridColumn: "1 / 4" }}>
                        <div
                          className="contact_style"
                          style={{
                            gridTemplateColumns: "1fr 1fr",
                            display: "grid",
                          }}
                        >
                          <div
                            className="contact-grid"
                            style={{
                              display: "grid",
                              gridTemplateColumns: "4fr 1fr",
                              // gridTemplateColumns: " 5fr 1fr",
                              gap: "60px",
                              // margin: "20px auto",
                            }}
                          >
                            <div>
                              <label>{r}</label>
                              <input
                                type="text"
                                value={inputValue}
                                onChange={contactChangeHandler}
                              />
                            </div>

                            <button onClick={addContact}>add more</button>
                          </div>
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: "1fr 1fr 1fr",
                            }}
                          >
                            {contactData?.map((item, j) => (
                              <div key={j}>
                                <div>{item}</div>
                                <span>
                                  <button>🗑️</button>
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* <div>
                          {contactData?.map((item, j) => (
                            <div key={j}>
                              <div>{item}</div>
                              <span>
                                <button>🗑️</button>
                              </span>
                            </div>
                          ))}
                        </div> */}
                      </div>
                    ) : r === "isHosting" ? (
                      <div>
                        <label>Are You Hosting or Looking</label>

                        <select
                          style={{ height: "50px" }}
                          onChange={(e) =>
                            setSelectOption(Boolean(e.target.value))
                          }
                        >
                          <option value={false}>looking</option>
                          <option value={true}>hosting</option>
                        </select>
                      </div>
                    ) : r === "img" ? (
                      <div>
                        <label>Upload your profile pic</label>
                        <input
                          type="file"
                          id="img"
                          name="img"
                          accept="image/*"
                        />
                      </div>
                    ) : (
                      <div>
                        <label>{r}</label>
                        <input
                          type="text"
                          name={r}
                          value={initialValues.r}
                          onChange={changeHandler}
                        />
                      </div>
                    )}
                  </>
                );
              })}

              {/* reference: https://codesandbox.io/s/elastic-wave-36ous?fontsize=14&hidenavigation=1&theme=dark&file=/src/App.js:847-854 */}
              {/* </div>// */}
            </div>
            {/* add ability to add multiple inputs sets */}

            <div>
              <button
                className="form-btn"
                type="submit"
                style={{ width: "100%", padding: "1%" }}
              >
                Send
              </button>
            </div>
          </form>
        </section>
      )}
    </div>
  );
}
