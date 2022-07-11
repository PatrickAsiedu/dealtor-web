import React from "react";
import Input from "../UI//Input";
import { Link } from "react-router-dom";

const ContractForm = () => {
  return (
    <React.Fragment>
      <form>
        <h1 className=" w-full block mt-16  font-semibold text-logotext ">
          Contract Details
        </h1>
        
        <div className="flex mt-1 mb-5 items-center justify-between">
          <hr className=" w-full border" />
        </div>
        <Input
            height="h-9"
            color="bg-grey"
            type="text"
            placeholder="Tenant/Owner"
            margintop="mt-3"
            width="w-full"
          /> 
        <Input
          height="h-9"
          color="bg-grey"
          type="text"
          placeholder="kyle Walker"
          margintop="mt-5"
          width="w-full"
        />
        <Input
          height="h-9"
          color="bg-grey"
          type="text"
          placeholder="kylewalker@gmail"
          margintop="mt-5"
          width="w-full"
        />
        <div className="flex justify-between">
        <Input
          height="h-9"
          color="bg-grey"
          type="text"
          placeholder="Phone Number"
          margintop="mt-5"
          width="w-[45%]"
        />

        <Input
          height="h-9"
          color="bg-grey"
          type="date"
          placeholder="Agreement Date"
          margintop="mt-5"
          width="w-[45%]"
        />
        </div>
        <div className="flex justify-between">
        <Input
          height="h-9"
          color="bg-grey"
          type="text"
          placeholder="Property Location"
          margintop="mt-5"
          width="w-[45%]"
        />

        <Input
          height="h-9"
          color="bg-grey"
          type="date"
          placeholder="Property Type"
          margintop="mt-5"
          width="w-[45%]"
        />
        </div>


        <Input
          height="h-9"
          color="bg-grey"
          type="number"
          placeholder="Number of Rooms"
          margintop="mt-5"
          width="w-full"
        />
        <button className="mt-6 bg-primary text-white w-full rounded-5px h-9 text-xs">
          PReview Contract
        </button>
        
      </form>
    </React.Fragment>
  );
};

export default ContractForm;
