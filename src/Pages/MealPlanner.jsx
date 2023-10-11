import React from "react";
import { Button, DailyMeal, Input, Select, TextBox } from "../Components/Components";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight, HiPlus } from "react-icons/hi";
import { ShoppingList } from "../Features/Features";

const MealPlanner = () => {
  const [mealData, setMealData] = useState({ 
    day:"",
    meal:"", 
    food:""
  });

  const [otherData, setOtherData] = useState({});

  const [noteData, setNoteData] = useState("");

  const days = [
    { value: "", label: "Day*" },
    { value: "Monday", label: "Monday" },
    { value: "Tuesday", label: "Tuesday" },
    { value: "Wednesday", label: "Wednesday" },
    { value: "Thursday", label: "Thursday" },
    { value: "Friday", label: "Friday" },
    { value: "Saturday", label: "Saturday" },
    { value: "Sunday", label: "Sunday" },
  ];
  const meals = [
    { value: "", label: "Meal Time*" },
    { value: "Breakfast", label: "Breakfast" },
    { value: " Noon-Snack (optional)", label: "Snack (optional)" },
    { value: "Lunch", label: "Lunch" },
    { value: " Evening-Snack (optional)", label: "Snack (optional)" },
    { value: "Dinner", label: "Dinner" },
  ];

  // Functions
  const handleChange = (event, name) => {
    setMealData({
      ...mealData,
      [name]: event.target.value,
    })
  }

  const changeFunc = (e) => {
    // setOtherData({
    //   ...otherData,
    //   [name]: e.target.value
    // })
    setNoteData();
    console.log(setNoteData);
  };
  // AddMeal Function
  const addBtnFunc = (e, mealData) => {
    e.preventDefault();
    //setMealData(!mealData);
    //let data = Object.values(mealData)

    console.log(mealData);
    //  localStorage.setItem(mealData.day, JSON.stringify(mealData));
    //  console.log(localStorage.getItem(mealData.day));
    //  let storageProfileString = localStorage.getItem(mealData.day);
    //  console.log("String saved in LocalStorage", storageProfileString);

    //  console.log(data[0], data[1], data[2] )
  };

  return (
    <section className=" overflow-y-auto w-full h-[90vh] bg-white flex flex-col gap-5 items-center p-4 md:p-[5px] md:pr-5 mb-20 ">
      {/* Top container */}

      <form className=" w-full xl:h-100 bg-white shadow-custom items-center flex flex-row flex-wrap xl:gap-10 gap-5 justify-center px-5 md:py-[10px] py-5">
        {/* Selection section */}
        <div className=" z-30 flex flex-col md:flex-row justify-center xl:gap-8 gap-5 ">
          <Select
            className={`select h-fit w-40 ${!days && "text-textColor"} `}
            options={days}
            placeholder={` Day `}
            id={`Day`}
            value={mealData.day}
            handleChange={(event) => handleChange(event, "day")}
          />

          <Select
            className={` select w-40 ${!meals && "text-textColor"} `}
            options={meals}
            placeholder={` Meal Time`}
            id={`Meal`}
            value={mealData.meal}
            handleChange={(event) => handleChange(event, "meal")}
          />
        </div>
        {/* Input and Button Section */}
        <div className=" flex md:flex-row justify-center items-center flex-col xl:gap-8 gap-5">
          <Input
            id={`food`}
            label={`food*`}
            autoComplete="off"
            type={"text"}
            handleChange={(e) => handleChange(e, "food")}
            className={`xs:w-full w-72 xl:w-360`}
            value={mealData.name}
          />

          <Button
            className={` add-btn `}
            type={` submit `}
            text={
              <HiPlus size={30} className=" xl:w-40 w-32 rounded-[10px] " />
            }
            btnClickFunc={(e) => addBtnFunc(e, mealData)}
          />
        </div>
      </form>

      {/* Bottom Container */}
      <div className=" w-full h-full flex flex-col gap-5 ">
        {/* Meals ans shopping list section */}
        <div className=" w-full items-center justify-center flex flex-col gap-5 lg:flex-row ">
          {/* Meal */}
          <div className="bg-white px3 shadow-custom w-full lg:flex-1 h-[380px]">
            <div className=" w-full h-full overflow-x-auto relative overflow-y-hidden flex flex-row items-center justify-center ">
              <HiChevronLeft
                size={60}
                className=" cursor-pointer text-secondary opacity-70 hover:opacity-100 left-0 absolute top-[45%] ease-in-out transition-all z-20 duration-300 "
              />
              <DailyMeal />
              <HiChevronRight
                size={60}
                className=" cursor-pointer text-secondary z-20 opacity-70 hover:opacity-100 right-0 absolute top-[45%] ease-in-out transition-all duration-300 "
              />
            </div>
          </div>
          {/* Shopping List */}
          <div className="bg-white shadow-custom w-full lg:w-[340px] relative h-[380px]">
            <ShoppingList />
          </div>
        </div>
        {/* Note section */}
        <div className=" w-full h-360 shadow-custom bg-white ">
          <TextBox /> 
        </div>
        {/* Buttons */}
        <div className=" w-[500px] h-fit px-2.5 flex flex-row items-center self-center justify-between ">
          <Button
            type={`reset`}
            className={`add-btn w-40 text-center text-xl font-normal text-white rounded-xl `}
            btnClickFunc={``}
            text="Reset"
          />
          <Button
            type={`submit`}
            className={`add-btn w-40 text-center text-xl font-normal text-white rounded-xl `}
            btnClickFunc={``}
            text="Submit"
          />
        </div>
      </div>
    </section>
  );
};

export default MealPlanner;
