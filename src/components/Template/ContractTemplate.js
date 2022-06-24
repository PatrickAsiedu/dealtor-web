import React from "react";
import { Link } from "react-router-dom";

const ContractTemplate = () => {
  return (
    <Link to="/Contract" className="hover:cursor-pointer">
      <div className="mt-4 bg-primary w-full h-31px md:w-163px text-white text-xs pl-3 py-2 ">
        {" "}
        Classic
      </div>
      <div className="h-52 w-full md:w-163px border mt-1"></div>
    </Link>
  );
};

export default ContractTemplate;
