import { useState } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import avatar from "../assets/avater.png";

function Navbar(props) {
  const [user, setUser] = useState(props.isLogin);

  if (!props.isLogin) {
    return (
      <div>
        <Navigate to="/signin" />
      </div>
    );
  }
  return (
    <>
      <nav className="navbar bg-[#0A0A23] text-white shadow-md fixed px-8 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl hover:bg-blue-700"
          >
            Home
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {user.role === "admin" ? (
              <>
                <li>
                  <Link className="hover:bg-blue-700" to={"/buatkonten"}>
                    Buat Konten
                  </Link>
                </li>
              </>
            ) : null}
            <li>
              <Link className="hover:bg-blue-700" to={"/member"}>
                Daftar Member
              </Link>
            </li>
            <li>
              <Link className="hover:bg-blue-700" to={"/aturkonten"}>
                Daftar Konten
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end ">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full border-2 border-blue-700">
                <img src={avatar} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 bg-[#0A0A23] text-white hover:bg-700  shadow-lg menu menu-compact dropdown-content rounded-md w-52"
            >
              <li>
                <Link
                  className="justify-between hover:bg-blue-700"
                  to={"/member/edit/" + user.username}
                >
                  Profile
                </Link>
              </li>
              <li>
                <a className="hover:bg-blue-700" onClick={props.logout}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
