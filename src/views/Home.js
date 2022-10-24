import React from "react";
import { users } from "../api/fakeprofiles";

export default function Home() {
  return (
    <div>
      <section className="profiles-container">
        {users.map((ppl, i) => (
          <article
            key={i}
            className="profile-card"
            style={{
              maxHeight: "600px",
              borderRadius: "10px",
              background: ppl.type === "looking" ? "#AA839F" : "#F7EBF3",
              padding: "20px",
            }}
          >
            <h2>{ppl.name}</h2>
            <h4>{ppl.pronouns}</h4>
            <img src={ppl.img} alt={ppl.name} />
            <h5>Contact</h5>
            <div style={{ display: "inline-flex" }}>
              <ul className="social-list">
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Email</li>
              </ul>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
