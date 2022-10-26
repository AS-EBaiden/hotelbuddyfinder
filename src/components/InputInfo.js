import React, { useState } from "react";

export default function InputInfo({ personInfo, setPersonInfo }) {
  const [initialValues, setInitialValues] = useState({
    first_name: "",
    last_name: "",
    pronouns: "",
    isHosting: false,
    contact: [],
  });

  const [inputValue, setInputValue] = useState("");
  const [contactData, setContacData] = useState([]);
  const [selectOption, setSelectOption] = useState(false);

  const addPerson = (e) => {
    e.preventDefault();

    if (initialValues === "" || (!contactData.length > 0 && inputValue === ""))
      return alert("please make sure all fields are filled");

    const newArr = personInfo.slice();

    newArr.splice(0, 0, {
      ...initialValues,
      isHosting: selectOption,
      contact:
        contactData.length > 1 ? contactData : [...contactData, inputValue],
    });

    setPersonInfo(newArr);
    setInitialValues({
      first_name: "",
      last_name: "",
      pronouns: "",
      isHosting: false,
      contact: [],
    });
    setInputValue("");
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
    setInitialValues({ ...initialValues, [e.target.name]: e.target.value });
  };

  const contactChangeHandler = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  console.log("person", personInfo);
  return (
    <div style={{ minHeight: "40vh" }}>
      <section>Put your info here</section>
      <section>
        <form onSubmit={addPerson}>
          <div className="profile-input">
            {Object.keys(initialValues)?.map((r, i) => {
              return (
                <div
                  key={i}
                  style={{
                    padding: r === "contact" ? "0px 0px 0px 5%" : "0 5%", //flex instead of grid https://stackoverflow.com/questions/63471747/how-to-make-the-last-items-in-my-css-grid-stretch-full-width-with-equal-spacing
                  }}
                >
                  {r === "contact" ? (
                    <div>
                      <label>{r}</label>

                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: " 5fr 1fr",
                          gap: "60px",
                          margin: "20px auto",
                        }}
                      >
                        <div>
                          <input
                            value={inputValue}
                            onChange={contactChangeHandler}
                          />
                        </div>

                        <button onClick={addContact}>add more</button>
                      </div>
                      <div>
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
                  ) : r === "isHosting" ? (
                    <>
                      <label>Are You Hosting or Looking</label>
                      <select
                        onChange={(e) =>
                          setSelectOption(Boolean(e.target.value))
                        }
                      >
                        <option value={false}>looking</option>
                        <option value={true}>hosting</option>
                      </select>
                    </>
                  ) : (
                    <>
                      <label>{r}</label>
                      <input
                        type="text"
                        name={r}
                        value={initialValues.r}
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
