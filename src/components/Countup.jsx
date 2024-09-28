import React, { useState } from "react";

export default function Countup() {
  // initialize the count state with an initial  value of 0
  const [count, setCount] = useState(50);

  // function to increament the count
  const increase = () => {
    setCount(count + 10);
  };

  // function to decrement to the count

  const decrement = () => {
    if (count > 0) {
      setCount(count - 10);
    }
  };

  return (
    <div className=" flex  flex-col justify-center items-center gap-4 ">
      <div className=" text-black text-2xl"> counter:{count}</div>
      <div className="  flex justify-center gap-10">
        <div
          onClick={decrement}
          className=" bg-red-600 gap-10 rounded-md px-10 py-2 text-white text-xl"
        >
          Decrement
        </div>
        <div
          onClick={increase}
          className=" bg-primary-300 rounded-md text-white text-xl px-10 py-2 text-center"
        >
          {" "}
          Increment
        </div>
      </div>
    </div>
  );
}
