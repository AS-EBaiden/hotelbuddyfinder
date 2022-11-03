import React from "react";

export default function Lab() {
  const code = `
    {Array.from(Array(3)).map((c, index) => (
        <div
          key={index}
          style={{ padding: "0 5%", display: "inline-flex" }}
        >
          <label>{c}</label>
          <input />
          <button>🗑️</button>
        </div>
      ))}
    `;

  const arrayForLoop = `
    let array = [];
    for(let i = 0; i < props.items.length; i++) {
      array.push(
        <Item key={i} item={props.items[i]} />
      );
    }`;

  const selectionOption = `

    const Component =()=>{
      const [optionSelectState, setSelectState]= useState(null);
      
      return(
        <select onChange={(e) => setSelectState(e.target.value)}> //you probably want to convert the value to a Boolean
      <option value={true}>hosting</option>
      <option value={false}>looking</option>
    </select>
    )
    }
    
    `;

  const removeElFromList = `
    const removeContact = (e, id) => {
      e.preventDefault();
      const removeId = contactData.indexOf(contactData[id]);
      const filteredItems = contactData.filter(function (rem, l) {
        return l !== removeId;
      });
      setContacData(filteredItems);
    };`;

  return (
    <div>
      <h2>E.B.'s Lab</h2>
      <section>
        <article>
          <h3>Simple Todo App aga</h3>
          <time></time>
          <div>
            <blockquote>
              <pre>{code}</pre>
            </blockquote>
          </div>
        </article>

        <article>
          <h3>Array For Loop</h3>
          <time></time>
          <div>
            <blockquote>
              <pre>{arrayForLoop}</pre>
            </blockquote>
          </div>
          <div>Reference: https://daveceddia.com/display-a-list-in-react/</div>
        </article>

        <article>
          <h3>Option states</h3>
          <time></time>
          <div>
            <blockquote>
              <pre>{selectionOption}</pre>
            </blockquote>
          </div>

          <div>https://codesandbox.io/s/select-3p3oe?file=/demo.js</div>
        </article>

        <article>
          <h3>Remove item from list</h3>
          <time></time>
          <div>
            <blockquote>
              <pre>{removeElFromList}</pre>
            </blockquote>
          </div>

          <div>https://codesandbox.io/s/select-3p3oe?file=/demo.js</div>
        </article>
      </section>
    </div>
  );
}
