import React, { useState } from "react";
import { Button, Input, Select } from "../Components/Components";
import { HiPlus } from "react-icons/hi";

const Health = () => {
  // Testing branch
  const [healthData, setHealthData] = useState({});
  const [otherCondition, setOtherCondition] = useState({});

  const conditions = [
    { value: "", label: "Select your Health Condition*" },
    { value: "Anti-Inflammatory", label: "Anti-Inflammatory" },
    { value: "Type 2 Diabetes", label: "Type 2 Diabetes" },
    { value: "Lupus", label: "Lupus" },
    { value: "High Blood Pressure", label: "High Blood Pressure" },
    { value: "Others", label: "Others" },
  ];

  // Functions
  const handleChange = (e, name) => {
    setHealthData({
      ...healthData,
      [name]: e.target.value,
    });
  };

  // const addItem = (list)=>{
  //   setLists(prevState => [
  //     ...prevState, list
  //   ]);
  // }

  // const handleFormSubmit = (e) =>{
  //     e.preventDefault()
  //     addItem({
  //         name: otherCondition,
  //         id: Date.now()
  //     })
  //     setOtherCondition("")
  // }
  // AddMeal Function
  const addBtnFunc = (e, healthData) => {
    e.preventDefault();
    setHealthData(!healthData);
    //  let data = Object.values(mealData)

    console.log(healthData);
    //  localStorage.setItem(mealData.day, JSON.stringify(mealData));
    //  console.log(localStorage.getItem(mealData.day));
    //  let storageProfileString = localStorage.getItem(mealData.day);
    //  console.log("String saved in LocalStorage", storageProfileString);

    //  console.log(data[0], data[1], data[2] )
  };

  return (
    <section className=" overflow-y-auto w-full h-[90vh] bg-white flex flex-col gap-5 items-center p-4 md:p-[5px] md:pr-5 mb-20 ">
      {/* Top container */}
      <form className=" w-full xl:h-100 bg-white shadow-custom items-center flex flex-row flex-wrap xl:gap-10  gap-[30px] xl:justify-center md:justify-center justify-center px-5 md:py-[10px] py-5">
        {/* Selection section */}
        <div className=" z-30 flex md:flex-row justify-center flex-wrap xl:gap-10 gap-[30px] ">
          <Select
            className={`select w-full md:w-360 ${
              !conditions && "text-textColor"
            } `}
            options={conditions}
            placeholder={` Health `}
            id={`Health`}
            value={healthData.condition}
            handleChange={(e) => handleChange(e, "health")}
          />
        </div>
        {/* Input and Button Section */}
        <div className=" flex lg:flex-row justify-center  flex-wrap xl:gap-10 gap-[30px]">
          <Button
            className={` add-btn `}
            type={` submit `}
            text={
              <HiPlus size={30} className=" xl:w-40 w-32 rounded-[10px] " />
            }
            btnClickFunc={(e) => addBtnFunc(e, healthData)}
          />
        </div>
      </form>
      {/* Bottom Section */}
      <div className="w-full shadow-custom h-full bg-white flex flex-col gap-5 p-2.5">
        {healthData.health === "Others" ? (
          <form
            onSubmit={``}
            className=" w-full h-full flex flex-col gap-5 items-center justify-center"
          >
            <h1 className="">
              {" "}
              Please Enter Your Health condition if it's not listed above
            </h1>
            <div className=" w-full h-fit flex flex-row gap-0 items-center justify-center">
              <Input
                id=" Other-health"
                label=" Other Health Condition"
                autoComplete="on"
                type="text"
                inputFunc={(e) => setOtherCondition(e.target.value)}
                value={otherCondition}
                className={` h-50 xs:w-full w-72 xl:w-360`}
              />
              <Button
                text="Submit"
                className={` bg-secondary text-white h-50 w-40 text-center flex items-center justify-center `}
                type="submit"
              />
            </div>
          </form>
        ) : (
          <div className="">{healthData.health}</div>
        )}
      </div>

      {/* Recommended products */}
      <div className=" w-full h-72 shadow-custom bg-white flex flex-col gap-5">
        <div className="w-full px-5 h-10 bg-secondary text-white flex items-center ">
          <h1 className=" w-fit font-semibold text-lg ">
            {" "}
            Recommended Products
          </h1>
        </div>
        <div className="w-full h-full px-5 flex items-center justify-center">
          <h1 className="text-3xl text-secondary">Coming Soon</h1>
        </div>
      </div>
    </section>
  );
};

export default Health;
