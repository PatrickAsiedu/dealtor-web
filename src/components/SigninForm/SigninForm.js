import React from "react";
import { Link } from "react-router-dom";
import Input from "../UI//Input";

const SigninForm = () => {
  return (
    <React.Fragment>
      <form>
        <h1 className=" w-full block mt-36 text-center  font-semibold text-logotext ">
          Sign In
        </h1>
        <div className="mt-8 md:flex md:justify-between ">
          <button className="w-full lg:w-36 2xl:w-56 py-3 flex items-center border border-logotext text-xs font-normal  pr-8  rounded-md text-logotext">
            <span className=" mx-3 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25.661"
                height="25.661"
                viewBox="0 0 25.661 25.661"
              >
                <path
                  id="Icon_awesome-google-plus"
                  data-name="Icon awesome-google-plus"
                  d="M12.83.563a12.83,12.83,0,1,0,12.83,12.83A12.835,12.835,0,0,0,12.83.563ZM9.173,19.808a6.415,6.415,0,1,1,0-12.83,6.2,6.2,0,0,1,4.294,1.671l-1.738,1.687a3.64,3.64,0,0,0-2.556-.988,4.041,4.041,0,0,0,0,8.081A3.477,3.477,0,0,0,12.8,14.671H9.173v-2.2h6.048a5.649,5.649,0,0,1,.1,1.071,5.918,5.918,0,0,1-6.146,6.27Zm11.91-5.494V16.15H19.246V14.314H17.409V12.477h1.837V10.641h1.837v1.837H22.9v1.837Z"
                  transform="translate(0 -0.563)"
                  fill="#000e0d"
                />
              </svg>
            </span>{" "}
            Sign Up with Google
          </button>
          <button className="w-full lg:w-36 2xl:w-56 mt-2 md:mt-0  py-3 flex items-center border border-logotext text-xs font-normal pr-8  rounded-md text-logotext">
            <span className="mx-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 23 23"
              >
                <path
                  id="Icon_ionic-logo-facebook"
                  data-name="Icon ionic-logo-facebook"
                  d="M26.23,4.5H5.77A1.27,1.27,0,0,0,4.5,5.77V26.23A1.27,1.27,0,0,0,5.77,27.5H16V18.4H13.251V15.042H16v-2.48a4.37,4.37,0,0,1,4.714-4.588c1.27,0,2.635.1,2.953.138v3.1H21.552c-1.443,0-1.719.683-1.719,1.689v2.138h3.438L22.822,18.4H19.833v9.1h6.4a1.27,1.27,0,0,0,1.27-1.27V5.77A1.27,1.27,0,0,0,26.23,4.5Z"
                  transform="translate(-4.5 -4.5)"
                  fill="#000e0d"
                />
              </svg>
            </span>{" "}
            Sign Up with Facebook
          </button>
        </div>
        <div className="flex mt-5 items-center justify-between">
          <hr className=" w-[30%] border" />

          <span className="text-greytext text-xs">Or continue with</span>
          <hr className=" w-[30%] border" />
        </div>

        {/* <input type="text" className="h-9 bg-grey w-full " /> */}

        <Input
          height="h-9"
          color="bg-grey"
          type="text"
          margintop="mt-4"
          placeholder="Email Address"
          width="w-full"
        ></Input>

        <Input
          height="h-9"
          color="bg-grey"
          type="password"
          placeholder="Password"
          margintop="mt-5"
          width="w-full"
        ></Input>
        <button className="mt-30px bg-primary text-white w-full rounded-5px h-9 text-xs">
          Sign In
        </button>
        <div className="mt-6 text-xs text-center pb-14">
          {" "}
          <span className="text-logotext">Already Have an account?</span>{" "}
          <Link className="font-bold ml-1"> Sign Up</Link>
        </div>
      </form>
    </React.Fragment>
  );
};

export default SigninForm;
