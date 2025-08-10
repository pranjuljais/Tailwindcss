import React from "react";

const Container = () => {
  return (
    <>
      <div className="bg-blue-500 flex justify-center w-auto h-12">
        <div className="absolute left-2">ContainerWeb</div>
        <ul className="[&>*]:p-4">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </ul>
      </div>
      <div className="container text-8xl bg-cyan-400 mx-auto">
        Container Class 1
      </div>
      <div className="container text-6xl bg-cyan-500 mx-auto">
        Container Class 2
      </div>
      <div className="container text-5xl bg-cyan-600 mx-auto">
        Container Class 3
      </div>
    </>
  );
};

export default Container;
