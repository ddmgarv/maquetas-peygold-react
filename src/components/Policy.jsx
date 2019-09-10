import React, { Fragment } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faEye,
  faPrint,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faComments,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { isologotype, user1, points } from "./../constants/img_urls";
import "./css/policy.css";
import "./css/wallet-type2.css";
import "./css/table.css";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./css/pagination.css";
import "./css/blue-box.css";

const Policy = ({ ddState, handleDD }) => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-12  policy-head-container">
          <div className="policy-title">
            <img src={isologotype} alt="" />
            <div>
              Bienvenido al sistema de <br /> evaluacion de poliza de PEYGOLD.
            </div>
          </div>
          <div className="descriptive-text">
            A continuación verifique e indique la acción correspondiente a la
            solicitud.
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 policy-body-container">
          <h5 className="subtitle-blue fs-19">Evaluación de la poliza</h5>
          <div className="separator-container">
            <div className="w-100">
              <h5 className="subtitle-blue fw-500">
                Información del solicitante
              </h5>

              <div className="box-option">
                <div className="img-cont">
                  <img src={user1} alt="" />
                </div>
                <div className="text-cont">
                  <h1>Confort Sur S.A.</h1>
                  <p>
                    <span>Argeven@gmail.com</span>
                    <br />
                    <span>+00-000000000 </span> <br />
                    <span>Calle-14</span> - <span>Gran Buenos Aires</span>.
                    <span>Personas beneficiadas: </span>
                    <span>50</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-100">
              <h5 className="subtitle-blue fw-500">
                Información de la solicitud
              </h5>
              <div className="box-option">
                <div className="text-cont">
                  <p>
                    <span>Forma de pago: </span>{" "}
                    <span className="fw-600">Cheque</span> <br />
                    <span>Personas beneficiadas: </span>{" "}
                    <span className="fw-600">50</span> <br />
                    <span>Plan de vencimiento: </span>{" "}
                    <span className="fw-600">Opción 2</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="wallet-type2-container separator-container">
            <div class="wallet-item-type2">
              <div>
                <span class="wallet-title">Cantidad a solicitar</span>
                <div class="d-flex align-items-center">
                  <span class="wallet-symbol">P$G</span>{" "}
                  <span class="wallet-amount">4.500,65</span>
                </div>
              </div>
            </div>
            <div class="wallet-item-type2">
              <div>
                <span class="wallet-title">Rescate por vencimiento</span>
                <div class="d-flex align-items-center">
                  <span class="wallet-symbol">P$G</span>
                  <input
                    type="number"
                    class="input-custom-number"
                    step="0.01"
                    placeholder="0.00"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className={
            ddState
              ? "col-lg-10 bluebox-fix blue-box-wrapper bluebox-dd-extended"
              : "col-lg-10 bluebox-fix blue-box-wrapper bluebox-dd-collapsed"
          }
        >
          <div className="flexbox-sb">
            <div>
              <h4>Listado de cheques</h4>
              <button className="btn-dd" onClick={handleDD}>
                Ver listado de cheques <FontAwesomeIcon icon={faChevronDown} />
              </button>
            </div>
            <div>
              <button className="btn-custom-status">
                <FontAwesomeIcon icon={faPrint}></FontAwesomeIcon> Descargar
                todos los cheques
              </button>
            </div>
          </div>
          <div class="table-cont mt-3">
            <Table className="table table-borderless table-hover table-recent-transfers">
              <Thead>
                <Tr>
                  <Th className="table-id-cell">
                    <span>ID</span>
                  </Th>
                  <Th>
                    <span>N° de Cheque</span>
                  </Th>
                  <Th className="table-date-cell">
                    <span>F. Emisión</span>
                  </Th>
                  <Th className="table-date-cell">
                    <span>F. Vencimiento</span>
                  </Th>
                  <Th>
                    <span>Banco</span>
                  </Th>
                  <Th className="table-amount-cell">
                    <span>Monto</span>
                  </Th>
                  <Th className="table-status-cell"></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td className="table-id-cell">1</Td>
                  <Td>
                    <span className="ml-2">1234567876</span>
                  </Td>
                  <Td className="table-date-cell">
                    10/07/2019
                    <br />
                    <span className="hour">19:54:21</span>
                  </Td>
                  <Td className="table-date-cell">
                    10/07/2019
                    <br />
                    <span className="hour">19:54:21</span>
                  </Td>
                  <Td>ejemplo</Td>
                  <Td className="table-amount-cell">15000$</Td>
                  <Td className="table-status-cell">
                    <div className="padLock-icon-container invisible">
                      <FontAwesomeIcon icon={faLock} />
                    </div>
                    <div className="points-container">
                      <img src={points} alt="" className="rotate-90" />
                      <div className="user-float-options-box">
                        <button>
                          <FontAwesomeIcon icon={faEye} />
                          <span className="ml-3">Ver cheque adjunto</span>
                        </button>
                        <button className="border-fix">
                          <FontAwesomeIcon icon={faPrint} />
                          <span className="ml-3">Imprimir cheque</span>
                        </button>
                      </div>
                    </div>
                  </Td>
                </Tr>
                <Tr>
                  <Td className="table-id-cell">2</Td>

                  <Td>
                    <span className="ml-2">1234567876</span>
                  </Td>
                  <Td className="table-date-cell">
                    10/07/2019
                    <br />
                    <span className="hour">19:54:21</span>
                  </Td>
                  <Td className="table-date-cell">
                    10/07/2019
                    <br />
                    <span className="hour">19:54:21</span>
                  </Td>
                  <Td>ejemplo</Td>
                  <Td className="table-amount-cell">15000$</Td>
                  <Td className="table-status-cell">
                    <div className="padLock-icon-container invisible">
                      <FontAwesomeIcon icon={faLock} />
                    </div>
                    <div className="points-container">
                      <img src={points} alt="" className="rotate-90" />
                      <div className="user-float-options-box">
                        <button>
                          <FontAwesomeIcon icon={faEye} />
                          <span className="ml-3">Ver cheque adjunto</span>
                        </button>
                        <button className="border-fix">
                          <FontAwesomeIcon icon={faPrint} />
                          <span className="ml-3">Imprimir cheque</span>
                        </button>
                      </div>
                    </div>
                  </Td>
                </Tr>
                <Tr>
                  <Td className="table-id-cell">1</Td>
                  <Td>
                    <span className="ml-2">1234567876</span>
                  </Td>
                  <Td className="table-date-cell">
                    10/07/2019
                    <br />
                    <span className="hour">19:54:21</span>
                  </Td>
                  <Td className="table-date-cell">
                    10/07/2019
                    <br />
                    <span className="hour">19:54:21</span>
                  </Td>
                  <Td>ejemplo</Td>
                  <Td className="table-amount-cell">15000$</Td>
                  <Td className="table-status-cell">
                    <div className="padLock-icon-container invisible">
                      <FontAwesomeIcon icon={faLock} />
                    </div>
                    <div className="points-container">
                      <img src={points} alt="" className="rotate-90" />
                      <div className="user-float-options-box">
                        <button>
                          <FontAwesomeIcon icon={faEye} />
                          <span className="ml-3">Ver cheque adjunto</span>
                        </button>
                        <button className="border-fix">
                          <FontAwesomeIcon icon={faPrint} />
                          <span className="ml-3">Imprimir cheque</span>
                        </button>
                      </div>
                    </div>
                  </Td>
                </Tr>
                <Tr>
                  <Td className="table-id-cell">1</Td>
                  <Td>
                    <span className="ml-2">1234567876</span>
                  </Td>
                  <Td className="table-date-cell">
                    10/07/2019
                    <br />
                    <span className="hour">19:54:21</span>
                  </Td>
                  <Td className="table-date-cell">
                    10/07/2019
                    <br />
                    <span className="hour">19:54:21</span>
                  </Td>
                  <Td>ejemplo</Td>
                  <Td className="table-amount-cell">15000$</Td>
                  <Td className="table-status-cell">
                    <div className="padLock-icon-container invisible">
                      <FontAwesomeIcon icon={faLock} />
                    </div>
                    <div className="points-container">
                      <img src={points} alt="" className="rotate-90" />
                      <div className="user-float-options-box">
                        <button>
                          <FontAwesomeIcon icon={faEye} />
                          <span className="ml-3">Ver cheque adjunto</span>
                        </button>
                        <button className="border-fix">
                          <FontAwesomeIcon icon={faPrint} />
                          <span className="ml-3">Imprimir cheque</span>
                        </button>
                      </div>
                    </div>
                  </Td>
                </Tr>
                <Tr>
                  <Td className="table-id-cell">1</Td>
                  <Td>
                    <span className="ml-2">1234567876</span>
                  </Td>
                  <Td className="table-date-cell">
                    10/07/2019
                    <br />
                    <span className="hour">19:54:21</span>
                  </Td>
                  <Td className="table-date-cell">
                    10/07/2019
                    <br />
                    <span className="hour">19:54:21</span>
                  </Td>
                  <Td>ejemplo</Td>
                  <Td className="table-amount-cell">15000$</Td>
                  <Td className="table-status-cell">
                    <div className="padLock-icon-container invisible">
                      <FontAwesomeIcon icon={faLock} />
                    </div>
                    <div className="points-container">
                      <img src={points} alt="" className="rotate-90" />
                      <div className="user-float-options-box">
                        <button>
                          <FontAwesomeIcon icon={faEye} />
                          <span className="ml-3">Ver cheque adjunto</span>
                        </button>
                        <button className="border-fix">
                          <FontAwesomeIcon icon={faPrint} />
                          <span className="ml-3">Imprimir cheque</span>
                        </button>
                      </div>
                    </div>
                  </Td>
                </Tr>

                {/* <Tr className="trCustom">
                  <Td colSpan="5" valign="middle">
                    No se encontraron resultados
                  </Td>
                </Tr> */}
              </Tbody>
            </Table>
          </div>
          <ul class="pagination mt-4">
            <li class="">
              <a class="d-flex" href="#">
                <FontAwesomeIcon icon={faChevronLeft} /> <span>Anterior</span>
              </a>
            </li>
            <li class="active">
              <a class="" href="#">
                1
              </a>
            </li>
            <li class="">
              <a class="" href="#">
                2
              </a>
            </li>
            <li class="">
              <a class="" href="#">
                3
              </a>
            </li>
            <li class="">
              <a class="" href="#">
                4
              </a>
            </li>
            <li class="">
              <a class="" href="#">
                5
              </a>
            </li>
            <li class="">
              <a class="" href="#">
                <span>Siguiente</span>
                <FontAwesomeIcon icon={faChevronRight} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <br />
      <br />

      <div className="row">
        <div className="col-12 text-center bg-gradient-blue p-4">
          <span className="fw-500 fs-15 text-opaque">
            Para finalizar seleccione la acción correspondiente a la solicitud
          </span>
        </div>
      </div>

      <div className="row">
        <div className="col-12 text-center bg-gradient-blue-2 p-5">
          <button className="btn-approve btn-approve-active">
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="23.232px"
              height="23.232px"
              viewBox="0 0 23.232 23.232"
              enableBackground="new 0 0 23.232 23.232"
              xmlSpace="preserve"
            >
              <path
                fill="#3CC85E"
                d="M23.232,11.616c0,6.415-5.201,11.616-11.616,11.616S0,18.032,0,11.616S5.201,0,11.616,0
	S23.232,5.201,23.232,11.616z M10.273,17.767l8.618-8.618c0.293-0.293,0.293-0.767,0-1.06l-1.06-1.06
	c-0.293-0.293-0.767-0.293-1.06,0l-7.029,7.029l-3.282-3.282c-0.293-0.293-0.767-0.293-1.06,0l-1.06,1.06
	c-0.293,0.293-0.293,0.767,0,1.06l4.871,4.871C9.505,18.06,9.98,18.06,10.273,17.767L10.273,17.767z"
              />
            </svg>
            <span>Aprobar</span>
          </button>
          <button className="btn-reject ml-md-4">
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="26.012px"
              height="26.012px"
              viewBox="0 0 26.012 26.012"
              enableBackground="new 0 0 26.012 26.012"
              xmlSpace="preserve"
            >
              <path
                fill="#FF4A94"
                d="M14.697,0.107C6.189-0.965-0.965,6.189,0.107,14.697c0.731,5.797,5.412,10.478,11.209,11.208
	c8.508,1.072,15.662-6.083,14.59-14.59C25.175,5.518,20.494,0.837,14.697,0.107z M19.034,17.882
	c-0.173,0.494-0.654,0.871-1.254,0.984c-0.657,0.124-1.303-0.105-1.734-0.609l-3.074-3.36l-3.035,3.443
	c-0.314,0.383-0.78,0.597-1.286,0.597c-0.117,0-0.236-0.011-0.357-0.035c-0.633-0.124-1.168-0.56-1.331-1.085
	c-0.139-0.448-0.011-0.903,0.361-1.28l3.441-3.72C9.683,11.66,8.66,10.567,7.624,9.539c-0.558-0.566-0.495-1.107-0.408-1.38
	c0.169-0.53,0.692-0.945,1.333-1.058c0.624-0.11,1.21,0.105,1.572,0.574l2.88,3.043l2.91-3.106c0.397-0.442,0.968-0.621,1.56-0.481
	c0.592,0.139,1.088,0.585,1.233,1.108c0.127,0.458-0.019,0.933-0.399,1.303c-1.177,1.187-2.197,2.26-3.105,3.266l3.506,3.72
	C19.079,16.961,19.191,17.436,19.034,17.882z"
              />
            </svg>
            <span>Rechazar</span>
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-12 policy-request-option-container bg-gradient-blue p-5">
          <div className="policy-input-container">
            <span className="text-opaque fw-500">N° de póliza</span>
            <div>
              <input
                type="text"
                name=""
                class="input-text"
                placeholder="Ingrese n° de póliza"
              />
            </div>
          </div>
          <div className="policy-input-container">
            <span className="text-opaque fw-500">Adjuntar Archivo:</span>
            <div class="input-file-custom-wrapper">
              <span class="label">Adjuntar PDF</span>
              <input
                type="file"
                name="upload"
                class="input-file-custom"
                placeholder="Seleccionar archivo"
              />
              <span className="ml-2">Ningún archivo seleccionado</span>
            </div>
          </div>
          <div className="policy-input-container">
            <span className="text-opaque fw-500">Copiar correo a:</span>
            <div class="input-custom-text">
              <div className="selected-text-custom-container mb-2">
                <div className="selection">
                  <div className="text">gustavorojas@gmail.comasdadads</div>
                  <button>
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
                <div className="selection">
                  <div className="text">gustavorojas@gmail.com</div>
                  <button>
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
              </div>
              <span>
                <FontAwesomeIcon icon={faComments}></FontAwesomeIcon>
              </span>
              <input type="text" name="" id="" placeholder="Ingresar correo" />
            </div>
          </div>
          <div className="policy-input-container">
            <span className="text-opaque fw-500">
              Observaciones y <br /> comentarios
            </span>
            <div class="input-custom-text">
              <span>
                <FontAwesomeIcon icon={faComments}></FontAwesomeIcon>
              </span>
              <input type="text" name="" id="" placeholder="Agregar una nota" />
            </div>
          </div>
        </div>
      </div>

      <footer className="row">
        <div className="col-12 bg-gradient-blue-2 p-4 d-flex justify-content-between">
          <span className="fw-500 text-opaque fs-13 ml-3">
            © 2019 PeyGold. Todos los derechos reservados.
          </span>
          <span className="fw-500 text-opaque fs-13 mr-3">
            Desarrollado por ConfortSurArgentina S.A
          </span>
        </div>
      </footer>
    </Fragment>
  );
};

export default Policy;
