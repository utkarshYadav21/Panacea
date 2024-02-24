import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(true);
  const jwt = localStorage.getItem("jwt");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear("jwt");
    navigate("/")
  };

  return (
    <header className="bg-white">
      <nav className="flex justify-between items-center w-[94%] h-20 p-1 mx-auto">
        <div className="w-16">
          {/* Here insert your logo Image */}
          <img
            src="https://store-images.s-microsoft.com/image/apps.26273.14125414353576360.25e774bc-c46c-479a-8230-201323b3a41e.68d1b6c6-f31b-4952-9a8e-fc3deb2d1db9"
            className="w-16"
          />
        </div>
        {toggle && (
          <div className="navigator md:static absolute bg-white md:min-h-fit min-h-[30vh] left-0 top-[10%] md:w-auto w-full flex items-center px-5">
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 p-[3%]">
              <li>
                <Link className="hover:text-gray-500" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-500" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-500" to="/orders">
                  Orders
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-500" to="/contactus">
                  ContactUs
                </Link>
              </li>
            </ul>
          </div>
        )}
        <div className="flex items-center gap-2">
          {jwt ? (
            <button
              className="bg-[#8cb4f9] text-white px-5 py-2 mx-2 rounded-full hover:bg-[#699aef]"
              onClick={logout}
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login">
                <button className="bg-[#8cb4f9] text-white px-5 py-2 mx-2 rounded-full hover:bg-[#699aef]">
                  Login
                </button>
              </Link>
              <Link to="/signin">
                <button className="bg-[#8cb4f9] text-white px-5 py-2 mx-2 rounded-full hover:bg-[#699aef]">
                  SignUp
                </button>
              </Link>
            </>
          )}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdiWUPz5_LufaBXGgEooZfwWDOmfFLmpf2Kh5C_I3CICyUd3N5TwUH8M_DdQ&s"
            className="bar size-6"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
