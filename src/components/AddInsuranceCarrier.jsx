import React, { Fragment } from "react";
import "./css/panelAdmin.css";
import "./css/addInsuranceCarrier.css";

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
            <span class="id-number">Código del ID N° 772019475</span>
          </div>
          <div class="check-btn-container">
            <button class="btn-outline-opaque">Regresar</button>
            <button class="btn-outline-green">Actualizar</button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-11 add-insurance-carrier-container">
          <h5 className="subtitle-blue">Agregar Aseguradora</h5>
          <div className="input-container">
            <div className="form-group">
              <label htmlFor="">Razón Social</label>
              <input
                type="text"
                className="input-text"
                placeholder="Ingrese el campo"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Cuit</label>
              <input
                type="text"
                className="input-text"
                placeholder="Ingrese el campo"
              />
            </div>
          </div>
          <div className="input-container">
            <div className="form-group">
              <label htmlFor="">Dirección</label>
              <input
                type="text"
                className="input-text"
                placeholder="Ingrese el campo"
              />
            </div>
          </div>
          <div className="input-container">
            <div className="form-group">
              <label htmlFor="">Número</label>
              <input
                type="text"
                className="input-text"
                placeholder="Ingrese el campo"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Localidad</label>
              <input
                type="text"
                className="input-text"
                placeholder="Ingrese el campo"
              />
            </div>
          </div>
          <div className="input-container">
            <div className="form-group">
              <label htmlFor="">Piso</label>
              <input
                type="text"
                className="input-text"
                placeholder="Ingrese el campo"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                type="text"
                className="input-text"
                placeholder="Ingrese el campo"
              />
            </div>
          </div>
          <div className="input-container">
            <div className="form-group">
              <label htmlFor="">Pronvicia</label>
              <input
                type="text"
                className="input-text"
                placeholder="Ingrese el campo"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Contacto</label>
              <input
                type="text"
                className="input-text"
                placeholder="Ingrese el campo"
              />
            </div>
          </div>
          <div className="input-container">
            <div className="form-group">
              <label htmlFor="">Teléfono</label>
              <input
                type="text"
                className="input-text"
                placeholder="Ingrese el campo"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Banco</label>
              <input
                type="text"
                className="input-text"
                placeholder="Ingrese el campo"
              />
            </div>
          </div>
          <div className="input-container">
            <div className="form-group">
              <label htmlFor="">CBU</label>
              <input
                type="text"
                className="input-text"
                placeholder="Ingrese el campo"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Cuenta corriente</label>
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
