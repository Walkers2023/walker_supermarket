import React, { useState } from "react";
import { Button, Input, Select } from "../Components";

const Aform = () => {
  const [fullName, setFullName] = useState("");
  const [DOB, setDOB] = useState("");
  const [gender, setGender] = useState("");
  const [race, setRace] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const races = [
    { value: "default", label: "Race*" },
    { value: "Black/African", label: "Black/African" },
    { value: " Hispanic", label: "Hispanic" },
    { value: "White", label: "White" },
  ];

  const genders = [
    { value: "default", label: "Gender*" },
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    // {" Others "}
  ];

  const handleGenderSelectChange = (e, name) => {
    setGender({
      ...gender,
      [name]: e.target.value,
    });
  };

  const handleSelectChange = (e, name) => {
    setRace({
      ...race,
      [name]: e.target.value,
    });
  };

  const addDetails = (e) => {
    e.preventDefault();
    let acctData = {
      fullName: fullName,
      DOB: DOB,
      gender: gender,
      race: race.race,
      emailId: email,
      phoneNo: phone,
    };
    console.log(acctData);
    setFullName("");
    setDOB("");
    setGender("");
    setEmail("");
    setPhone("");
  };

  return (
    <form
      onSubmit={addDetails}
      className=" w-full h-fit flex flex-col gap-6 items-start"
    >
      <Input
        id={"fullName"}
        label={"Full Name"}
        placeholder={"John Doe"}
        autoComplete={`on`}
        type="text"
        className={` w-full`}
        inputFunc={(e) => setFullName(e.target.value)}
        value={fullName}
      />
      <div className=" w-full h-full flex flex-col sm:gap-2.5 lg:gap-5 md:flex-row gap-5">
        <Input
          id={"DOB"}
          label={"Date Of Birth"}
          placeholder={"Enter Date Of Birth"}
          autoComplete={`off`}
          type="date"
          className={` w-full `}
          inputFunc={(e) => setDOB(e.target.value)}
          value={DOB}
        />

        <Select
          className={`select w-full  ${!genders && "text-textColor"} `}
          label="Gender"
          options={genders}
          handleChange={(e) => handleGenderSelectChange(e, "gender")}
          id={`Gender`}
          value={gender.gender}
        />
        <Select
          className={`select w-full  ${!races && "text-textColor"} `}
          label="Ethnic Race"
          options={races}
          handleChange={(e) => handleSelectChange(e, "race")}
          id={`Race`}
          value={race.race}
        />
      </div>
      <div className=" w-full h-fit flex flex-col md:flex-row gap-5">
        <Input
          id={"email"}
          label={"Email"}
          placeholder={"walkers@gmail.com"}
          autoComplete={`on`}
          type="text"
          className={` w-full `}
          inputFunc={(e) => setEmail(e.target.value)}
          value={email}
        />

        <Input
          id={"phoneNo"}
          label={"Phone Number"}
          placeholder={"+44 771 234 5678"}
          autoComplete={`one`}
          type="text"
          className={` w-full `}
          inputFunc={(e) => setPhone(e.target.value)}
          value={phone}
        />
      </div>
      <div className="w-full h-fit flex">
        <Button className={`btn-grad`} type={`submit`} text={`Save`} />
      </div>
    </form>
  );
};

export default Aform;
