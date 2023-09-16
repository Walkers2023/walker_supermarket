import React from "react";
import dropDownImg from "../../Assets/icons/arrow-down.svg";

const SelectInput = ({
  label,
  className,
  placeholder,
  options,
  handleChange,
  value,
}) => {
  return (
    <div className=" w-full relative">
      <p className="pb-[0.5rem] font-bold text-[0.9rem]">{label}</p>

      <select
        value={value}
        onChange={handleChange}
        className={`${className} cursor-pointer `}
        placeholder={placeholder}
        required
      >
        {options.map((option) => (
          <option
            key={option.value}
            className={` text-textColor text-base font-normal `}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
      <img
        src={dropDownImg}
        alt="drop-down"
        className=" h-[13px] md:h-[14px] bg-contain absolute top-1/2 translate-y-[0.3rem] right-[1.5rem] "
      />
    </div>
  );
};

export default SelectInput;
