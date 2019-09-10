import React, { Fragment } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faSearch,
  faTimes,
  faEdit
} from "@fortawesome/free-solid-svg-icons";
import "./css/panelAdmin.css";
import "./css/blue-box.css";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./css/table.css";
import "./css/pagination.css";

const AdminCreditRequests = () => {
  return (
    <Fragment>
      <div class="row">
        <div class="col-lg-11 blue-box-wrapper">
          <div className="d-flex justify-content-between align-items-center">
            <h4>
              <img src="../global/assets/resumen.svg" alt="" /> Solicitudes de
              créditos
            </h4>
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
          </div>
          <div class="border-separator"></div>
          <div class="table-cont table-h-custom">
            <Table className="table table-borderless table-hover table-recent-transfers">
              <Thead>
                <Tr>
                  <Th>
                    <span>ID de solicitud</span>
                  </Th>
                  <Th>
                    <span>Fecha</span>
                  </Th>
                  <Th>
                    <span>Cliente</span>
                  </Th>
                  <Th>
                    <span>Monto empleado</span>
                  </Th>
                  <Th>
                    <span>Acciones</span>
                  </Th>
                  <Th>
                    <span>Estatus</span>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td className="table-request-id">12312231</Td>
                  <Td className="table-date-cell">
                    10/07/2019
                    <br />
                    <span className="hour">19:54:21</span>
                  </Td>
                  <Td className="table-action-cell">Cliente 1</Td>
                  <Td className="table-amount-cell">P$G 2750</Td>
                  <Td className="table-actions-cell">Ejemplo</Td>
                  <Td className="table-status-cell text-rejected">Rechazado</Td>
                </Tr>
                <Tr>
                  <Td className="table-request-id">12312231</Td>
                  <Td className="table-date-cell">
                    10/07/2019
                    <br />
                    <span className="hour">19:54:21</span>
                  </Td>
                  <Td className="table-action-cell">Cliente 1</Td>
                  <Td className="table-amount-cell">P$G 2750</Td>
                  <Td className="table-actions-cell">Ejemplo</Td>
                  <Td className="table-status-cell text-rejected">Rechazado</Td>
                </Tr>

                <Tr>
                  <Td className="table-request-id">4534553</Td>
                  <Td className="table-date-cell">
                    10/07/2019
                    <br />
                    <span className="hour">19:54:21</span>
                  </Td>
                  <Td className="table-action-cell">Cliente 2</Td>
                  <Td className="table-amount-cell">$ 900000</Td>
                  <Td className="table-actions-cell">Ejemplo</Td>
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
                  <Td className="table-request-id">123114156</Td>
                  <Td className="table-date-cell">
                    10/07/2019
                    <br />
                    <span className="hour">19:54:21</span>
                  </Td>
                  <Td className="table-action-cell">Cliente 3</Td>
                  <Td className="table-amount-cell">P$G 2750</Td>
                  <Td className="table-actions-cell">Ejemplo</Td>
                  <Td className="table-status-cell text-approve">Aprobado</Td>
                </Tr>
                <Tr>
                  <Td className="table-request-id">87233612</Td>
                  <Td className="table-date-cell">
                    10/07/2019
                    <br />
                    <span className="hour">19:54:21</span>
                  </Td>
                  <Td className="table-action-cell">Cliente 4</Td>
                  <Td className="table-amount-cell">$ 900</Td>
                  <Td className="table-actions-cell">Ejemplo</Td>
                  <Td className="table-status-cell">
                    <button>
                      <div className="edit-btn">
                        <i className="fas fa-edit"></i>
                        <span>Editar</span>
                      </div>
                    </button>
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
    </Fragment>
  );
};

export default AdminCreditRequests;
