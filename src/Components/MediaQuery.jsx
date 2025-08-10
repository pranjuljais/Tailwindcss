import React from "react";

const Mediaquery = () => {
  return (
    <>
      {/* media query
      <div className="h-screen">
        <div className="bg-amber-600 h-full md:bg-pink-300 "></div>
      </div> */}

      {/* column */}

      <div className="columns-2">
        <h1 className="bg-amber-300">Heading-1</h1>
        <h1 className="bg-blue-300">Heading-2</h1>
        <h1 className="bg-green-300">Heading-3</h1>
        <h1 className="bg-pink-300">Heading-4</h1>
        <h1 className="bg-red-300">Heading-5</h1>
      </div>
    </>
  );
};

export default Mediaquery;
