import React from "react";

const ContractTemplates = () => {
  return (
    <React.Fragment>
      <header className=" bg-grey py-8">
        <div className="flex items-center justify-between container mx-auto px-8 ">
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

          <div className="hidden lg:flex md:relative">
            <svg
              className="absolute top-3 left-3 "
              xmlns="http://www.w3.org/2000/svg"
              width="21.781"
              height="21.781"
              viewBox="0 0 21.781 21.781"
            >
              <g
                id="Icon_feather-search"
                data-name="Icon feather-search"
                transform="translate(-3.5 -3.5)"
              >
                <path
                  id="Path_212"
                  data-name="Path 212"
                  d="M21.715,13.107A8.607,8.607,0,1,1,13.107,4.5,8.607,8.607,0,0,1,21.715,13.107Z"
                  fill="none"
                  stroke="#d8d8d8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <path
                  id="Path_213"
                  data-name="Path 213"
                  d="M29.655,29.655l-4.68-4.68"
                  transform="translate(-5.789 -5.789)"
                  fill="none"
                  stroke="#d8d8d8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
            </svg>
            <input
              placeholder="Search for contract templates"
              className=" pl-12 h-12 w-888px bg-white "
            ></input>
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
          <div className=" flex items-center">
            <div className="relative mr-8">
              <div className=" text-center absolute right-0 top-0 bg-yellow-500 h-2 w-2 rounded-full text-white text-tiny">
                7
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22.493"
                height="23.07"
                viewBox="0 0 22.493 23.07"
              >
                <path
                  id="Path_211"
                  data-name="Path 211"
                  d="M28.969,24.764c-1.083-1.427-3.213-2.264-3.213-8.655,0-6.56-2.9-9.2-5.6-9.83-.253-.063-.436-.148-.436-.415v-.2a1.716,1.716,0,1,0-3.431,0v.2c0,.26-.183.352-.436.415-2.707.64-5.6,3.27-5.6,9.83,0,6.391-2.13,7.221-3.213,8.655A1.4,1.4,0,0,0,8.163,27H27.858A1.4,1.4,0,0,0,28.969,24.764Z"
                  transform="translate(-6.761 -3.93)"
                  fill="#020614"
                />
              </svg>
            </div>
            <div className=" hidden md:flex border border-yellow-600 w-16 h-16 bg-white rounded-full"></div>
          </div>
        </div>
      </header>

      <div className=" container mx-auto md:px-20 2xl:px-24">
        <div className=" mt-16  template-bg-image h-72 bg-cover  ">
          <div className=" pt-12 px-12">
            <h1 className="text-white text-center font-bold text-2xl md:text-3xl lg:text-4xl md:text-left">
              Contract Templates
            </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContractTemplates;
