import React from "react";
// import NotificatinModal from "../components/Modals/NotificationModal";
import Header from "../components/Layout/Header";
import ContractTemplate from "../components/Template/ContractTemplate";
import ContractImg from "../assets/Group 1219.png";

const ContractTemplates = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <div className=" container mx-auto md:px-20 2xl:px-24">
        <section className=" mt-16  template-bg-image h-72 flex justify-between pr-12 bg-[10%]">
          <div className=" pt-20 px-12">
            <h1 className="text-white text-center font-bold text-xl md:text-2xl lg:text-3xl md:text-left">
              Contract Templates
            </h1>
            <p className="text-white text-xs text-center md:text-left mt-6 md:w-450px leading-relaxed">
              Land your dream job with captivating CVs you can professionally
              customize to reflect your true potential with Canva's free resume
              templates and easy-to-use design editor.
            </p>
          </div>
          <img className="hidden lg:flex md:w-96" src={ContractImg} alt="" />
        </section>
        <p className="text-black mt-4 text-xs px-8 md:px-0 ">3206 Templates</p>
        <section className="grid  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-10 px-20 md:px-0">
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
        </section>
      </div>
    </React.Fragment>
  );
};

export default ContractTemplates;
