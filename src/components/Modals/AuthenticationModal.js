import React, { useState } from "react";

import opendoor from "../../assets//open-door-home-with-key-keyhole-new-housing-concept.png";
import SignupForm from "../SignupForm/SignupForm";
import SigninForm from "../SigninForm/SigninForm";

const AuthenticationModal = (props) => {
  const [dissmissButtonClicked, setDissmissButtonClicked] = useState(null);
  const [backdropClicked, setBackdropClicked] = useState(false);

  const backdropClickedHandler = () => {
    setBackdropClicked(true);
    props.onDismmissHandler(backdropClicked);
  };

  const dissmissButtonClickedHandler = () => {
    setDissmissButtonClicked(true);
    props.onDismmissHandler(dissmissButtonClicked);
  };

  return (
    <React.Fragment>
      <div
        onClick={backdropClickedHandler}
        className="fixed w-full h-screen bg-black/30 z-10"
      ></div>
      <div className=" flex rounded-xl absolute bg-white w-ninety md:w-sixty left-five top-[8%] md:top-ten md:left-twenty   z-20 lg:w-[80%] lg:left-[10%] xl:w-[60%] xl:left-[20%]">
        <div className="hidden lg:flex w-1/2 ">
          <img className="h-full w-full" src={opendoor} alt="" />
        </div>
        <div className="w-full relative flex-col px-8 lg:px-12 lg:w-1/2">
          <button
            onClick={dissmissButtonClickedHandler}
            className="absolute top-8 right-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 13.426 13.423"
            >
              <path
                id="Icon_ionic-ios-close"
                data-name="Icon ionic-ios-close"
                d="M19.589,18l4.8-4.8A1.124,1.124,0,0,0,22.8,11.616l-4.8,4.8-4.8-4.8A1.124,1.124,0,1,0,11.616,13.2l4.8,4.8-4.8,4.8A1.124,1.124,0,0,0,13.2,24.384l4.8-4.8,4.8,4.8A1.124,1.124,0,1,0,24.384,22.8Z"
                transform="translate(-11.285 -11.289)"
              />
            </svg>
          </button>
          {props.showSignupForm && <SignupForm></SignupForm>}
          {props.showSigninForm && <SigninForm></SigninForm>}
        </div>
      </div>
    </React.Fragment>
  );
};

export default AuthenticationModal;
