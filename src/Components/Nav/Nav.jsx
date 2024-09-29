import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-10/12 mx-auto py-4 ">
      <div className="navbar bg-white text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/listedbooks">Listed Books</NavLink>
              </li>
              <li>
                <NavLink to="/pagestoread">Pages to Read</NavLink>
              </li>
            </ul>
          </div>
          <Link to="/">
            <a className="btn btn-ghost text-xl">Ink & Inside</a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-teal-500 underline"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/listedbooks"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-teal-500 underline"
                    : ""
                }
              >
                Listed Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pagestoread"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-teal-500 underline"
                    : ""
                }
              >
                Pages to Read
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className=" text-white border-0 w-24 h-10 rounded-md bg-green-500  me-4">
            Sing in
          </button>
          <button className=" text-white border-0 w-24 h-10 rounded-md bg-cyan-600 me-4">
            Sing up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
