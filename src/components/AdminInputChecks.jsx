import React, { Fragment } from "react";
import { user1, changePhoto } from "../constants/img_urls";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faClock } from "@fortawesome/free-solid-svg-icons";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./css/rowDropdown.css";
import "./css/panelAdmin.css";
import "./css/white-fluid-box.css";
import "./css/box-option.css";
import "./css/blue-box.css";
import "./css/table.css";
const AdminInputChecks = ({
  handleDD,
  handleDD2,
  handleDD3,
  ddState,
  ddState2,
  ddState3,
  click
}) => {
  return (
    <Fragment>
      {/* secondary Topbar  */}
      <div
        className={
          click
            ? "topbar-check-container top-navbar-collapse d-none"
            : "topbar-check-container top-navbar-extended d-none"
        }
        id="secondary-nav"
      >
        <div class="topbar-check">
          <div class="d-flex align-items-center">
            <span class="id-number">Solicitud N° 772019475</span>
          </div>
          <div class="check-btn-container">
            <button class="btn-outline-opaque">Atrás</button>
            <button class="btn-outline-green">Actualizar</button>
          </div>
        </div>
      </div>
      <div
        className={
          click
            ? "topbar-check-container top-navbar-collapse"
            : "topbar-check-container top-navbar-extended"
        }
        id="secondary-nav"
      >
        <div class="topbar-check">
          <div class="d-flex align-items-center">
            <span class="id-number">Solicitud N° 772019475</span>
          </div>
          <div class="check-btn-container">
            <button class="btn-outline-opaque">Atrás</button>
            <button class="btn-outline-red">Rechazar</button>
            <button class="btn-outline-green">Actualizar</button>
          </div>
        </div>
      </div>
      {/* secondary Topbar  */}

      {/* Informacion del cheque */}
      <div class="row d-none">
        <div class="col-lg-10 check-data-container margin-top-fix">
          <h6>Cheque N°2</h6>
          <div class="check-upload-options">
            <div class="image-upload">
              <label for="file-input">
                <img src={changePhoto} className="mr-1" alt="" />
                Cambiar archivo adjunto de cheque
              </label>
              <input id="file-input" type="file" />
            </div>
            <div class="front-back-container">
              <button>
                <i class="fas fa-chevron-left"></i> Ver frente
              </button>
              <button>
                Ver dorso <i class="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
          <div class="check-img-container">
            <img src={user1} alt="" />
          </div>
        </div>
      </div>

      {/* Datos del cheque */}
      <div class="row d-none">
        <div class="col-lg-10 rows-wrapper">
          <div
            className={
              ddState ? "check-data-row data-show" : "check-data-row data-hide"
            }
          >
            <div class="title-container" onClick={handleDD}>
              <div class="title-text">
                <span class="name">Datos del cheque</span> <br />
                <span class="title-text-hide">
                  Complete los datos que se muestran en el cheque
                </span>
              </div>
              <span class="arrow">
                <i class="fas fa-chevron-down"></i>
              </span>
            </div>
            <br />
            <br />
            <div class="content-container">
              <div className="form-group mt-3">
                <label htmlFor="">Cuenta emisora</label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="input-text"
                  placeholder="Ingrese campo"
                />
              </div>
              <div className="inputs-container">
                <div className="form-group">
                  <label htmlFor="">CVU</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="input-text"
                    placeholder="Ingrese campo"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">N° de cheque</label>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="input-text"
                    placeholder="Ingrese campo"
                  />
                </div>
              </div>
              <div className="inputs-container">
                <div className="form-group">
                  <label htmlFor="">Fecha de emisión del cheque</label>
                  <input
                    type="date"
                    name=""
                    id=""
                    className="input-text"
                    placeholder="Ingrese campo"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Fecha de vencimiento del cheque</label>
                  <input
                    type="date"
                    name=""
                    id=""
                    className="input-text"
                    placeholder="Ingrese campo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              ddState2 ? "check-data-row data-show" : "check-data-row data-hide"
            }
            onClick={handleDD2}
          >
            <div class="title-container">
              <div class="title-text">
                <span class="name">Datos del banco</span> <br />
                <span class="title-text-hide">
                  Complete los datos que se muestran en el cheque
                </span>
              </div>
              <span class="arrow">
                <i class="fas fa-chevron-down"></i>
              </span>
            </div>
            <br />
            <br />

            <div class="content-container">
              <div className="form-group mt-3">
                <label htmlFor="">Banco</label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="input-text"
                  placeholder="Ingrese campo"
                />
              </div>
              <div className="inputs-container">
                <div className="form-group">
                  <label htmlFor="">Provincia</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="input-text"
                    placeholder="Ingrese campo"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Localidad</label>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="input-text"
                    placeholder="Ingrese campo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              ddState3 ? "check-data-row data-show" : "check-data-row data-hide"
            }
            onClick={handleDD3}
          >
            <div class="title-container">
              <div class="title-text">
                <span class="name">Datos del emisor</span> <br />
                <span class="title-text-hide">
                  Complete los datos que se muestran en el cheque
                </span>
              </div>
              <span class="arrow">
                <i class="fas fa-chevron-down"></i>
              </span>
            </div>
            <br />
            <br />

            <div class="content-container">
              <div className="form-group mt-3">
                <label htmlFor="">Email del firmante</label>
                <input
                  type="email"
                  name=""
                  id=""
                  className="input-text"
                  placeholder="Ingrese campo"
                />
              </div>
              <div className="inputs-container">
                <div className="form-group">
                  <label htmlFor="">Nombre y apellido del firmante</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="input-text"
                    placeholder="Ingrese campo"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Cuit</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="input-text"
                    placeholder="Ingrese campo"
                  />
                </div>
              </div>
              <div className="inputs-container">
                <div className="form-group">
                  <label htmlFor="">Tlf del firmante</label>
                  <input
                    type="tel"
                    name=""
                    id=""
                    className="input-text"
                    placeholder="Ingrese campo"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">DNI del firmante</label>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="input-text"
                    placeholder="Ingrese campo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Informacion del solicitante y solicitud */}
      <div className="row d-one">
        <div className="col-12 white-fluid-box margin-top-fix">
          <div className="requestant-request-info-container pb-3 mt-3">
            <div>
              <h5 className="subtitle-blue">Información del solicitante</h5>
              <div className="box-option">
                <div className="img-cont">
                  <img src={user1} alt="" />
                </div>
                <div className="text-cont">
                  <h1>Confort Sur S.A.</h1>
                  <p>
                    <span>Calle 14</span>-<span>Ciudad de prueba</span>-{" "}
                    <span>Gran Buenos Aires</span>. /{" "}
                    <span>Cuit: 00-00000000-9</span> /{" "}
                    <span>Empleados con beneficios: 1</span>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h5 className="subtitle-blue">Información del solicitud</h5>
              <div className="box-option">
                <div className="text-cont">
                  <h1>Confort Sur S.A.</h1>
                  <p>
                    <span>
                      Rescate de cheque 60 días de vencimiento por P$G
                    </span>{" "}
                    <br />
                    <span>Forma de pago: </span> <span>Cheque</span> <br />
                    <span>Cantidad a solicitar: </span>
                    <span>P$G 21</span> <br />
                    <span>Personas beneficiadas: </span>
                    <span>50</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="select-insurance-container">
            <div className="mr-md-4 mr-0 subtitle-blue">Aseguradora</div>
            <div className="select-insurance">
              <select name="" id="" className="input-text">
                <option value="">123</option>
              </select>
            </div>
            <button className="btn-custom-green ml-md-5 ml-0">
              Actualizar
            </button>
          </div>
        </div>
      </div>

      {/* Listado de cheques */}
      <div className="row dnone">
        <div className="col-lg-11 blue-box-wrapper">
          <h4> Listado de cheques</h4>
          <p className="m-0 ml-3">
            Seleccione el N° del cheque que desea editar.
          </p>
          <div class="table-responsive table-cont table-h-custom mt-4">
            <Table className="table table-borderless table-hover table-recent-transfers">
              <Thead>
                <Tr>
                  <Th>
                    <span>N° de Cheque</span>
                  </Th>
                  <Th>
                    <span>Fecha</span>
                  </Th>
                  <Th>
                    <span>Monto</span>
                  </Th>
                  <Th>
                    <span>Estatus</span>
                  </Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td className="table-request-id">Cheque 1</Td>
                  <Td className="table-date-cell">
                    10/07/2019
                    <br />
                    <span className="hour">19:54:21</span>
                  </Td>
                  <Td className="table-action-cell">Cliente 1</Td>
                  <Td className="table-status-cell">
                    <div className="status-float-txt">
                      <FontAwesomeIcon icon={faClock} />
                      <span>Some text to show</span>
                    </div>
                  </Td>
                  <Td className="table-status-cell">
                    <button>
                      <div className="edit-btn">
                        <FontAwesomeIcon icon={faEdit} />
                        <span>Editar</span>
                      </div>
                    </button>
                  </Td>
                </Tr>
                <Tr>
                  <Td className="table-request-id">Cheque 2</Td>
                  <Td className="table-date-cell">
                    10/07/2019
                    <br />
                    <span className="hour">19:54:21</span>
                  </Td>
                  <Td className="table-action-cell">Cliente 1</Td>
                  <Td className="table-status-cell">
                    <div className="status-float-txt">
                      <FontAwesomeIcon icon={faClock} />
                      <span>Some text to show</span>
                    </div>
                  </Td>
                  <Td className="table-status-cell">
                    <button>
                      <div className="edit-btn">
                        <FontAwesomeIcon icon={faEdit} />
                        <span>Editar</span>
                      </div>
                    </button>
                  </Td>
                </Tr>
                <Tr>
                  <Td className="table-request-id">Cheque 3</Td>
                  <Td className="table-date-cell">
                    10/07/2019
                    <br />
                    <span className="hour">19:54:21</span>
                  </Td>
                  <Td className="table-action-cell">Cliente 2</Td>
                  <Td className="table-status-cell">
                    <div className="status-float-txt">
                      <FontAwesomeIcon icon={faClock} />
                      <span>Some text to show</span>
                    </div>
                  </Td>
                  <Td className="table-status-cell">
                    <button>
                      <div className="edit-btn">
                        <FontAwesomeIcon icon={faEdit} />
                        <span>Editar</span>
                      </div>
                    </button>
                  </Td>
                </Tr>
                <Tr>
                  <Td className="table-request-id">Cheque 4</Td>
                  <Td className="table-date-cell">
                    10/07/2019
                    <br />
                    <span className="hour">19:54:21</span>
                  </Td>
                  <Td className="table-action-cell">Cliente 3</Td>
                  <Td className="table-status-cell">
                    <div className="status-float-txt">
                      <FontAwesomeIcon icon={faClock} />
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quia aut corporis, consequatur voluptates quae ea sint
                        ullam accusantium, animi harum assumenda reiciendis eius
                        commodi, quod fugiat fugit suscipit maxime libero.
                      </span>
                    </div>
                  </Td>
                  <Td className="table-status-cell ">
                    <button>
                      <div className="edit-btn">
                        <FontAwesomeIcon icon={faEdit} />
                        <span>Editar</span>
                      </div>
                    </button>
                  </Td>
                </Tr>
                <Tr>
                  <Td className="table-request-id">Cheque 5</Td>
                  <Td className="table-date-cell">
                    10/07/2019
                    <br />
                    <span className="hour">19:54:21</span>
                  </Td>
                  <Td className="table-action-cell">Cliente 4</Td>
                  <Td className="table-status-cell">
                    <div className="status-float-txt">
                      <FontAwesomeIcon icon={faClock} />
                      <span>Texto de estado de aplicacion</span>
                    </div>
                  </Td>
                  <Td className="table-status-cell">
                    <button>
                      <div className="edit-btn">
                        <FontAwesomeIcon icon={faEdit} />
                        <span>Editar</span>
                      </div>
                    </button>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AdminInputChecks;
