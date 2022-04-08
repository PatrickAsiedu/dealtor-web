import React from "react";

const Input = (props) => {
  return (
    <React.Fragment>
      <input
        className={`${props.width} ${
          props.margintop
        }${" rounded-5px w-full bg-grey h-9 placeholder:font-light text-xs pl-3 lg:mt-4"}`}
        placeholder={props.placeholder}
        type={props.type}
      />
    </React.Fragment>
  );
};

export default Input;
