import React from "react";

function Logo({width="10px"}) {
  return (
    <div className="flex gap-4 justify-center">
      <img className={`w-10 rounded-xl`} src="/logo.png"></img>
      <span className="m-auto hidden sm:visible text-2xl text-blue-200   font-bold">
        BlogBook
      </span>
    </div>
  );
}

export default Logo;
