import React from "react";

function Notify(props) {
  let notifyStyle =
    "bg-green-500 rounded-lg text-black px-2 my-5 opacity-0 h-10 w-44 fixed ";
  props.notify
    ? (notifyStyle =
        "bg-green-500 rounded-lg text-black px-2 my-5 opacity-100 w-44 h-10  flex pt-2 justify-center fixed top-10 font-black text-white")
    : (notifyStyle =
        "bg-green-500 rounded-lg text-black px-2 my-5 opacity-0 w-44 h-10  flex  justify-center fixed top-10 ");

  return (
    <div className="w-full flex justify-end ">
      <div className={notifyStyle}>Added to cart</div>
    </div>
  );
}

export default Notify;
