import React from "react";

function Transition() {
  return (
    <>
      <button className="bg-blue-300 p-2 m-10 text-white rounded hover:bg-blue-700">
        Login
      </button>
      <button
        className="bg-blue-300
       p-2 
       m-10
        text-white rounded
        hover:bg-blue-700
        transition duration-1000
        "
      >
        SignUp
      </button>
      <button
        className="bg-blue-300
       p-2 
       m-10
        text-white rounded
        hover:bg-blue-700
        transition duration-1000
       hover:opacity-5
       
        "
      >
        SignUp-2
      </button>
      <button
        className="bg-blue-500
       p-2 
       m-10
        text-white rounded
      hover:scale-45
      transition-transform
      duration-900

        "
      >
        SignUp-3
      </button>
    </>
  );
}

export default Transition;
