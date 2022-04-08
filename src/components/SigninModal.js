import React from "react";
import opendoor from "../assets//open-door-home-with-key-keyhole-new-housing-concept.png";
import SignupForm from "../components/SignupForm/SignupForm";

const SigninModal = (props) => {
  return (
    <React.Fragment>
      <div
        onClick={props.dissmissModal}
        className="fixed w-full h-screen bg-black/30"
      ></div>
      <div className=" flex rounded-xl fixed bg-white w-ninety md:w-60 left-five top-five md:top-ten md:left-twenty  h-2/3 md:h-4/5 ">
        <div className="hidden lg:flex w-1/2 ">
          <img className="h-full w-full" src={opendoor} alt="" />
        </div>
        <div className="w-full relative flex-col px-12 lg:w-1/2">
          <button
            onClick={props.dissmissModal}
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
          <SignupForm></SignupForm>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SigninModal;
