import React from "react";

export default function About() {
  return (
    <div>
      <section style={{ padding: "0 20%" }} className="about-content">
        <h2>About</h2>
        <p>
          Yo! Listen. This site is to help Afrotech attendees find roomates for
          the entirety of the event.
        </p>
        <p>
          Data will be kept for the month of November 2022, after that, it will
          self delete.
        </p>
        <p>
          We advise you to vet the person you are connecting with thoroughly
          before making a commitment, all monetary exhanges are between you and
          the party.
        </p>
        <p>
          No data will be shared with a third party service, but just in case,{" "}
          <br />
          <b className="warning">Use at your own risk. </b>{" "}
        </p>
      </section>
    </div>
  );
}
