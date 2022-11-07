import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
export default function InputInfo({ personInfo, setPersonInfo, wordContain2 }) {
  const [initialValues, setInitialValues] = useState({
    name: "",
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
  const [errorUser, setErrorUser] = useState(false);
  const [file, setFile] = useState("");

  const testfunction = async () => {
    await console.log("waiting for job to be done");
  };

  const addPerson = async (e) => {
    e.preventDefault();

    const newArr = personInfo.slice();

    if (
      initialValues === "" ||
      initialValues.name === "" ||
      initialValues.username === "" ||
      initialValues.pronouns === ""
    )
      return alert("please make sure all fields are filled");
    if (contactData.length === 0 && inputValue === "")
      return alert("please make sure all fields are filled");
    if (!file) {
      alert("please make sure all fields are filled");
      return;
    }

    const storageRef = ref(storage, initialValues.username);
    const uploadTask = uploadBytesResumable(storageRef, file);
    await uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log("error", error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // setInitialValues((prev) => ({ ...prev, img: downloadURL }));

          setInitialValues({
            ...initialValues,
            isHosting: selectOption,
            isMatched: "false",
            img: downloadURL,
            contact:
              contactData.length > 1
                ? contactData
                : [...contactData, inputValue],
          });

          newArr.splice(0, 0, {
            ...initialValues,
            isHosting: selectOption,
            isMatched: "false",
            img: downloadURL,
            contact:
              contactData.length > 1
                ? contactData
                : [...contactData, inputValue],
          });
          setPersonInfo(newArr);
          setSubmissionSuccess(true);

          addDoc(collection(db, "users"), {
            ...initialValues,
            isHosting: selectOption,
            isMatched: "false",
            img: downloadURL,
            contact:
              contactData.length > 1
                ? contactData
                : [...contactData, inputValue],
          });
        });
      }
    );

    const user = {
      ...initialValues,
      isHosting: selectOption,
      contact:
        contactData.length > 1 ? contactData : [...contactData, inputValue],
    };

    await testfunction();
  };

  const addContact = (e) => {
    e.preventDefault();
    if (inputValue === "")
      return alert("please dont forget to add a way to reach you");
    setContacData([...contactData, inputValue]);
    setInputValue("");
  };

  const changeHandler = (e) => {
    e.preventDefault();
    let isExisting =
      e.target.name === "username"
        ? personInfo.some((prs) => prs.username === e.target.value)
        : "";
    setErrorUser(isExisting);
    setInitialValues({ ...initialValues, [e.target.name]: e.target.value });
  };

  const contactChangeHandler = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const removeContact = (e, id) => {
    e.preventDefault();
    const removeId = contactData.indexOf(contactData[id]);
    const filteredItems = contactData.filter(function (rem, l) {
      return l !== removeId;
    });
    setContacData(filteredItems);
  };

  return (
    <div
      style={{
        minHeight: "40vh",
        textAlign: submissionSucces ? "-webkit-center" : "unset",
      }}
    >
      {submissionSucces ? (
        <div>
          <h3 style={{ fontSize: "2.5rem", color: "#77bd7d" }}>Success!!</h3>
          <h3>
            <em>Please</em> come back and let us know when you've been matched
          </h3>
        </div>
      ) : (
        <section>
          <h2>Put your info here</h2>
          <form onSubmit={addPerson} className="hero-form-container">
            <div className="profile-input">
              {Object.keys(initialValues)?.map((r, i) => {
                return (
                  <React.Fragment key={i}>
                    {r === "contact" ? (
                      <div className="contact_grid">
                        <div className="contact_style">
                          <div
                            className="contact-grid"
                            style={{
                              display: "grid",
                              gridTemplateColumns: "4fr 1fr",
                              gap: "20px",
                            }}
                          >
                            <div>
                              <label>{r}</label>
                              <input
                                placeholder="any social media link or email "
                                type="text"
                                value={inputValue}
                                onChange={contactChangeHandler}
                              />
                            </div>

                            <button
                              onClick={addContact}
                              style={{
                                borderRadius: "10px",
                                height: "50px",
                                border: "none",
                                background: "rgb(32, 231, 92)",
                                position: "relative",
                                top: "20px",
                              }}
                            >
                              Add
                            </button>
                          </div>
                          <div
                            style={{
                              display: "inline-flex",
                              flexFlow: "wrap",
                            }}
                          >
                            {contactData?.map((item, j) => (
                              <div
                                key={j}
                                style={{
                                  display: "inline-flex",
                                  height: "fit-content",
                                }}
                              >
                                <div style={{ padding: "0 10px" }}>
                                  {wordContain2(item)}
                                </div>

                                <a
                                  href="#"
                                  aria-label="Close"
                                  className="close"
                                  onClick={(e) => removeContact(e, j)}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
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
                        <label>Upload your real pic</label>
                        <input
                          type="file"
                          id="img"
                          name="img"
                          onChange={(e) => setFile(e.target.files[0])}
                          accept="image/*"
                        />
                      </div>
                    ) : (
                      <div>
                        <label>{r}</label>
                        {r === "username" && errorUser && (
                          <span
                            style={{
                              padding: "5px",
                              color: "#ff7c7c",
                              fontSize: ".8rem",
                            }}
                          >
                            already exists, try again
                          </span>
                        )}
                        <input
                          placeholder={r}
                          type="text"
                          name={r}
                          value={initialValues.r}
                          onChange={changeHandler}
                        />
                      </div>
                    )}
                  </React.Fragment>
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
                style={{ width: "100%", padding: "1.2rem" }}
                disabled={errorUser}
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
