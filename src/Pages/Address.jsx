import React from "react";
import { AddressForm } from "../Features/Features";

const Address = () => {
  return (
    <section className=" overflow-y-auto w-full h-full md:h-[90vh] bg-white flex flex-col gap-5 items-center p-4 md:p-[5px] mb-5 md:mb-0 md:pr-5 ">
      <div className=" w-full shadow-custom h-fit shadow-header-shadow rounded-lg">
        <div className=" w-full h-12.5 bg-grad px-5 flex items-center rounded-t-lg text-white ">
          <h1 className="text-xl font-medium">Address Book</h1>
        </div>
        <AddressForm />
      </div>
    </section>
  );
};

export default Address;
