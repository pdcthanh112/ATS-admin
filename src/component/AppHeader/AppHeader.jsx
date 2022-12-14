import React from "react";
import "./AppHeader.scss";

import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../apis/authApi";
import logo from "../../assets/image/big-logo.png";
import AppNavigation from "../AppNavigation/AppNavigation";

const AppHeader = () => {
  const currentUser = useSelector((state) => state.auth.login.currentUser);
  console.log("app header", currentUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    logoutUser(dispatch, navigate);
  };

  return (
    <div className="header-container">
      <a href="/#/dashboard">
        <img src={logo} alt="" width={"180rem"} className="ml-10" />
      </a>
      <div className="w-[65%] mt-2">
        <AppNavigation />
      </div>
      <div className="header-menu">
        <div className="dropdown">
          <a
            className=""
            href="/"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div className="inline-flex bg-slate-200 rounded-3xl px-2">
              <div
                className="mx-2 py-2.5 font-medium text-lg"
                style={{ width: "13rem" }}
              >
                {currentUser.employee.name}
              </div>
              <i className="fa-solid fa-chevron-down m-1.5 py-2.5 text-xs"></i>
            </div>
          </a>
          <ul className="dropdown-menu">
            <a
              href="/#/change-password"
              className="dropdown-item header-menu-item"
            >
              <i className="fa-sharp fa-solid fa-shield-halved mr-2 text-[#60d860]"></i>
              Change password
            </a>
            <div className="linee"></div>
            <Link
              to="/#/logout"
              onClick={handleLogout}
              className="dropdown-item header-menu-item"
            >
              <i className="fa-solid fa-arrow-right-from-bracket mr-2 text-[#ff5858] "></i>
              Logout
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
