import React from "react";
import {
  isologotype,
  isotype,
  user3,
  pWallet,
  pCharge,
  pPay
} from "../constants/img_urls";
import "./topbar.css";

const Sidebar = ({ handleClick, click }) => (
  <div
    className={click ? "sidebar-extended" : "sidebar-collapse"}
    id="sidebar-wrapper"
  >
    {/* <!-- Sidebar --> */}
    <div
      className={click ? "sidebar-extended" : "sidebar-collapse"}
      id="sidebar-container"
    >
      <ul className="list-group">
        {/* <!-- IMPORTANTE: Añadir clase active al anchor tag en el side-bar --> */}

        {/* <!-- Titulo peygold --> */}
        <li>
          <div className="center-sidebar-title">
            <img
              src={click ? isologotype : isotype}
              className={
                click ? "title-extended title" : "title title-collapse"
              }
              onClick={handleClick}
              alt=""
            />
            <span>
              <i className="fas fa-bars" id="quit-sm-btn" />
            </span>
          </div>
        </li>
        {/* <!-- Titulo peygold --> */}

        <div className="border-top-white" />

        {/* <!-- Usuario logeado --> */}
        <li className={click ? "" : "d-none"}>
          <div id="center-sidebar-user">
            <img src={user3} id="user-img-sidebar" alt="" />
            <p id="user-text">
              <span className="sidebar-welcome-text">BIENVENIDO</span>
              <br />
              <span className="sidebar-user-text">Gustavo Rojas</span>
            </p>
          </div>
        </li>
        {/* <!-- Usuario logeado --> */}

        {/* <!-- Subtitulo sidebar --> */}
        <li className="nav-item">
          <a className="nav-link sidebar-link active" href="#">
            <div>
              <svg
                id="Capa_1"
                className="sidebar-icon"
                data-name="Capa 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 27.76 20.82"
              >
                <title>resumen</title>
                <path d="M26.9,17.35H3.47V.87A.87.87,0,0,0,2.6,0H.87A.87.87,0,0,0,0,.87V19.09a1.73,1.73,0,0,0,1.74,1.73H26.9a.87.87,0,0,0,.86-.87V18.22A.87.87,0,0,0,26.9,17.35ZM25.16,1.74h-6.4A1.3,1.3,0,0,0,17.84,4L19.6,5.71l-4,4-4-4a1.76,1.76,0,0,0-2.46,0L5.46,9.44a.87.87,0,0,0,0,1.23l1.23,1.22a.86.86,0,0,0,1.22,0l2.5-2.5,4,4a1.73,1.73,0,0,0,2.45,0l5.21-5.2,1.76,1.75A1.3,1.3,0,0,0,26,9V2.6A.86.86,0,0,0,25.16,1.74Z" />
              </svg>
            </div>
            <span>Resumen</span>
          </a>
        </li>
        {/* <!-- Subtitulo sidebar --> */}

        {/* <!-- Subtitulo sidebar --> */}
        <li className="nav-subtitles" id="wallet-li-sidebar">
          <div className="navsub-content">
            <div>
              <svg
                className="sidebar-icon"
                id="Capa_1"
                data-name="Capa 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 29.73 26.21"
              >
                <title>mi-billetera</title>
                <path d="M26.18,26.21H4.28A4.28,4.28,0,0,1,0,21.93V4.28A4.28,4.28,0,0,1,4.28,0H24.57A3.4,3.4,0,0,1,28,3.4h-1.5a1.9,1.9,0,0,0-1.9-1.9H4.28A2.79,2.79,0,0,0,1.5,4.28V21.93a2.79,2.79,0,0,0,2.78,2.78h21.9a2,2,0,0,0,2.05-1.9V8.69a2,2,0,0,0-2.05-1.9h-21V5.29h21a3.48,3.48,0,0,1,3.55,3.4V22.81A3.48,3.48,0,0,1,26.18,26.21Zm-.72-10.46a1.77,1.77,0,1,0-1.77,1.76A1.76,1.76,0,0,0,25.46,15.75Z" />
              </svg>
              <span>Mi Billetera</span>
            </div>
            <svg
              version="1.1"
              id="wallet-chevron-sidebar"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 238.003 238.003"
              style={{ enableBackground: "new 0 0 238.003 238.003" }}
              xmlSpace="preserve"
              className="sidebar-icon chevron-right"
            >
              <g>
                <g>
                  <path
                    d="M181.776,107.719L78.705,4.648c-6.198-6.198-16.273-6.198-22.47,0s-6.198,16.273,0,22.47
l91.883,91.883l-91.883,91.883c-6.198,6.198-6.198,16.273,0,22.47s16.273,6.198,22.47,0l103.071-103.039
                                            c3.146-3.146,4.672-7.246,4.64-11.283C186.416,114.902,184.89,110.833,181.776,107.719z"
                  />
                </g>
              </g>
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
            </svg>
            <div className="sub-content-collapse" id="sub-content-wallet">
              <div>
                <h4 className="fs-15 ml-3">Mi Billetera</h4>
              </div>
              <div>
                <a className="nav-link" href="#">
                  <img src={pWallet} alt="" />
                  <span className="sidebar-sub-link">Cargar Peygold</span>
                </a>
                <a className="nav-link" href="#">
                  <img src={pWallet} alt="" />
                  <span className="sidebar-sub-link">Multipey</span>
                </a>
                <a className="nav-link" href="#">
                  <img src={pWallet} alt="" />
                  <span className="sidebar-sub-link">Créditos</span>
                </a>
              </div>
            </div>
          </div>
        </li>
        {/* <!-- Subtitulo sidebar --> */}

        {/* <!-- Elementos de la sidebar --> */}
        <div className="hide-panel-sidebar" id="wallet-panel-sidebar">
          <ul className="sidebar-sublist sublist-wallet">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span className="sidebar-sub-link">Cargar Peygold</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span className="sidebar-sub-link">Multipey</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span className="sidebar-sub-link">Créditos</span>
              </a>
            </li>
          </ul>
        </div>
        {/* <!-- Elementos de la sidebar --> */}

        {/* <!-- Subtitulo sidebar --> */}
        <li className="nav-subtitles" id="charge-li-sidebar">
          <div className="navsub-content">
            <div>
              <svg
                id="Capa_1"
                data-name="Capa 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 29.27 17.16"
                className="sidebar-icon"
              >
                <title>cobrar</title>
                <path d="M14.63,3.78c-2.22,0-4,2.16-4,4.8s1.82,4.8,4,4.8,4-2.16,4-4.8S16.86,3.78,14.63,3.78ZM28.25,0H1A1,1,0,0,0,0,1V16.15a1,1,0,0,0,1,1H28.25a1,1,0,0,0,1-1V1A1,1,0,0,0,28.25,0ZM28,12.86h-.5A2.53,2.53,0,0,0,25,15.39v.5H4.3v-.5a2.54,2.54,0,0,0-2.53-2.53h-.5V4.3h.5A2.54,2.54,0,0,0,4.3,1.77v-.5H25v.5A2.53,2.53,0,0,0,27.5,4.3H28Z" />
              </svg>
              <span>Cobrar</span>
            </div>
            <svg
              version="1.1"
              id="charge-chevron-sidebar"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 238.003 238.003"
              style={{ enableBackground: "new 0 0 238.003 238.003" }}
              xmlSpace="preserve"
              className="sidebar-icon chevron-right"
            >
              <g>
                <g>
                  <path
                    d="M181.776,107.719L78.705,4.648c-6.198-6.198-16.273-6.198-22.47,0s-6.198,16.273,0,22.47
                      			l91.883,91.883l-91.883,91.883c-6.198,6.198-6.198,16.273,0,22.47s16.273,6.198,22.47,0l103.071-103.039
                      			c3.146-3.146,4.672-7.246,4.64-11.283C186.416,114.902,184.89,110.833,181.776,107.719z"
                  />
                </g>
              </g>
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
            </svg>
            <div className="sub-content-collapse" id="sub-content-request">
              <div>
                <h4 className="fs-15 ml-3">Cobrar</h4>
              </div>
              <div>
                <a className="nav-link" href="#">
                  <img src={pCharge} alt="" />
                  <span className="sidebar-sub-link">Solicitar Dinero</span>
                </a>
              </div>
            </div>
          </div>
        </li>
        {/* <!-- Subtitulo sidebar --> */}

        {/* <!-- Elementos de la sidebar --> */}
        <div className="hide-panel-sidebar" id="charge-panel-sidebar">
          <ul className="sidebar-sublist sublist-request">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span className="sidebar-sub-link">Solicitar Dinero</span>
              </a>
            </li>
          </ul>
        </div>
        {/* <!-- Elementos de la sidebar --> */}

        {/* <!-- Subtitulo sidebar --> */}
        <li className="nav-subtitles" id="pay-li-sidebar">
          <div className="navsub-content">
            <div>
              <svg
                className="sidebar-icon"
                id="Capa_1"
                data-name="Capa 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 29.52 17.41"
              >
                <title>pagar</title>
                <path d="M21.66.66A2.29,2.29,0,0,0,20.05,0H9.33A2.31,2.31,0,0,0,7.72.66L5.36,3H0V14.37H2.65a1.15,1.15,0,0,0,1.14-1.13v-.37h1l4.1,3.71a3.77,3.77,0,0,0,4.53.14l.24-.16.22.19a2.55,2.55,0,0,0,1.7.66,2.5,2.5,0,0,0,2-1l.17-.21.25.1a2.26,2.26,0,0,0,2.6-.68l1.24-1.53a2.17,2.17,0,0,0,.44-.93l.07-.29h3.41v.37a1.14,1.14,0,0,0,1.14,1.13h2.65V3H24ZM1.89,13.6A1.13,1.13,0,1,1,3,12.47,1.14,1.14,0,0,1,1.89,13.6Zm25.73-2.26a1.13,1.13,0,1,1-1.13,1.13A1.13,1.13,0,0,1,27.62,11.34Zm-7,1.79h0L19.4,14.66a.77.77,0,0,1-1.07.11l-.84-.68-1.18,1.44a1,1,0,0,1-1.37.17l-1.46-1.25-.5.61a2.24,2.24,0,0,1-1.51.82l-.26,0a2.18,2.18,0,0,1-1.37-.48L5.33,11.35H3.79V4.54H6L8.93,1.65l.4-.13H13L10.44,3.85a3,3,0,0,0-1,2.09,3,3,0,0,0,5.06,2.35l.63-.57,5.37,4.36A.75.75,0,0,1,20.63,13.13Zm5.1-1.78H21.9l-.11-.14a1.82,1.82,0,0,0-.31-.31l-5.2-4.22.92-.83a.4.4,0,0,0,.12-.27.38.38,0,0,0-.1-.27l-.51-.55a.39.39,0,0,0-.55,0L13.55,7.12a1.56,1.56,0,0,1-2.16,0A1.49,1.49,0,0,1,11.47,5l3.1-2.84a2.23,2.23,0,0,1,1.53-.6h4a.7.7,0,0,1,.53.23l2.8,2.79h2.34Z" />
              </svg>
              <span>Pagar</span>
            </div>
            <svg
              version="1.1"
              id="pay-chevron-sidebar"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 238.003 238.003"
              style={{ enableBackground: "new 0 0 238.003 238.003" }}
              xmlSpace="preserve"
              className="sidebar-icon chevron-right"
            >
              <g>
                <g>
                  <path
                    d="M181.776,107.719L78.705,4.648c-6.198-6.198-16.273-6.198-22.47,0s-6.198,16.273,0,22.47
                      			l91.883,91.883l-91.883,91.883c-6.198,6.198-6.198,16.273,0,22.47s16.273,6.198,22.47,0l103.071-103.039
                      			c3.146-3.146,4.672-7.246,4.64-11.283C186.416,114.902,184.89,110.833,181.776,107.719z"
                  />
                </g>
              </g>
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
            </svg>
            <div className="sub-content-collapse" id="sub-content-pay">
              <div>
                <h4 className="fs-15 ml-3">Pagar</h4>
              </div>
              <div>
                <a className="nav-link" href="#">
                  <img src={pPay} alt="" />
                  <span className="sidebar-sub-link">Enviar dinero</span>
                </a>
                <a className="nav-link" href="#">
                  <img src={pPay} alt="" />
                  <span className="sidebar-sub-link">Solicitudes</span>
                </a>
              </div>
            </div>
          </div>
        </li>
        {/* <!-- Subtitulo sidebar --> */}

        {/* <!-- Elementos de la sidebar --> */}
        <div className="hide-panel-sidebar" id="pay-panel-sidebar">
          <ul className="sidebar-sublist sublist-pay">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span className="sidebar-sub-link">Enviar dinero</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span className="sidebar-sub-link">Solicitudes</span>
              </a>
            </li>
          </ul>
        </div>
        {/* <!-- Elementos de la sidebar --> */}

        {/* <!-- Div para espaciar los elementos --> */}
        <div className="mt-3" />

        {/* <!-- Subtitulo sidebar --> */}
        <li className="nav-item">
          <a className="nav-link sidebar-link" href="#">
            <div>
              <svg
                className="sidebar-icon"
                id="Capa_1"
                data-name="Capa 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 28.61 28.61"
              >
                <title>ayda</title>
                <path d="M7.9,11.5V18a1.21,1.21,0,0,1-1.21,1.21H5.76a3.08,3.08,0,0,1-3.08-3.08v-2.8a3.08,3.08,0,0,1,3.08-3.08h.93A1.21,1.21,0,0,1,7.9,11.5Zm-7.62,4h.93a.28.28,0,0,0,.28-.27V14.3a12.82,12.82,0,0,1,25.63,0V24A3.13,3.13,0,0,1,24,27.12H17.38v-.66a2.14,2.14,0,0,0-2.14-2.14H13.37a2.15,2.15,0,1,0,0,4.29H24A4.62,4.62,0,0,0,28.61,24V14.3A14.5,14.5,0,0,0,14.3,0,14.5,14.5,0,0,0,0,14.33v.91A.27.27,0,0,0,.28,15.51Zm21.64,3.74h.93a3.08,3.08,0,0,0,3.08-3.08v-2.8a3.08,3.08,0,0,0-3.08-3.08h-.93a1.21,1.21,0,0,0-1.21,1.21V18A1.21,1.21,0,0,0,21.92,19.25Z" />
              </svg>
            </div>
            <span>Ayuda</span>
          </a>
        </li>
        {/* <!-- Subtitulo sidebar --> */}

        {/* <!-- Elementos de la sidebar --> */}
        <li className="nav-item">
          <a className="nav-link sidebar-link" href="#">
            <div>
              <svg
                className="sidebar-icon"
                id="Capa_1"
                data-name="Capa 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 28.66 29.88"
              >
                <title>configuraciones</title>
                <path d="M28,17.84l-2.08-1.2,0-.25a11.81,11.81,0,0,0,0-2.91l0-.25L28,12a1.33,1.33,0,0,0,.6-1.54A15.09,15.09,0,0,0,25.31,4.8a1.33,1.33,0,0,0-1.63-.26L21.6,5.75l-.2-.15a11.5,11.5,0,0,0-2.52-1.46L18.65,4V1.65a1.33,1.33,0,0,0-1-1.29A15.21,15.21,0,0,0,11,.36a1.32,1.32,0,0,0-1,1.29v2.4l-.23.1A11.87,11.87,0,0,0,7.26,5.6l-.2.15L5,4.55a1.29,1.29,0,0,0-1.62.25,14.92,14.92,0,0,0-3.3,5.7A1.31,1.31,0,0,0,.66,12l2.08,1.2,0,.24a11.89,11.89,0,0,0,0,2.92l0,.24L.67,17.84a1.33,1.33,0,0,0-.61,1.55l.12.35h0v0L.25,20h0a17.76,17.76,0,0,0,3.1,5.14A1.31,1.31,0,0,0,5,25.33l2.08-1.2.2.15a11.74,11.74,0,0,0,2.52,1.46l.23.09v2.41a1.33,1.33,0,0,0,1,1.28,15.21,15.21,0,0,0,6.58,0,1.32,1.32,0,0,0,1-1.28V25.83l.23-.1a11.36,11.36,0,0,0,2.53-1.45l.19-.15,2.09,1.2a1.29,1.29,0,0,0,1.62-.25,15,15,0,0,0,3.31-5.73A1.35,1.35,0,0,0,28,17.84Zm-.66,1.41a13.79,13.79,0,0,1-2.78,4.8l-.2.23-2.89-1.67-.34.28a10.47,10.47,0,0,1-3.31,1.92L17.4,25v3.33l-.3.06a13.6,13.6,0,0,1-5.54,0l-.32,0-.11-.11.13-.14V25l-.41-.14A10.34,10.34,0,0,1,7.54,22.9l-.34-.29L4.31,24.28l-.2-.23A20.61,20.61,0,0,1,1.25,19l2.88-1.66-.08-.44a10.22,10.22,0,0,1,0-3.82l.08-.44L1.37,11l.11-.79A13.9,13.9,0,0,1,4.11,5.83l.2-.22h0l.08-.05.06.13L7.19,7.27,7.53,7a10.66,10.66,0,0,1,3.31-1.92l.42-.14V1.59l.3-.06a14,14,0,0,1,5.54,0l.3.06V4.92l.42.15A10.11,10.11,0,0,1,21.12,7l.34.29L24.35,5.6l.21.23a13.92,13.92,0,0,1,2.77,4.8l.1.29-2.9,1.67.08.43a10.28,10.28,0,0,1,0,3.83l-.08.43L27.43,19Zm-13,.93a5.25,5.25,0,1,0-5.25-5.24A5.25,5.25,0,0,0,14.33,20.18Zm0-9.24a4,4,0,1,1-4,4A4,4,0,0,1,14.33,10.94Z" />
              </svg>
            </div>
            <span>Configuración</span>
          </a>
        </li>
        {/* <!-- Elementos de la sidebar --> */}
      </ul>
    </div>
    {/* <!-- Sidebar end --> */}
  </div>
);

export default Sidebar;
