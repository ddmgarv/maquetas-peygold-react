import React, { Fragment } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faSearch,
  faEdit,
  faTimes,
  faCheck,
  faMinus
} from "@fortawesome/free-solid-svg-icons";
import "./css/panelAdmin.css";
import "./css/blue-box.css";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./css/table.css";
import "./css/pagination.css";

const InsuranceCarrierList = () => (
  <Fragment>
    <div class="row">
      <div class="col-lg-11 blue-box-wrapper">
        <div className="d-flex justify-content-between align-items-center">
          <h4>
            <img src="../global/assets/resumen.svg" alt="" /> Listado de
            Aseguradora
          </h4>
          <div className="d-flex">
            <div className="input-search">
              <button className="input-search-loop">
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
              </button>
              <input
                type="text"
                placeholder="Filtrar por búsqueda"
                name=""
                id=""
              />
            </div>
            <div className="ml-3">
              <button className="btn-custom-status">Agregar</button>
            </div>
          </div>
        </div>
        <div class="border-separator"></div>
        <div class="table-responsive table-cont table-h-custom">
          <Table className="table table-borderless table-hover table-recent-transfers">
            <Thead>
              <Tr>
                <Th>
                  <span>Código ID</span>
                </Th>
                <Th>
                  <span>Razón social</span>
                </Th>
                <Th>
                  <span>Cuit</span>
                </Th>
                <Th>
                  <span>Teléfonos</span>
                </Th>
                <Th>
                  <span>Estatus</span>
                </Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td className="table-request-id">435243134</Td>
                <Td className="table-date-cell">Untalk C.A.</Td>
                <Td className="table-action-cell">0-00000000-0</Td>
                <Td className="table-amount-cell">Ejemplo</Td>
                <Td className="table-status-cell">Ejemplo</Td>
                <Td className=""></Td>
              </Tr>
              <Tr>
                <Td className="table-request-id">12312315151</Td>
                <Td className="table-date-cell">Argeven C.A.</Td>
                <Td className="table-action-cell">0-00000000-0</Td>
                <Td className="table-amount-cell">Ejemplo</Td>
                <Td className="table-status-cell">Ejemplo</Td>
                <Td className=""></Td>
              </Tr>

              <Tr>
                <Td className="table-request-id">1231453786</Td>
                <Td className="table-date-cell">Argeven C.A.</Td>
                <Td className="table-action-cell">0-00000000-0</Td>
                <Td className="table-amount-cell">Ejemplo</Td>
                <Td className="table-status-cell">
                  <div className="status-container-inactive">
                    <button>
                      <div className="accept-circle">
                        <FontAwesomeIcon icon={faMinus} />
                      </div>
                    </button>
                    <button className="mr-3 text-inactive">Inactiva</button>
                  </div>
                </Td>
                <Td className="table-status-cell"></Td>
              </Tr>
              <Tr>
                <Td className="table-request-id">1904837636</Td>
                <Td className="table-date-cell">Argeven C.A.</Td>
                <Td className="table-action-cell">0-00000000-0</Td>
                <Td className="table-amount-cell">Ejemplo</Td>
                <Td className="table-status-cell">Ejemplo</Td>
                <Td className=""></Td>
              </Tr>
              <Tr>
                <Td className="table-request-id">1239905894</Td>
                <Td className="table-date-cell">Argeven C.A.</Td>
                <Td className="table-action-cell">0-00000000-0</Td>
                <Td className="table-amount-cell">Ejemplo</Td>
                <Td className="table-status-cell">
                  <div className="status-container-active">
                    <button className="mr-3 text-active">Activa</button>
                    <button>
                      <div className="accept-circle">
                        <FontAwesomeIcon icon={faCheck} />
                      </div>
                    </button>
                  </div>
                </Td>
                <Td className="table-status-cell">
                  <div className="double-button-container">
                    <button>
                      <div className="accept-circle">
                        <FontAwesomeIcon icon={faEdit} />
                        <span>Editar</span>
                      </div>
                    </button>
                    <button>
                      <div className="reject-circle">
                        <FontAwesomeIcon icon={faTimes} />
                        <span>Eliminar</span>
                      </div>
                    </button>
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
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <ul class="pagination">
          <li class="">
            <a class="d-flex" href="#">
              <FontAwesomeIcon icon={faChevronLeft} />
              <FontAwesomeIcon icon={faChevronLeft} />
            </a>
          </li>
          <li class="">
            <a class="d-flex" href="#">
              <FontAwesomeIcon icon={faChevronLeft} />
            </a>
          </li>
          <li class="active">
            <a class="" href="#">
              1
            </a>
          </li>
          <li class="">
            <a class="" href="#">
              ...
            </a>
          </li>
          <li class="">
            <a class="" href="#">
              25
            </a>
          </li>
          <li class="">
            <a class="" href="#">
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </li>
          <li class="">
            <a class="d-flex" href="#">
              <FontAwesomeIcon icon={faChevronRight} />
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </Fragment>
);

export default InsuranceCarrierList;
