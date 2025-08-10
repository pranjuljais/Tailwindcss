const Navbar = () => {
  return (
    <>
      {/* <ul className="bg-black text-gray-50 flex [&>*]:flex mb-20">
        <li>
          <a className="p-3 hover:bg-zinc-900" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="p-3 hover:bg-zinc-900 " href="#">
            News
          </a>
        </li>
        <li>
          <a className="p-3 hover:bg-zinc-900 " href="#">
            Contact
          </a>
        </li>
        <li>
          <a className="p-3 hover:bg-zinc-900 " href="#">
            About
          </a>
        </li>
      </ul> */}
      <div className="bg-pink-300 size-100 relative">
        <div className="bg-yellow-300 size-20">Sizing Boxes</div>

        <div className="bg-pink-100 size-20 absolute right-0 top-0">
          Sizing Box
        </div>

        <div className="bg-blue-300 size-20 absolute right-0 bottom-0">
          Sizing Box
        </div>

        <div className="bg-yellow-600 size-20 absolute left-0 bottom-0">
          Hello
        </div>
      </div>

      <div className="bg-cyan-300 size-100 ">
        <h1 className="bg-pink-200 fixed z-20">Fixing the position</h1>
      </div>

      <div className="bg-green-500 size-100 relative">
        <div className="bg-amber-400 size-32 absolute inset-10"></div>
      </div>
    </>
  );
};

export default Navbar;
