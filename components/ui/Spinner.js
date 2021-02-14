import React from "react";
import "./Spinner.module.css";

const Spinner = () => {
  return (
    // <img
    //   src="../spinner.gif"
    //   style={{ width: "200px", margin: "auto", display: "block" }}
    //   alt="Loading"
    // />
    <div className="center">
      <div class="lds-dual-ring"></div>
    </div>
  );
};

export default Spinner;
