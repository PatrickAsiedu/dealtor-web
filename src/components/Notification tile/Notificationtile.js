import React from "react";

const Notifcationtile = () => {
  return (
    <div className="flex items-center  pt-10 pb-5">
      <svg
        className=" ml-8"
        id="Icon_ionic-ios-notifications"
        data-name="Icon ionic-ios-notifications"
        xmlns="http://www.w3.org/2000/svg"
        width="22.493"
        height="28.132"
        viewBox="0 0 22.493 28.132"
      >
        <path
          id="Path_229"
          data-name="Path 229"
          d="M17.993,32.063c2.187,0,3.382-1.547,3.382-3.727H14.6C14.6,30.516,15.8,32.063,17.993,32.063Z"
          transform="translate(-6.761 -3.93)"
          fill="#005048"
        />
        <path
          id="Path_230"
          data-name="Path 230"
          d="M28.969,24.764c-1.083-1.427-3.213-2.264-3.213-8.655,0-6.56-2.9-9.2-5.6-9.83-.253-.063-.436-.148-.436-.415v-.2a1.716,1.716,0,1,0-3.431,0v.2c0,.26-.183.352-.436.415-2.707.64-5.6,3.27-5.6,9.83,0,6.391-2.13,7.221-3.213,8.655A1.4,1.4,0,0,0,8.163,27H27.858A1.4,1.4,0,0,0,28.969,24.764Z"
          transform="translate(-6.761 -3.93)"
          fill="#005048"
        />
      </svg>

      <div className="ml-4 w-72 font-normal">
        <span className="text-primary font-bold">Update</span> Contract has been
        finalised by counterparty.
      </div>
    </div>
  );
};

export default Notifcationtile;
