import { Link, useLocation } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import CreateThread from "../CreateThread/CreateThread";
import { setLogout } from "@/States/reducers/authReducer";
import { useDispatch, useSelector } from "react-redux";

const Navigation = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  return (
    <div className="sticky top-0 left-0 w-full max-w-screen-xl mx-auto py-1 bg-nav-bg backdrop-blur-xl z-[999]">
      <div className="flex items-center justify-between">
        <Link to="/" className="block">
          <img
            src="/assets/images/app_logo.svg"
            alt="Threads"
            className="w-8"
          />
        </Link>
        <ul className="relative flex items-center m-0">
          <li>
            <Link
              to="/"
              className={`block py-5 px-8 rounded-md hover:text-white hover:bg-dark transition-all duration-300 ${
                location.pathname === "/" ? "text-white" : "text-gray-600"
              }`}
            >
              <FeatherIcon icon="home" width={24} height={24} />
            </Link>
          </li>
          <li>
            <Link
              to="/search"
              className={`block py-5 px-8 rounded-md hover:text-white hover:bg-dark transition-all duration-300 ${
                location.pathname === "/search" ? "text-white" : "text-gray-600"
              }`}
            >
              <FeatherIcon icon="search" width={24} height={24} />
            </Link>
          </li>
          <li>
            <button
              className="block py-5 px-8 rounded-md text-gray-600 hover:text-white hover:bg-dark transition-all duration-300"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              <FeatherIcon icon="edit" width={24} height={24} />
            </button>
          </li>
          <li>
            <Link
              to="/activity"
              className={`block py-5 px-8 rounded-md hover:text-white hover:bg-dark transition-all duration-300 ${
                location.pathname === "/activity" ? "text-white" : "text-gray-600"
              }`}
            >
              <FeatherIcon icon="heart" width={24} height={24} />
            </Link>
          </li>
          <li>
            <Link
              to="/friends"
              className={`block py-5 px-8 rounded-md hover:text-white hover:bg-dark transition-all duration-300 ${
                location.pathname === "/friends" ? "text-white" : "text-gray-600"
              }`}
            >
              <FeatherIcon icon="users" width={24} height={24} />
            </Link>
          </li>
        </ul>
        <div className="dropdown dropdown-end">
          <div
            tabIndex="0"
            role="button"
            className="relative w-10 min-w-10 h-10 overflow-hidden flex items-center justify-center border-2 rounded-full border-gray-600 focus:border-white transition-all duration-300 select-none"
          >
            <img
              src={`http://localhost:5000/${user.userImage}`}
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <ul
            tabIndex="0"
            className="dropdown-content z-20 menu p-2 shadow bg-dark rounded-box w-48"
          >
            <li>
              <Link to="/profile">
                <FeatherIcon icon="user" width={16} height={16} /> Profile
              </Link>
            </li>
            <li>
              <button type="button" onClick={() => dispatch(setLogout())}>
                <FeatherIcon icon="log-out" width={16} height={16} /> Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
      <CreateThread />
    </div>
  );
};

export default Navigation;
