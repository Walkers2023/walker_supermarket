import React from "react";
import { AccountForm, PasswordUpdate } from "../Features/Features";

const Account = () => {
  return (
    <section className=" overflow-y-auto w-full h-full md:h-[90vh] bg-white flex flex-col gap-5 items-center p-4 md:p-[5px] md:pr-5 ">
      <div className=" w-full h-full shadow-custom bg-white">
        <div className=" w-full h-12.5 bg-grad px-5 flex items-center text-white ">
          <h1 className="text-xl font-medium">Account Details</h1>
        </div>
        <AccountForm />
      </div>
      <div className=" w-full h-full pb-10 md:pb-0 shadow-custom bg-white">
        <div className=" w-full h-12.5 bg-grad px-5 flex items-center text-white ">
          <h1 className="text-xl font-medium">Change Password</h1>
        </div>
        <PasswordUpdate />
      </div>
    </section>
  );
};

export default Account;
