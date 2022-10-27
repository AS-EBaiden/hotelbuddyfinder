import React from "react";
import InputInfo from "../components/InputInfo";
import ListedProfiles from "../components/ListedProfiles";

export default function Home({ personInfo, setPersonInfo }) {
  return (
    <>
      <InputInfo personInfo={personInfo} setPersonInfo={setPersonInfo} />
      <ListedProfiles personInfo={personInfo} setPersonInfo={setPersonInfo} />
    </>
  );
}
