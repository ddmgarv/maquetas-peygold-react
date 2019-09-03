import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdjust,
  faUserCheck,
  faCreditCard,
  faAddressBook,
  faLocationArrow,
  faPhone,
  faFileContract,
  faMailBulk,
  faPiggyBank,
  faPen,
  faMoneyBill,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import "./css/panelAdmin.css";
import "./css/add-item-box.css";

const AddInsuranceCarrier = ({ click }) => {
  return (
    <Fragment>
      <div
        className={
          click
            ? "topbar-check-container top-navbar-collapse "
            : "topbar-check-container top-navbar-extended "
        }
        id="secondary-nav"
      >
        <div class="topbar-check">
          <div class="d-flex align-items-center">
            <span class="id-number">Crear nuevo usuario</span>
          </div>
          <div class="check-btn-container">
            <button class="btn-outline-opaque">Regresar</button>
            <button class="btn-outline-green">Actualizar</button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-11 add-insurance-carrier-container">
          <h5 className="subtitle-blue">Complete los campos requeridos</h5>
          <div className="input-container">
            <div className="form-group">
              <label htmlFor="">
                <span className="prepend-icon-input">
                  <FontAwesomeIcon icon={faUserCheck} />
                </span>
                Razón Social
              </label>
              <input
                type="text"
                className="input-text"
                placeholder="Ingrese el campo"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">
                <span className="prepend-icon-input">
                  <FontAwesomeIcon icon={faCreditCard} />
                </span>
                CUIT
              </label>
              <input
                type="text"
                className="input-text"
                placeholder="Ingrese el campo"
              />
            </div>
          </div>

          <div className="input-container">
            <div className="form-group">
              <label htmlFor="">
                <span className="prepend-icon-input">
                  <FontAwesomeIcon icon={faAddressBook} />
                </span>
                Dirección
              </label>
              <input
                type="text"
                className="input-text"
                placeholder="Ingrese el campo"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">
                <span className="prepend-icon-input">
                  <FontAwesomeIcon icon={faLocationArrow} />
                </span>
                Localidad
              </label>
              <input
                type="text"
                className="input-text"
                placeholder="Ingrese el campo"
              />
            </div>
          </div>
          <div className="input-container">
            <div className="form-group">
              <label htmlFor="">
                <span className="prepend-icon-input">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                Rol
              </label>
              <input
                type="text"
                className="input-text"
                placeholder="Ingrese el campo"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">
                <span className="prepend-icon-input">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                Número
              </label>
              <input
                type="text"
                className="input-text"
                placeholder="Ingrese el campo"
              />
            </div>
          </div>
          <div className="input-container">
            <div className="form-group">
              <label htmlFor="">
                <span className="prepend-icon-input">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                Email
              </label>
              <input
                type="text"
                className="input-text"
                placeholder="Ingrese el campo"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">
                <span className="prepend-icon-input">
                  <FontAwesomeIcon icon={faPiggyBank} />
                </span>
                Banco
              </label>
              <input
                type="text"
                className="input-text"
                placeholder="Ingrese el campo"
              />
            </div>
          </div>

          <div className="input-container">
            <div className="form-group">
              <label htmlFor="">
                <span className="prepend-icon-input">
                  <FontAwesomeIcon icon={faLocationArrow} />
                </span>
                Piso
              </label>
              <input
                type="text"
                className="input-text"
                placeholder="Ingrese el campo"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">
                <span className="prepend-icon-input">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                Contacto
              </label>
              <input
                type="text"
                className="input-text"
                placeholder="Ingrese el campo"
              />
            </div>
          </div>
          <div className="input-container">
            <div className="form-group">
              <label htmlFor="">
                <span className="prepend-icon-input">
                  <FontAwesomeIcon icon={faAdjust} />
                </span>
                Teléfono
              </label>
              <input
                type="text"
                className="input-text"
                placeholder="Ingrese el campo"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">
                <span className="prepend-icon-input">
                  <FontAwesomeIcon icon={faLocationArrow} />
                </span>
                Provincia
              </label>
              <input
                type="text"
                className="input-text"
                placeholder="Ingrese el campo"
              />
            </div>
          </div>
          <div className="input-container">
            <div className="form-group">
              <label htmlFor="">
                <span className="prepend-icon-input">
                  <FontAwesomeIcon icon={faPen} />
                </span>
                CBU
              </label>
              <input
                type="text"
                className="input-text"
                placeholder="Ingrese el campo"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">
                <span className="prepend-icon-input">
                  <FontAwesomeIcon icon={faMoneyBill} />
                </span>
                Cuenta corriente
              </label>
              <input
                type="text"
                className="input-text"
                placeholder="Ingrese el campo"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddInsuranceCarrier;
