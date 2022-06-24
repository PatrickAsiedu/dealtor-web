import React from "react";

const Input = (props) => {
  return (
    <React.Fragment>
      <input
        className={`${props.width} ${props.margintop} ${props.color} ${
          props.height
        } ${
          props.border
        } ${" rounded-5px  placeholder:font-light text-xs pl-3 outline-primary"}`}
        placeholder={props.placeholder}
        type={props.type}
      />
    </React.Fragment>
  );
};

export default Input;
