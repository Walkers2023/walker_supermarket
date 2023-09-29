import React, { useState } from "react";
import { HiOutlineMinus, HiOutlinePencil } from "react-icons/hi";

const ListItem = ({ list }) => {
  const [checked, setChecked] = useState(list.checked);

  const checkedFunc = (e) => {
    setChecked(!checked);
  };

  return (
    <li
      className={` w-full  h-10 bg-secondary bg-opacity-30 text-secondary font-normal text-lg border-b-2 shadow-custom border-secondary justify-between gap-5 flex items-center px-2.5`}
    >
      <div className=" w-full flex items-center gap-2.5 flex-row flex-nowrap">
        <input
          type="checkbox"
          checked={checked}
          name={list.name}
          onChange={checkedFunc}
          className={` peer bg-white w-6 h-6 checked:bg-secondary`}
          id={list.id}
        />
        <label
          htmlFor={list.id}
          className={` w-full text-2xl font-normal text-secondary`}
        >
          {list.name}
        </label>
      </div>
      <div className=" flex gap-2.5 flex-row flex-nowrap">
        <button className="">
          <HiOutlinePencil />
        </button>
        <button className="">
          <HiOutlineMinus />
        </button>
      </div>
    </li>
  );
};

export default ListItem;
