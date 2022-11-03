import React from "react";
import InputInfo from "../components/InputInfo";
import ListedProfiles from "../components/ListedProfiles";

export default function Home({ personInfo, setPersonInfo }) {
  const wordContain2 = (str) => {
    switch (true) {
      case str.includes("twitter"):
        return (
          <a href={str} target="_blank">
            <i className="fa fa-twitter" style={{ padding: "5px" }}></i>
            {str == "twitter" || str == "twitter.com"
              ? ""
              : str.split("twitter.com/")[1].split("/")[0]}
          </a>
        );
      case str.includes("instagram"):
        return (
          <a href={str} target="_blank">
            <i className="fa fa-instagram" style={{ padding: "5px" }}></i>
            {str == "instagram" || str == "instagram.com"
              ? ""
              : str.split("instagram.com/")[1].split("/")[0]}
          </a>
        );
      case str.includes("@"):
        return (
          <a href={`mailto:${str}`} target="_blank">
            <i className="fa fa-envelope" style={{ padding: "5px" }}></i>
            {str}
          </a>
        );
      default:
        return (
          <a href={str} target="_blank">
            {str}
          </a>
        );
    }
  };
  return (
    <>
      <h1>Roomie-Buddy</h1>
      <InputInfo
        personInfo={personInfo}
        setPersonInfo={setPersonInfo}
        wordContain2={wordContain2}
      />
      <ListedProfiles
        personInfo={personInfo}
        setPersonInfo={setPersonInfo}
        wordContain2={wordContain2}
      />
    </>
  );
}
