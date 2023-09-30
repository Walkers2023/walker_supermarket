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
    <div className="w-full relative">
      <p className="pb-[0.5rem] font-semibold text-[0.85rem]">{placeholder}</p>

      <select
        value={value}
        onChange={handleChange}
        className={`${className} cursor-pointer text-sm `}
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
        className=" h-[13px] md:h-[14px] bg-contain absolute bottom-[1.4rem] right-[1.5rem] "
      />
    </div>
  );
};

export default SelectInput;
