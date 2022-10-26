import React from "react";
import InputInfo from "../components/InputInfo";

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
      </section>
    </div>
  );
}
