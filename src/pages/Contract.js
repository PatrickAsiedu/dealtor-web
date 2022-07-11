import React, { useState } from "react";
import Header from "../components/Layout/Header";
import ContractModal from "../components/Modals/ContractModal";
// import ContractModal from "../components/Modals/ContractModal";

const Contract = () => {

  const [showContractModal, setShowContractModal] = useState(false);
  // const []


  return (
    <React.Fragment>
      {showContractModal &&  
        <ContractModal 
          setShowContractModal={setShowContractModal}
        />}
      <Header />

      <div className=" md:px-8 lg:px-24 xl:px-64 2xl:px-96">
        <div className="pt-12 px-8 md:px-20 mt-28  w-full bg-grey">
          <div className="  flex items-center justify-between">
            <h1 className="font-bold">Contract</h1>
            <button className="rounded-5px bg-primary py-14px px-9 text-white" onClick={()=>setShowContractModal(true)}>
              {" "}
              Begin Contracting
            </button>
          </div>
          <hr className="mt-8 bg-black mb-8" />
          <main className=" leading-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            doloremque, in sed aliquid est aut mollitia facilis vel dolores,
            debitis quos facere, possimus at? Reprehenderit quasi ratione quia
            quaerat tempore. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Veniam doloremque, in sed aliquid est aut mollitia facilis vel
            dolores, debitis quos facere, possimus at? Reprehenderit quasi
            ratione quia quaerat tempore. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Veniam doloremque, in sed aliquid est
            aut mollitia facilis vel dolores, debitis quos facere, possimus at?
            Reprehenderit quasi ratione quia quaerat tempore. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Veniam doloremque, in sed
            aliquid est aut mollitia facilis vel dolores, debitis quos facere,
            possimus at? Reprehenderit quasi ratione quia quaerat tempore. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            doloremque, in sed aliquid est aut mollitia facilis vel dolores,
            debitis quos facere, possimus at? Reprehenderit quasi ratione quia
            quaerat tempore. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Veniam doloremque, in sed aliquid est aut mollitia facilis vel
            dolores, debitis quos facere, possimus at? Reprehenderit quasi
            ratione quia quaerat tempore. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Veniam doloremque, in sed aliquid est
            aut mollitia facilis vel dolores, debitis quos facere, possimus at?
            Reprehenderit quasi ratione quia quaerat tempore. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Veniam doloremque, in sed
            aliquid est aut mollitia facilis vel dolores, debitis quos facere,
            possimus at? Reprehenderit quasi ratione quia quaerat tempore. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            doloremque, in sed aliquid est aut mollitia facilis vel dolores,
            debitis quos facere, possimus at? Reprehenderit quasi ratione quia
            quaerat tempore. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Veniam doloremque, in sed aliquid est aut mollitia facilis vel
            dolores, debitis quos facere, possimus at? Reprehenderit quasi
            ratione quia quaerat tempore. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Veniam doloremque, in sed aliquid est
            aut mollitia facilis vel dolores, debitis quos facere, possimus at?
            Reprehenderit quasi ratione quia quaerat tempore. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Veniam doloremque, in sed
            aliquid est aut mollitia facilis vel dolores, debitis quos facere,
            possimus at? Reprehenderit quasi ratione quia quaerat tempore. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            doloremque, in sed aliquid est aut mollitia facilis vel dolores,
            debitis quos facere, possimus at? Reprehenderit quasi ratione quia
            quaerat tempore. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Veniam doloremque, in sed aliquid est aut mollitia facilis vel
            dolores, debitis quos facere, possimus at? Reprehenderit quasi
            ratione quia quaerat tempore. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Veniam doloremque, in sed aliquid est
            aut mollitia facilis vel dolores, debitis quos facere, possimus at?
            Reprehenderit quasi ratione quia quaerat tempore. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Veniam doloremque, in sed
            aliquid est aut mollitia facilis vel dolores, debitis quos facere,
            possimus at? Reprehenderit quasi ratione quia quaerat tempore.
          </main>
        </div>
      </div>
      <footer className="pt-[200px]"></footer>
    </React.Fragment>
  );
};

export default Contract;
