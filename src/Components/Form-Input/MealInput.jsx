import React from "react";

const MealInput = ({
  placeholder,
  id,
  label,
  autoComplete,
  type,
  handleChange,
  className,
  inputFunc,
  value,
}) => {
  return (
    <div className="relative w-full">
      <p className="pb-[0.5rem] font-semibold text-[0.85rem]">{label}</p>
      <input
        type={type}
        id={id}
        className={`input peer ${className}`}
        onInput={inputFunc}
        autoComplete={autoComplete}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
      />
      {/* <label htmlFor={id} className="label">
        {label}
      </label> */}
    </div>
  );
};

export default MealInput;
