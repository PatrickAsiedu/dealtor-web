import React from "react";
import Header from "../components/Layout/Header";
import profilepic from "../assets/pexels-pixabay-220453.jpg";
// import Input from "../components/UI/Input.js";

const Profile = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <div className=" container mx-auto md:px-20 2xl:px-24 flex mt-16 space-x-10">
        <div className="bg-grey h-548px w-536 px-32 pt-20 ">
          <div className="relative">
            <img className=" w-60 h-60 rounded-full " src={profilepic} alt="" />
            <button className="absolute top-0 right-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="51"
                height="51"
                viewBox="0 0 51 51"
              >
                <g
                  id="Ellipse_9"
                  data-name="Ellipse 9"
                  fill="#de8108"
                  stroke="#fff"
                  stroke-width="1"
                >
                  <circle cx="25.5" cy="25.5" r="25.5" stroke="none" />
                  <circle cx="25.5" cy="25.5" r="25" fill="none" />
                </g>
                <path
                  id="Icon_feather-edit-2"
                  data-name="Icon feather-edit-2"
                  d="M18.628,4.12A2.947,2.947,0,0,1,22.8,8.288L8.73,22.353,3,23.916l1.563-5.73Z"
                  transform="translate(12.171 11.914)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                />
              </svg>
            </button>
          </div>
          <h1 className=" mt-4 font-semibold text-deepblue text-2xl  text-center">
            Kyle Walker
          </h1>
        </div>

        <div className="bg-grey w-full h-screen px-20 text-deepblue font-normal text-lg  ">
          <h1 className=" mt-24 mb-4 text-4xl font-bold ">Account Data</h1>
          <hr className="bg-black w-full" />
          <div className="flex justify-between">
            <div>
              <label className="block mt-12" htmlFor="">
                Legal First Name
              </label>
              <input
                className="bg-white h-14 w-72 border-2 mt-5 pl-4"
                placeholder="Kyle"
                type="text"
              />
              <label className="block mt-12" htmlFor="">
                Email Address
              </label>
              <input
                className="bg-white h-14 w-72 border-2 mt-5  pl-4"
                type="email"
                placeholder="kylewalker@gmail.com"
              />
            </div>
            <div>
              <label className="mt-12 block" htmlFor="">
                Legal Last Name
              </label>
              <input
                className="bg-white h-14 w-72 border-2 mt-5  pl-4"
                placeholder="Walker"
                type="text"
              />
              <label className="mt-12 block" htmlFor="">
                Phone Number
              </label>
              <input
                className="bg-white h-14 w-72 border-2 mt-5  pl-4"
                placeholder="+2333 4567 76888"
                type="text"
              />
              <div className="flex justify-between mt-12">
                <button className="bg-grey border-2 px-8">Cancel</button>
                <button className="border -2 py-3 bg-primary px-2 text-white font-medium">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
