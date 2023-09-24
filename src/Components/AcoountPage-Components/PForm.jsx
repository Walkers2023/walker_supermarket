import React, { useState } from "react";
import { Button, Input } from "../Components";

const PForm = () => {
  const [currentPwd, setCurrentPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [confirmNewPwd, setConfirmNewPwd] = useState("");

  const addDetails = (e) => {
    e.preventDefault();
    let acctData = {
      currentPwd: currentPwd,
      newPwd: newPwd,
      confirmNewPwd: confirmNewPwd,
    };
    console.log(acctData);
    setCurrentPwd("");
    setNewPwd("");
    setConfirmNewPwd("");
  };

  return (
    <form
      onSubmit={addDetails}
      className=" w-full h-full flex flex-col gap-6 items-start"
    >
      <Input
        id={"currentPwd"}
        label={"Current Password"}
        placeholder={"Enter Current Password..."}
        autoComplete={`off`}
        type="password"
        className={` w-full lg:w-1/2 `}
        inputFunc={(e) => setCurrentPwd(e.target.value)}
        value={currentPwd}
      />
      <Input
        id={"newPwd"}
        label={"New Password"}
        placeholder={"Enter New Password..."}
        autoComplete={`off`}
        type="password"
        className={` w-full lg:w-1/2 `}
        inputFunc={(e) => setNewPwd(e.target.value)}
        value={newPwd}
      />
      <Input
        id={"confirmNewPwd"}
        label={"Confirm Password"}
        placeholder={"Confirm New Password"}
        autoComplete={`off`}
        type="password"
        className={`  w-full lg:w-1/2`}
        inputFunc={(e) => setConfirmNewPwd(e.target.value)}
        value={confirmNewPwd}
      />
      <div className=" w-full h-fit ">
        <Button className={` btn-grad`} type={`submit`} text={`Save`} />
      </div>
    </form>
  );
};

export default PForm;
