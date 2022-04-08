import React, { useState } from "react";

import sectionimage from "../assets//Group 1238.png";
import SignupModal from "../components/Modals/SignupModal";

const Home = () => {
  const [showSigninModal, setShowSigninModal] = useState(null);

  const onClickHander = () => {
    setShowSigninModal(true);
  };

  const dissmissmodalHandler = () => {
    setShowSigninModal(false);
  };

  return (
    <React.Fragment>
      {showSigninModal && (
        <SignupModal dismissModal={dissmissmodalHandler}></SignupModal>
      )}
      <div className=" background-image ">
        <div className=" bg-white/20 backdrop-blur h-103px py-7 ">
          <div className="flex items-center justify-between container mx-auto px-8 md:px-14 lg:px-24 w-full">
            <div className="flex items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35.745"
                  height="41.688"
                  viewBox="0 0 35.745 41.688"
                >
                  <path
                    id="Icon_map-real-estate-agency"
                    data-name="Icon map-real-estate-agency"
                    d="M11.583,33.484H37.526v-22.2H11.583ZM24.765,13.5l9.353,8.169H31.762v9.8H26.284V24.548h-3.46v6.918H17.636v-9.8H15.219ZM8.7,5.81V.733H2.935V42.421H8.7V8.405H38.68V5.81Z"
                    transform="translate(-2.935 -0.733)"
                    fill="#005048"
                  />
                </svg>
              </span>
              <span className=" ml-2 text-2xl font-semibold text-logotext">
                RENPATHY
              </span>
            </div>

            <div className="md:hidden">
              <svg
                width="26"
                height="18"
                viewBox="0 0 26 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z"
                  fill="#005048"
                />
              </svg>
            </div>

            <div className="hidden md:flex space-x-7">
              <button className="border border-primary rounded-5px  text-primary font-semibold text-xs py-14px px-30px">
                Sing In
              </button>
              <button
                onClick={onClickHander}
                className="border border-primary rounded-5px bg-primary text-white font-semibold text-xs py-14px px-30px"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div className=" container mx-auto px-8 md:px-14 lg:px-24 w-full ">
          <div className=" md:items-start">
            <div className="  mt-8  md:w-96 xl:w-650px">
              <h1 className="font-semibold leading-10 text-center text-4xl md:text-5xl lg:text-6xl md:text-left">
                Edit, send &amp; sign PDF documents online for free.
              </h1>
            </div>
            <p className="text-center md:text-left mt-2  md:mt-4 font-light text-base md:text-lg lg:text-xl">
              Contract signing, simplified
            </p>
            <div className=" flex  justify-center md:justify-start ">
              <button className=" mt-6 mb-4 2xl:mb-40 rounded-5px bg-primary py-14px px-12 text-xs font-bold text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-grey text-center py-12">
        <div className=" container mx-auto px-8 md:px-14 lg:px-24 w-full text-base md:text-lg lg:text-xl ">
          Renpathy streamlines contract signing, distribution and form
          completion
        </div>
      </div>

      <div className=" mt-24 grid grid-cols-1 md:grid-cols-2 container mx-auto px-8 md:px-14 lg:px-24 md:space-x-9 ">
        <div>
          <img className=" object-fit" src={sectionimage} alt="logo" />
        </div>
        <div className>
          <ol className=" text-sm space-y-3">
            <li className="py-9 bg-grey pl-34px ">
              <span className="py-2 px-14px bg-primary text-white mr-3">1</span>{" "}
              Create an Account
            </li>
            <li className="flex py-9 bg-grey pl-34px">
              <span className="py-2 px-14px bg-deepblue text-white mr-3">
                2
              </span>{" "}
              Select preferred contract template
            </li>
            <li className="flex py-9 bg-grey pl-34px">
              <span className="py-2 px-14px bg-deepblue text-white mr-3">
                3
              </span>
              Complete with your contracting details and agree to terms
            </li>
            <li className="py-9 bg-grey pl-34px flex">
              <span className="py-2 px-14px bg-deepblue text-white mr-3">
                4
              </span>
              Submit to your tenant or landlord to review and agree to terms
            </li>
            <li className="py-9 bg-grey pl-34px flex">
              <span className="py-2 px-14px bg-deepblue text-white mr-3">
                5
              </span>
              Completed agreement is available to both parties on Renpathy for
              saving
            </li>
          </ol>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
