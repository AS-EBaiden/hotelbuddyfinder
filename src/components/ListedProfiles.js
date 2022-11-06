import React from "react";

export default function ListedProfiles({ personInfo, wordContain2 }) {
  return (
    <div>
      <section className="profiles-container">
        {personInfo.map((ppl, i) => (
          <article
            key={i}
            className={`profile-card ${
              ppl.isMatched === "true"
                ? "isMatched"
                : ppl.isMatched === "maybe"
                ? "almostMatched"
                : ""
            }`}
            style={{
              maxHeight: "600px",
              borderRadius: "10px",
              background:
                ppl.isHosting === false ? "#AA839F" : "hsl(336deg 75% 37%)",
              padding: "20px",
            }}
          >
            <h2>
              {ppl.name}{" "}
              <em style={{ fontSize: "1.2rem" }}>({ppl.username})</em>
            </h2>
            {ppl.isMatched === "true" && (
              <span
                style={{ color: "hsl(288deg 78% 12%)", fontWeight: "bold" }}
              >
                MATCHED
              </span>
            )}

            {ppl.isMatched === "maybe" && (
              <span
                style={{ color: "hsl(288deg 78% 12%)", fontWeight: "bold" }}
              >
                Nominated as Matched
              </span>
            )}
            <h4>{ppl.pronouns}</h4>

            <h4>{ppl.isHosting ? "hosting" : "looking"} </h4>
            <div>
              <img
                style={{ width: "128px", height: "128px", objectFit: "cover" }}
                src={
                  ppl.img ?? "https://api.lorem.space/image/face?w=150&h=150"
                }
                alt={ppl.name}
              />
            </div>
            <h5>Contact</h5>
            <div style={{ display: "inline-flex" }}>
              <ul className="social-list">
                {ppl.contact.map((item, j) => (
                  <li key={j}>
                    {/* <a href="#" className="fa fa-twitter"></a>
                    {item} */}
                    {/* <a href={item} target="_blank">
                      {wordContain2(item)}
                    </a> */}
                    <a
                      href={
                        item.includes("@")
                          ? `mailto:${item}`
                          : item.includes("http://") ||
                            item.includes("https://")
                          ? item
                          : `http://${item}`
                      }
                      // href={
                      //   item.includes("http://") || item.includes("https://")
                      //     ? item
                      //     : `http://${item}`
                      // }
                      target="_blank"
                    >
                      {wordContain2(item)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
