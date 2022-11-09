import React from "react";

const TextMhuuKrob = (props) => {
  return (
    <div className="input-address">
      <p>{props.string}</p>
      <input
        type="text"
        placeholder={props.placeholder}
        className={"address " + props.string.split(" ").join("-").toLowerCase()}
      />
    </div>
  );
};

export default TextMhuuKrob;
