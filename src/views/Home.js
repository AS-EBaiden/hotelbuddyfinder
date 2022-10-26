import React from "react";

export default function Home({ personInfo }) {
  return (
    <div>
      <section className="profiles-container">
        {personInfo.map((ppl, i) => (
          <article
            key={i}
            className="profile-card"
            style={{
              maxHeight: "600px",
              borderRadius: "10px",
              background: ppl.isHosting === false ? "#AA839F" : "#F7EBF3",
              padding: "20px",
            }}
          >
            <h2>{ppl.first_name}</h2>
            <h4>{ppl.pronouns}</h4>

            <h4>{ppl.isHosting ? "hosting" : "looking"} </h4>
            <img
              src={ppl.img ?? "https://api.lorem.space/image/face?w=150&h=150"}
              alt={ppl.first_name}
            />
            <h5>Contact</h5>
            <div style={{ display: "inline-flex" }}>
              <ul className="social-list">
                {ppl.contact.map((item, j) => (
                  <li key={j}>🍌{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
