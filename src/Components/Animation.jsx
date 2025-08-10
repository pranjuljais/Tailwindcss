import img from "../images/rotate.jpg";
import img2 from "../images/pulse.png";
function Animation() {
  return (
    <>
      <div className="size-20 bg-red-500 mt-10 ml-10 rounded-full hover:animate-bounce"></div>
      <hr />
      <div className="w-32 h-2  bg-red-500 mt-32 ml-32 hover:animate-spin"></div>
      <hr />

      <img className="w-45 m-32 animate-spin " src={img} alt="" />

      {/* <div className="size-10 bg-red-500 mt-10 ml-10 rounded-full mb-25 animate-ping"></div> */}

      {/* <div className="size-10 bg-red-500 m-52 rounded-full  animate-pulse"></div> */}

      <img
        className="size-50 bg-red-500 m-52 rounded-full  animate-pulse"
        src={img2}
        alt=""
      />
    </>
  );
}

export default Animation;
