import React from "react";

function Counter() {
  return (
    <div>
      <div className="counter flex items-center text-2xl justify-between ">
        <h1 className="ml-2 ml-0">Quantity</h1>
        <div className="ml-5 shadow-md flex">
        <div className="bg-green-900 text-white w-8 flex items-center justify-center rounded-r-lg cursor-pointer">
          +
        </div>
        
        <div className="w-8 flex items-center justify-center border-[1px] border-green-900">
          1
        </div>
        <div className="bg-green-900 text-white w-8 flex items-center justify-center rounded-l-lg cursor-pointer">
          -
        </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;