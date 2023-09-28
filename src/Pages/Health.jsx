import React, { useState } from "react";
import { Button, Input, Select } from "../Components/Components";
import DOMPurify from "dompurify";
import { anaemiaHtml } from "../articles/anaemiaHtml";

const Health = () => {
  const [healthData, setHealthData] = useState({});
  const [otherCondition, setOtherCondition] = useState({});

  const conditions = [
    { value: "", label: "Select Health Condition*" },
    { value: "Anaemia", label: "Anaemia" },
    { value: "Anti-Inflammatory", label: "Anti-Inflammatory" },
    { value: "Type 2 Diabetes", label: "Type 2 Diabetes" },
    { value: "Lupus", label: "Lupus" },
    { value: "High Blood Pressure", label: "High Blood Pressure" },
    { value: "Others", label: "Others" },
  ];
  const sanitizedHTML = DOMPurify.sanitize(anaemiaHtml);

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
    <section className="overflow-y-auto w-full bg-white flex flex-col gap-[1.5rem] items-center p-4 md:p-[5px] md:pr-5 mb-20 ">
      {/* Top container */}
      <form className="w-full pt-[1rem] pb-[1.5rem] bg-white md:border-[1px] border-[#cfcfcf] md:shadow-header-shadow items-center flex flex-row gap-[1rem] flexwrap justify-center rounded-md">
        {/* Selection section */}
        <div className=" z-30 flex md:flex-row justify-center flex-wrap ">
          <Select
            className={`select w-[240px] md:w-300 lg:w-360 ${
              !conditions && "text-textColor"
            } `}
            options={conditions}
            id={`Health`}
            value={healthData.condition}
            handleChange={(e) => handleChange(e, "health")}
          />
        </div>
        {/* Input and Button Section */}
        <div className=" flex lg:flex-row justify-center  flex-wrap xl:gap-10 gap-[30px]">
          <Button
            className={`btn-grad h-full`}
            type={`submit`}
            text="SAVE"
            btnClickFunc={(e) => addBtnFunc(e, healthData)}
          />
        </div>
      </form>
      {/* Bottom Section */}
      <div className="w-full shadow-header-shadow border-[1px] border-[#cfcfcf] h-full bg-white flex flex-col gap-5 p-2.5 min-h-[45vh] md:min-h-[50vh] mb-[1rem] rounded-md">
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
          <div
            className="text-[2rem] px-[1rem]"
            dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
          >
            {/* {healthData.health} */}
          </div>
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
