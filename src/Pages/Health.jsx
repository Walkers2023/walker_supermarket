import { useState } from "react";
import { Button, Input, Select } from "../Components/Components";
import DOMPurify from "dompurify";
import { anaemia } from "../articles/anaemia";
import { antiInflammatory } from "../articles/antiInflammatory";
import { diabetes } from "../articles/type-2-diabetes";
import { lupus } from "../articles/lupus";
import { highBp } from "../articles/high-blood-pressure";

const Health = () => {
  const [healthData, setHealthData] = useState({});
  const [htmlContent, setHtmlContent] = useState("");
  const [otherCondition, setOtherCondition] = useState({});

  const conditions = [
    { value: "", label: "Select Health Condition*" },
    { value: "Anaemia", label: "Anaemia", content: anaemia },
    {
      value: "Anti-Inflammatory",
      label: "Anti-Inflammatory",
      content: antiInflammatory,
    },
    { value: "Type 2 Diabetes", label: "Type 2 Diabetes", content: diabetes },
    { value: "Lupus", label: "Lupus", content: lupus },
    {
      value: "High Blood Pressure",
      label: "High Blood Pressure",
      content: highBp,
    },
    { value: "Others", label: "Others" },
  ];
  const sanitizedHTML = DOMPurify.sanitize(htmlContent);
  console.log(healthData);

  // FUNCTIONS
  const handleChange = (e, name) => {
    const selectedCondition = conditions.find(
      (condition) => condition.value === name
    );

    if (selectedCondition) {
      setHtmlContent(DOMPurify.sanitize(selectedCondition.content));
      setHealthData({
        ...healthData,
        condition: name, // Update the 'condition' property
        content: selectedCondition.content,
      });
    } else {
      setHtmlContent(""); // Clear the HTML content if no valid condition is selected
      setHealthData({
        ...healthData,
        condition: name, // Update the 'condition' property
        content: "",
      });
    }
  };

  return (
    <section className="overflow-y-auto w-full bg-white flex flex-col gap-[1.5rem] items-center p-4 md:p-[5px] md:pr-5 mb-20 ">
      {/* Top container */}
      <form className="w-full pt-[1rem] pb-[1.5rem] bg-white md:border-[1px] border-[#cfcfcf] md:shadow-header-shadow items-center flex flex-row gap-[1rem] flexwrap justify-center rounded-md">
        {/* Selection section */}
        <div className=" z-30 flex md:flex-row justify-center flex-wrap ">
          <Select
            className={`select w-[240px] md:w-300 lg:w-360`}
            options={conditions}
            id={`Health`}
            value={healthData.condition}
            handleChange={(e) => handleChange(e, e.target.value)}
          />
        </div>
        {/* Input and Button Section */}
        <div className=" flex lg:flex-row justify-center  flex-wrap xl:gap-10 gap-[30px]">
          <Button className={`btn-grad h-full`} type={`submit`} text="SAVE" />
        </div>
      </form>
      {/* Bottom Section */}
      <div className="w-full shadow-header-shadow border-[1px] border-[#cfcfcf] h-full bg-white flex flex-col gap-5 p-2.5 min-h-[45vh] md:min-h-[50vh] mb-[1rem] rounded-md">
        {healthData.condition === "Others" ? (
          <form
            onSubmit={``}
            className=" w-full h-full flex flex-col gap-5 items-center justify-center"
          >
            <h1 className="">
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
            style={
              {
                // overflowX: "auto", // Enable horizontal scrolling if needed
                // whiteSpace: "normal", // Allow text to wrap to the next line
              }
            }
            className="text-[2rem] px-[1rem] pt-[2.5rem] pb-[1rem] flex flex-col gap-6 bg-white"
            dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
          ></div>
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
