import { Logo } from "../assets";
const Navbar = () => {
  return (
    <>
      <div className="container mx-auto flex justify-between items-center h-[60px] px-3">
        <div className="flex items-center ">
          <img
            src={Logo}
            alt="My Company Logo"
            className="h-6 w-auto mr-2 px-2"
          />
          <p className="text-2xl font-bold text-[#3C3AB1]">Network-me</p>
        </div>

        <div className="flex items-center px-4">
          <button className="px-6  bg-[#3C3AB1] ">Sign In </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
