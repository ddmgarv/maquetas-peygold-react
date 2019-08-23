import React from "react";
import { bars, notifAct, argFlag } from "../constants/img_urls";
import "./topbar.css";

// let clickDD1 = false;
// let clickDD2 = false;
// let clickDD3 = false;
// const handleDD1 = clickDD1 => !clickDD1;
// const handleDD1 = clickDD1 => !clickDD1;
// const handleDD1 = clickDD1 => !clickDD1;
// switch (case) {
//   case value:

//     break;

//   default:
//     break;
// }

const Topbar = ({ handleClick, click }) => (
  <nav
    className={click ? "top-navbar-collapse" : "top-navbar-extended"}
    id="top-navbar"
  >
    {/* < !--Begin NavBar --> */}
    {/* <!-- Barra de navegacion superior --> */}
    <ul className="top-nav">
      <div>
        <li className="ml-4">
          <button onClick={handleClick}>
            <img
              src={bars}
              className="topbar-bars"
              id="sidebar-switch"
              alt=""
            />
          </button>
        </li>
        <li className="ml-4">
          <button>
            <img src={notifAct} className="topbar-notis" alt="" />
          </button>
        </li>
      </div>
      <div>
        <li className="country-nav-item">
          Argentina <img src={argFlag} alt="" />
        </li>
        <li className="logout-nav-item">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="no-underline">
            <div>
              <svg
                id="Capa_1"
                className="sidebar-icon"
                data-name="Capa 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 15.49 15.74"
              >
                <title>admin peygold</title>
                <path
                  className="cls-1"
                  style={{ fill: "#009bdb" }}
                  d="M12.25,1.69a7.75,7.75,0,1,1-9,0,.76.76,0,0,1,1.1.24l.49.88a.75.75,0,0,1-.21,1,5.26,5.26,0,1,0,6.25,0,.75.75,0,0,1-.21-1l.5-.88a.75.75,0,0,1,1.09-.24ZM9,8.25V.75A.75.75,0,0,0,8.25,0h-1A.74.74,0,0,0,6.5.75v7.5A.75.75,0,0,0,7.25,9h1A.76.76,0,0,0,9,8.25Z"
                />
              </svg>
              <span>Cerrar sesión</span>
            </div>
          </a>
        </li>
      </div>
    </ul>
    {/* <!-- Final Barra de navegacion superior --> */}
    {/* <!-- Navbar END --> */}
  </nav>
);

export default Topbar;
