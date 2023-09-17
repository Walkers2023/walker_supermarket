import React, { useState } from "react";
import { Button, Input, Select } from "../Components";

const AddForm = () => {
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [deliveryAddressTwo, setDeliveryAddressTwo] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [additionalInfoTwo, setAdditionalInfoTwo] = useState("");
  const [regionData, setRegionData] = useState("");
  const [regionTwoData, setRegionTwoData] = useState("");
  const [cityData, setCityData] = useState("");
  const [cityTwoData, setCityTwoData] = useState("");
  const [checked, setChecked] = useState();
  const [checked2, setChecked2] = useState();

  const regions = [
    { value: "default", label: "Region*" },
    { value: "Black/African", label: "Black/African" },
    { value: " Hispanic", label: "Hispanic" },
    { value: "White", label: "White" },
  ];
  const cities = [
    { value: "default", label: "City*" },
    { value: "Black/African", label: "Black/African" },
    { value: " Hispanic", label: "Hispanic" },
    { value: "White", label: "White" },
  ];

  const handleRegionChange = (e, name) => {
    setRegionData({
      ...regionData,
      [name]: e.target.value,
    });
  };
  const handleRegionTwoChange = (e, name) => {
    setRegionTwoData({
      ...regionTwoData,
      [name]: e.target.value,
    });
  };
  const handleCityChange = (e, name) => {
    setCityData({
      ...cityData,
      [name]: e.target.value,
    });
  };
  const handleCityTwoChange = (e, name) => {
    setCityTwoData({
      ...cityTwoData,
      [name]: e.target.value,
    });
  };

  const checkedFunc = (e) => {
    setChecked(!checked);
  };

  const checked2Func = (e) => {
    setChecked2(!checked2);
  };

  const getAddress = (e) => {
    e.preventDefault();
    let acctData = {
      deliveryAddress: deliveryAddress,
      additional_Info: additionalInfo,
    };
    console.log(acctData);
    setDeliveryAddress("");
    setAdditionalInfo("");
  };

  return (
    <form
      onSubmit={getAddress}
      className="  w-full h-full flex flex-col gap-10 items-start"
    >
      {/* First Address Box */}
      <div className="w-full h-fit mt-5 flex flex-col gap-6 items-start">
        <div className=" w-full h-12.5 bg-grad px-5 flex items-center text-white ">
          <h1 className="text-xl font-medium">Address one :</h1>
        </div>
        <div className="w-full flex flex-col gap-6">
          <Input
            id={"delivery-address"}
            label={"Delivery Address"}
            placeholder={"Enter Your Delivery Address"}
            autoComplete={`off`}
            type="text"
            className={` w-full `}
            inputFunc={(e) => setDeliveryAddress(e.target.value)}
            value={deliveryAddress}
          />
          <Input
            id={"additionalInfo"}
            label={"Additional Information"}
            placeholder={"Any Additional Information..."}
            autoComplete={`off`}
            type="text"
            className={` w-full `}
            inputFunc={(e) => setAdditionalInfo(e.target.value)}
            value={additionalInfo}
          />
          {/* DropDowns */}
          <div className=" w-full h-full flex flex-col md:flex-row md:gap-10 gap-6">
            <div className="w-full h-full">
              <Select
                className={`select w-full ${!regions && "text-textColor"} `}
                options={regions}
                placeholder={` Select Region `}
                id={`region`}
                value={regionData.region}
                handleChange={(e) => handleRegionChange(e, "region")}
              />
            </div>
            <div className="w-full h-full">
              <Select
                className={`select w-full ${!cities && "text-textColor"} `}
                options={cities}
                placeholder={` Select City `}
                id={`city`}
                value={cityData.city}
                handleChange={(e) => handleCityChange(e, "city")}
              />
            </div>
          </div>
        </div>
        {/* Default Checkbox */}
        <div className=" w-fit h-fit flex items-center gap-2.5 flex-row flex-nowrap">
          <input
            type="checkbox"
            checked={checked}
            name={"default-one"}
            onChange={checkedFunc}
            className={` bg-white w-6 h-6 checked:bg-secondary`}
            id={"default-one"}
          />
          <label
            htmlFor={"default-one"}
            className={` w-full text-xl font-normal text-secondary`}
          >
            Set as Default Address
          </label>
        </div>
      </div>
      {/* Second Address Box */}
      <div className="w-full h-fit flex flex-col gap-6 items-start">
        <div className=" w-full h-12.5 bg-grad px-5 flex items-center text-white ">
          <h1 className="text-xl font-medium">Address Two :</h1>
        </div>
        <div className="w-full flex flex-col gap-6">
          <Input
            id={"delivery-address-two"}
            label={"Delivery Address"}
            placeholder={"Enter Your Delivery Address"}
            autoComplete={`off`}
            type="text"
            className={` w-full `}
            inputFunc={(e) => setDeliveryAddressTwo(e.target.value)}
            value={deliveryAddressTwo}
          />
          <Input
            id={"additionalInfoTwo"}
            label={"Additional Information"}
            placeholder={"Any Additional Information..."}
            autoComplete={`off`}
            type="text"
            className={` w-full `}
            inputFunc={(e) => setAdditionalInfoTwo(e.target.value)}
            value={additionalInfoTwo}
          />
          {/* DropDowns */}
          <div className=" w-full h-full flex flex-col md:flex-row md:gap-10 gap-6">
            <div className="w-full h-full">
              <Select
                className={`select w-full ${!regions && "text-textColor"} `}
                options={regions}
                placeholder={` Select Region `}
                id={`regionTwo`}
                value={regionTwoData.region}
                handleChange={(e) => handleRegionTwoChange(e, "regionTwo")}
              />
            </div>
            <div className="w-full h-full">
              <Select
                className={`select w-full ${!cities && "text-textColor"} `}
                options={cities}
                placeholder={` Select City `}
                id={`cityTwo`}
                value={cityTwoData.city}
                handleChange={(e) => handleCityTwoChange(e, "cityTwo")}
              />
            </div>
          </div>
        </div>
        {/* Default Checkbox */}
        <div className=" w-fit h-fit flex items-center gap-2.5 flex-row flex-nowrap">
          <input
            type="checkbox"
            checked={checked2}
            name={"default_two"}
            onChange={checked2Func}
            className={` bg-white w-6 h-6 checked:bg-secondary`}
            id={"default-two"}
          />
          <label
            htmlFor={"default-two"}
            className={` w-full text-xl font-normal text-secondary`}
          >
            Set as Default Address
          </label>
        </div>
      </div>
      {/* Submit Button */}
      <div className=" w-full h-fit flex pb-5  ">
        <Button
          className={`btn-grad text-2xl`}
          type={`submit`}
          text={`Add Address`}
        />
      </div>
    </form>
  );
};

export default AddForm;
