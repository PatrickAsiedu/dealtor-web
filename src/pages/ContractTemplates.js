import React from "react";
// import NotificatinModal from "../components/Modals/NotificationModal";
import Header from "../components/Layout/Header";
import ContractTemplate from "../components/Template/ContractTemplate";

const ContractTemplates = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <div className=" container mx-auto md:px-20 2xl:px-24">
        <div className=" mt-16  template-bg-image h-72 bg-cover  ">
          <div className=" pt-20 px-12">
            <h1 className="text-white text-center font-bold text-xl md:text-2xl lg:text-3xl md:text-left">
              Contract Templates
            </h1>
            <p className="text-white text-xs mt-6 w-450px leading-relaxed">
              Land your dream job with captivating CVs you can professionally
              customize to reflect your true potential with Canva's free resume
              templates and easy-to-use design editor.
            </p>
          </div>
        </div>
        <p className="text-black mt-4 text-xs ">3206 Templates</p>
        <div className="2xl:grid grid-cols-7 gap-10">
          <ContractTemplate></ContractTemplate>
          <ContractTemplate></ContractTemplate>
          <ContractTemplate></ContractTemplate>
          <ContractTemplate></ContractTemplate>
          <ContractTemplate></ContractTemplate>
          <ContractTemplate></ContractTemplate>
          <ContractTemplate></ContractTemplate>
          <ContractTemplate></ContractTemplate>
          <ContractTemplate></ContractTemplate>
          <ContractTemplate></ContractTemplate>
          <ContractTemplate></ContractTemplate>
          <ContractTemplate></ContractTemplate>
          <ContractTemplate></ContractTemplate>
          <ContractTemplate></ContractTemplate>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContractTemplates;
