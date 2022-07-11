import React, { useState, useEffect } from "react";

// import SignupModal from "../components/Modals/AuthenticationModal";
import { Link } from "react-router-dom";
import AuthenticationModal from "../components/Modals/AuthenticationModal";

import sectionimage from "../assets/group_image.png";
import boxImage from "../assets/box_image.jpeg";
import birdsImage from "../assets/birds.jpeg";
import ducksImage from "../assets/ducks.jpeg";
import woodenAnimalImage from "../assets/wooden-animals.jpeg";

const images = [
  { id: 1, name: sectionimage },
  { id: 2, name: boxImage },
  { id: 3, name: birdsImage },
  { id: 4, name: ducksImage },
  { id: 5, name: woodenAnimalImage },
];

const RenderItems = ({ name, id, current, onItemClickHandler }) => (
  <li
    className="flex py-2 bg-grey px-4 lg:pl-8  md:h-20 lg:h-14 "
    onClick={() => onItemClickHandler(id)}
  >
    <span
      className={`h-8 w-8 flex justify-center items-center my-auto ${
        current === id ? "bg-primary" : "bg-deepblue"
      } text-white mr-3`}
    >
      {id}
    </span>
    <span className="w-[450px] leading-6 flex items-center text-deepblue">
      {" "}
      {name}
    </span>
  </li>
);

const Home = () => {
  const [signupClicked, setSignupClicked] = useState(false);
  const [signinClicked, setSigninClicked] = useState(false);

  // const currentCarouselImage =  useRef(0)
  const [currentCarouselImage, setCurrentCarouselImage] = useState(images[0]);

  useEffect(() => {
    const carousel = setInterval(() => {
      const indexCurrent = images.indexOf(currentCarouselImage);
      setCurrentCarouselImage(() => images[(indexCurrent + 1) % images.length]);
    }, 3000);

    return () => clearInterval(carousel);
  }, [currentCarouselImage]);

  const dismmissModalHandler = (dismmissButtonClicked) => {
    setSignupClicked(false);
    setSigninClicked(false);
  };

  const onSignupClickHandler = () => {
    setSignupClicked(true);
  };

  const onSigninClickHandler = () => {
    setSigninClicked(true);
  };

  let ShowAuthenticationModal = false;

  if (signupClicked || signinClicked) {
    ShowAuthenticationModal = true;
  }

  // console.log(currentCarouselImage);
  const onItemClickHandler = (id) => {
    // console.log("item with id cliked: ", id);
    setCurrentCarouselImage(images[id - 1]);
  };

  return (
    <React.Fragment>
      {ShowAuthenticationModal && (
        <AuthenticationModal
          onDismmissHandler={dismmissModalHandler}
          showSigninForm={signinClicked}
          showSignupForm={signupClicked}
        ></AuthenticationModal>
      )}
      <div className=" background-image ">
        <div className=" bg-white/20 backdrop-blur h-103px py-7 ">
          <header className="flex items-center justify-between container mx-auto px-8 md:px-14 lg:px-24 w-full">
            <Link to="/" className="flex items-center">
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
            </Link>

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
              <button
                onClick={onSigninClickHandler}
                className="border border-primary rounded-5px  text-primary font-semibold text-xs py-14px px-30px"
              >
                Sign In
              </button>
              <button
                onClick={onSignupClickHandler}
                className="border border-primary rounded-5px bg-primary text-white font-semibold text-xs py-14px px-30px"
              >
                Sign Up
              </button>
            </div>
          </header>
        </div>

        <section className=" container mx-auto px-8 md:px-14 lg:px-24 w-full ">
          <div className=" md:items-start">
            <div className="  mt-8  md:w-full lg:w-650px">
              <h1 className="font-semibold leading-10 text-center text-4xl md:text-5xl lg:text-6xl md:text-left">
                Edit, send &amp; sign PDF documents online for free.
              </h1>
            </div>
            <p className="text-center md:text-left mt-2  md:mt-4 font-light text-base md:text-lg lg:text-xl">
              Contract signing, simplified
            </p>
            <div className=" flex  justify-center md:justify-start ">
              <Link to="/ContractTemplates">
                <button className=" mt-6 mb-20  rounded-5px bg-primary py-14px px-12 text-xs font-bold text-white">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <section className=" bg-grey text-center py-12">
        <div className=" container mx-auto px-8 md:px-14 lg:px-24 w-full text-base md:text-lg lg:text-xl ">
          Renpathy streamlines contract signing, distribution and form
          completion
        </div>
      </section>

      <section className=" mt-24 grid grid-cols-1 md:grid-cols-2 container mx-auto px-8 md:px-14 lg:px-24 md:space-x-9 ">
        {/* implement carousel of images here */}
        <div>
          <img
            className=" object-fit"
            src={currentCarouselImage.name}
            alt={currentCarouselImage.name.toString()}
          />
        </div>

        <div className="mt-6 md:mt-0">
          <ol className=" text-sm space-y-3">
            <RenderItems
              id={1}
              current={currentCarouselImage.id}
              onItemClickHandler={onItemClickHandler}
              name="Create an Account"
            />
            <RenderItems
              id={2}
              current={currentCarouselImage.id}
              onItemClickHandler={onItemClickHandler}
              name="Select preferred contract template"
            />
            <RenderItems
              id={3}
              current={currentCarouselImage.id}
              onItemClickHandler={onItemClickHandler}
              name="Complete with your contracting details and agree to terms"
            />
            <RenderItems
              id={4}
              current={currentCarouselImage.id}
              onItemClickHandler={onItemClickHandler}
              name="Submit to your tenant or landlord to review and agree to terms"
            />
            <RenderItems
              id={5}
              current={currentCarouselImage.id}
              onItemClickHandler={onItemClickHandler}
              name="Completed agreement is available to both parties on Renpathy for saving"
            />
          </ol>
        </div>
      </section>
      <footer className="pt-[200px]"></footer>
    </React.Fragment>
  );
};

export default Home;
