/*
 *
 * HomePage
 *
 */

import React from "react";

const HomePage: React.VoidFunctionComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0E4DFF",
        height: "100%",
        width: "100%",
      }}
    >
      <a href="https://www.nimma.codes" target="__blank">
        <img style={{ display: "block" }} src="/nimma-codes.png" />
      </a>
    </div>
  );
};

export default HomePage;
