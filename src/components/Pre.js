import React from "react";
function Pre(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}>
    <div className="loader"></div>
    <div className="loading-text">Loading creativity and wonder ...</div>
  </div>;
}

export default Pre;
