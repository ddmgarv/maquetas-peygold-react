import React, { Fragment } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faSearch,
  faTimes,
  faEdit,
  faUserPlus,
  faLock,
  faEye,
  faLockOpen,
  faCheck,
  faMinus
} from "@fortawesome/free-solid-svg-icons";
import { iconCheck, iconDisabled, user1, points } from "../constants/img_urls";
import "./css/panelAdmin.css";
import "./css/blue-box.css";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./css/table.css";
import "./css/pagination.css";

const AdminUsers = () => {
  return (
    <Fragment>
      <div class="row">
        <div class="col-lg-11 blue-box-wrapper">
          <h4 className="title-separator">
            <img src="../global/assets/resumen.svg" alt="" /> Listado de
            usuarios
          </h4>
          <div class="border-separator"></div>

          <div className="table-options-container">
            <div>
              <input
                type="text"
                className="input-text"
                placeholder="Seleccione una acción"
              />
            </div>
            <div className="d-flex align-items-center">
              <div className="input-search">
                <button className="input-search-loop">
                  <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </button>
                <button className="input-search-times">
                  <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                </button>
                <input
                  type="text"
                  placeholder="Filtrar por búsqueda"
                  name=""
                  id=""
                />
              </div>
              <div className="ml-2">
                <button className="btn-custom-green">
                  <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon> Crear
                  usuario
                </button>
              </div>
            </div>
          </div>
          <div class="border-separator"></div>
          <div class="table-responsive table-cont table-h-custom">
            <Table className="table table-borderless table-hover table-recent-transfers">
              <Thead>
                <Tr>
                  <Th className="table-checkbox-cell"></Th>
                  <Th className="table-user-cell">
                    <span>Usario</span>
                  </Th>
                  <Th className="table-dni-cell">
                    <span>DNI</span>
                  </Th>
                  <Th className="table-mail-cell">
                    <span>Email</span>
                  </Th>
                  <Th className="table-isActive-cell">
                    <span>Activo</span>
                  </Th>
                  <Th className="table-status-cell">
                    <span>Estatus</span>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td className="table-checkbox-cell">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor=""></label>
                  </Td>
                  <Td className="table-user-cell">
                    <div className="d-flex align-items-center">
                      <img src={user1} alt="" className="table-user-icon" />
                      <span className="ml-2">Usuario</span>
                    </div>
                  </Td>
                  <Td className="table-dni-cell">asdasdasadas</Td>
                  <Td className="table-mail-cell">garv1998131@gmail.com</Td>
                  <Td className="table-isActive-cell">
                    <img src={iconCheck} alt="" class="table-icon" />
                  </Td>
                  <Td className="table-status-cell">
                    <div className="padLock-icon-container">
                      <FontAwesomeIcon icon={faLock} />
                    </div>
                    <div className="points-container">
                      <img src={points} alt="" className="rotate-90" />
                      <div className="user-float-options-box">
                        <button>
                          <FontAwesomeIcon icon={faEye} />
                          <span className="ml-3">Ver usuario</span>
                        </button>
                        <button>
                          <FontAwesomeIcon icon={faEdit} />
                          <span className="ml-3">Editar usuario</span>
                        </button>
                        <div className="user-float-btn-container">
                          <button>
                            <FontAwesomeIcon icon={faLock} />
                            <span className="ml-1">Bloquear</span>
                          </button>
                          <button>
                            <FontAwesomeIcon icon={faLockOpen} />
                            <span className="ml-1">Desbloquear</span>
                          </button>
                        </div>
                        <div className="user-float-btn-container border-fix">
                          <button>
                            <FontAwesomeIcon icon={faCheck} />
                            <span className="ml-1">Activar</span>
                          </button>
                          <button className="ml-4 position-fix">
                            <FontAwesomeIcon icon={faMinus} />
                            <span className="ml-2">Desactivar</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Td>
                </Tr>
                <Tr>
                  <Td className="table-checkbox-cell">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor=""></label>
                  </Td>

                  <Td className="table-user-cell">
                    <div className="d-flex align-items-center">
                      <img src={user1} alt="" className="table-user-icon" />
                      <span className="ml-2">Usuario</span>
                    </div>
                  </Td>
                  <Td className="table-dni-cell"></Td>
                  <Td className="table-mail-cell">garv1998131@gmail.com</Td>
                  <Td className="table-isActive-cell">
                    <img src={iconDisabled} alt="" class="table-icon" />
                  </Td>
                  <Td className="table-status-cell">
                    <div className="padLock-icon-container">
                      <FontAwesomeIcon icon={faLock} />
                    </div>
                    <div className="points-container">
                      <img src={points} alt="" className="rotate-90" />
                      <div className="user-float-options-box">
                        <button>
                          <FontAwesomeIcon icon={faEye} />
                          <span className="ml-3">Ver usuario</span>
                        </button>
                        <button>
                          <FontAwesomeIcon icon={faEdit} />
                          <span className="ml-3">Editar usuario</span>
                        </button>
                        <div className="user-float-btn-container">
                          <button>
                            <FontAwesomeIcon icon={faLock} />
                            <span className="ml-1">Bloquear</span>
                          </button>
                          <button>
                            <FontAwesomeIcon icon={faLockOpen} />
                            <span className="ml-1">Desbloquear</span>
                          </button>
                        </div>
                        <div className="user-float-btn-container border-fix">
                          <button>
                            <FontAwesomeIcon icon={faCheck} />
                            <span className="ml-1">Activar</span>
                          </button>
                          <button className="ml-4 position-fix">
                            <FontAwesomeIcon icon={faMinus} />
                            <span className="ml-2">Desactivar</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Td>
                </Tr>

                <Tr className="trCustom">
                  <Td colSpan="5" valign="middle">
                    No se encontraron resultados
                  </Td>
                </Tr>
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
    </Fragment>
  );
};

export default AdminUsers;
