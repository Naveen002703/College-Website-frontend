import React from "react";
const Images = (props) => {
  return (
    <div>
      <img
        src={props.text}
        style={{ width: "100vw", height: "600px" }}
        alt=""
      />
    </div>
  );
};
export default Images;