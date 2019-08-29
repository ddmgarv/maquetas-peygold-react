import React, { Fragment } from "react";
import { user1 } from "../constants/img_urls";
import "./css/blue-box.css";
import "./css/white-fluid-box.css";
import "./css/white-box.css";
import "./css/check.css";
import "./css/box-option.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faComments } from "@fortawesome/free-solid-svg-icons";

const CheckHelper = () => {
  return (
    <Fragment>
      <div class="row white-fluid-box-title ">
        {/* <!-- Title --> */}
        <div class="col-xl-12">
          <h1 class="fs-17 d-flex justify-content-between">
            <button>
              <i class="fas fa-chevron-left mr-2" />
              Atrás
            </button>
            <div className="text-blue fs-13">
              CREDITO <span className="fs-12">/</span> CHEQUERA
            </div>
          </h1>
        </div>
        {/* <!-- Title --> */}
      </div>

      <div class="row white-fluid-box-title d-none">
        {/* <!-- Title --> */}
        <div class="col-xl-12">
          <h1 class="fs-17">
            <button>Atrás</button>
          </h1>
        </div>
        {/* <!-- Title --> */}
      </div>

      {/* rows titles */}

      <div className="row d-none">
        <div className="col-12 white-fluid-box check-help-title-container">
          <h5 className="title-text">Ayuda</h5>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <span>
              4- Opciones de vencimientos: Deberá seleccionar las opciones de
              vencimientos mediante el cual devolverá su préstamo.
            </span>
            <button className="btn-custom-status ml-2">Entendido</button>
          </div>
        </div>
      </div>

      <div className="row d-none">
        <div className="col-12 white-fluid-box check-checkbook-title-container">
          <h5 className="title-text">Chequera</h5>
          <div className="title-info-container">
            <span>
              El monto solicitado está sujeto a la cantidad de empleados y a las
              condiciones crediticias a verificar del solicitante. Este
              simulador es orientativo.
            </span>
            <button className="btn-custom-green ml-2">
              <img src="" alt="" /> Ver ayuda
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 white-fluid-box check-checkbook-title-container">
          <h5 className="title-text">Solicitud N° 1047</h5>
          <div className="title-info-container">
            <div>
              <span className="text-blue">
                Su solicitud ha sido enviada a revisión. <br />
              </span>
              En la sección "Ver estado de créditos" podrá ver <br /> la
              información correspondiente.
            </div>
            <div>
              <a href="#" className="no-underline fw-700 fs-17 text-blue">
                Ver estado de crédito
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* rows titles */}

      {/* Help container */}
      <div className="row d-none">
        <div className="col-xl-8 col-lg-10 checkbook-help-container white-box">
          <div className="check-input-container">
            <input
              type="text"
              className="input-text"
              placeholder="Cantidad de personas: 1"
              disabled
            />
            <span className="invisible">-------</span>
            <input
              type="text"
              className="input-text"
              placeholder="Forma de pago: Tarjeta de crédito"
              disabled
            />
          </div>
          <div className="check-input-container mt-3">
            <input
              type="text"
              className="input-text"
              placeholder="Cantidad a solicitar: P$G 21"
              disabled
            />
            <span className="invisible">-------</span>
            <input
              type="text"
              className="input-text"
              placeholder="Opciones de vencimiento: Opción 1"
              disabled
            />
          </div>
          <div className="box-option mt-3">
            <div className="img-cont">
              <img src={user1} alt="" />
            </div>
            <div className="text-cont">
              <h1 className="fs-20 font-weight-bold">Confort Sur S.A.</h1>
              <p>
                <span>Calle 14</span>-<span>Ciudad de prueba</span>-{" "}
                <span>Gran Buenos Aires</span>. /{" "}
                <span>Cuit: 00-00000000-9</span> /{" "}
                <span>Empleados con beneficios: 1</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Help container */}

      {/* Blue containers */}

      <div className="row d-none">
        <div className="col-xl-6 col-lg-8 blue-box-wrapper check-payMethod-amount-container">
          <h4>
            <img src="" alt="" />
            Monto y forma de pago
          </h4>
          <div className="border-separator" />
          <div className="check-input-container">
            <div className="text-opaque fw-600 fs-17">Cantidad de personas</div>
            <div>
              <input type="number" name="" className="input-text" id="" />
            </div>
          </div>
          <div className="check-input-container mb-5">
            <div className="text-opaque fw-600 fs-17">
              Cantidad a solicitar <br /> en Peygold Créditos
            </div>
            <div>
              <input type="number" name="" className="input-text" id="" />
            </div>
          </div>
          <div className="border-separator" />
          <div className="text-center">
            <button className="btn-custom-status">Consultar</button>
          </div>
        </div>
      </div>

      <div className="row d-none">
        <div className="col-lg-8 blue-box-wrapper check-payMethod-amount-container-2">
          <h4>
            <img src="" alt="" />
            Monto y forma de pago
          </h4>
          <div className="border-separator" />
          <div className="paymethod-content">
            <span>Forma de pago</span> <br />
            <select name="" id="" className="">
              <option value="">opcion1 </option>
            </select>
          </div>
          <div className="border-separator" />
          <div className="text-opaque">
            Opciones de movimientos <br />
            <span className="fs-14">
              A continuación seleccione la opción que más se adecúe a sus
              vencimientos
            </span>
          </div>
          <div className="movement-options-wrapper">
            <div className="movement-options-title">
              <div className="text-blue">Opción 1</div>
              <div>
                <button className="btn-outline-green">
                  <FontAwesomeIcon icon={faCheck} />
                </button>
              </div>
            </div>
            <div className="movement-option-row">
              <div>
                <div className="date-cont">
                  <span className="opaque-text">Fecha</span>
                  <br />
                  <span className="date">29/12/2019</span>
                </div>
                <div className="amount-cont">
                  <span className="opaque-text">Costo</span>
                  <br />
                  <span className="green-text">$7</span>
                </div>
              </div>
              <div>
                <div className="date-cont">
                  <span className="opaque-text">Fecha</span>
                  <br />
                  <span className="date">29/12/2019</span>
                </div>
                <div className="amount-cont">
                  <span className="opaque-text">Costo</span>
                  <br />
                  <span className="green-text">$7</span>
                </div>
              </div>
              <div>
                <div className="date-cont">
                  <span className="opaque-text">Fecha</span>
                  <br />
                  <span className="date">29/12/2019</span>
                </div>
                <div className="amount-cont">
                  <span className="opaque-text">Costo</span>
                  <br />
                  <span className="green-text">$7</span>
                </div>
              </div>
              <div>
                <div className="date-cont">
                  <span className="opaque-text">Fecha</span>
                  <br />
                  <span className="date">29/12/2019</span>
                </div>
                <div className="amount-cont">
                  <span className="opaque-text">Costo</span>
                  <br />
                  <span className="green-text">$7</span>
                </div>
              </div>
              <div>
                <div className="date-cont">
                  <span className="opaque-text">Fecha</span>
                  <br />
                  <span className="date">29/12/2019</span>
                </div>
                <div className="amount-cont">
                  <span className="opaque-text">Costo</span>
                  <br />
                  <span className="green-text">$7</span>
                </div>
              </div>
              <div>
                <div className="date-cont">
                  <span className="opaque-text">Fecha</span>
                  <br />
                  <span className="date">29/12/2019</span>
                </div>
                <div className="amount-cont">
                  <span className="opaque-text">Costo</span>
                  <br />
                  <span className="green-text">$7</span>
                </div>
              </div>
            </div>
            <div className="movement-options-title">
              <div className="text-blue">Opción 1</div>
              <div>
                <button className="btn-outline-green">Seleccionar</button>
              </div>
            </div>
            <div className="movement-option-row">
              <div>
                <div className="date-cont">
                  <span className="opaque-text">Fecha</span>
                  <br />
                  <span className="date">29/12/2019</span>
                </div>
                <div className="amount-cont">
                  <span className="opaque-text">Costo</span>
                  <br />
                  <span className="green-text">$7</span>
                </div>
              </div>
              <div>
                <div className="date-cont">
                  <span className="opaque-text">Fecha</span>
                  <br />
                  <span className="date">29/12/2019</span>
                </div>
                <div className="amount-cont">
                  <span className="opaque-text">Costo</span>
                  <br />
                  <span className="green-text">$7</span>
                </div>
              </div>
              <div>
                <div className="date-cont">
                  <span className="opaque-text">Fecha</span>
                  <br />
                  <span className="date">29/12/2019</span>
                </div>
                <div className="amount-cont">
                  <span className="opaque-text">Costo</span>
                  <br />
                  <span className="green-text">$7</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <button className="btn-custom-status">Siguiente</button>
          </div>
        </div>
      </div>

      <div className="row d-none">
        <div className="col-xl-8 col-lg-10 blue-box-wrapper check-borrow-request">
          <div className="d-flex justify-content-between align-items-center">
            <h4>
              <img src="" alt="" />
              Solicitud de préstamo
            </h4>
            <span className="selection-text">Ha seleccionado la opción X</span>
          </div>

          <div className="border-separator" />
          <fieldset className="check-fieldset">
            <legend>Cheque 1</legend>
            <div className="check-input-container">
              <div className="text-opaque fw-600 fs-17">Frente de cheque</div>
              <div class="input-file-custom-wrapper">
                <span class="label">Seleccionar archivo</span>
                <input
                  type="file"
                  name="upload"
                  class="input-file-custom"
                  placeholder="Seleccionar archivo"
                />
                <span className="ml-2">Ningún archivo seleccionado</span>
              </div>
            </div>
            <div className="check-input-container">
              <div className="text-opaque fw-600 fs-17">Dorso de cheque</div>
              <div class="input-file-custom-wrapper">
                <span class="label">Seleccionar archivo</span>
                <input
                  type="file"
                  name="upload"
                  class="input-file-custom"
                  placeholder="Seleccionar archivo"
                />
                <span className="ml-2">Ningún archivo seleccionado</span>
              </div>
            </div>
          </fieldset>

          <div className="check-input-container">
            <div className="text-opaque fw-600 fs-17 align-self-xl-start align-self-xl-center">
              Opciones rescate de cheques:
            </div>
            <div className="expiration-checkboxes-container">
              <div class="custom-control">
                <input type="checkbox" id="box-1" />
                <label for="box-1"> Rescatar 60 días de vencimiento</label>
              </div>
              <div class="custom-control">
                <input type="checkbox" id="box-2" />
                <label for="box-2"> Canjear 60 días vencimiento por P$G</label>
              </div>
              <div class="custom-control">
                <input type="checkbox" id="box-3" />
                <label for="box-3"> Alianza comercial</label>
              </div>
            </div>
          </div>
          <div className="check-input-container">
            <div className="text-opaque fw-600 fs-17 pt-3">
              Observaciones y comentarios:
            </div>
            <div class="input-custom-text">
              <span>
                <FontAwesomeIcon icon={faComments}></FontAwesomeIcon>
              </span>
              <input type="text" name="" id="" placeholder="Agregar una nota" />
            </div>
          </div>

          <div className="text-center mt-5">
            <button className="btn-custom-green">Enviar solicitud</button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 mt-5">
          <div className="d-flex justify-content-center align-items-center">
            <img src={user1} alt="" />
          </div>
        </div>
      </div>

      {/* Blue containers */}
    </Fragment>
  );
};

export default CheckHelper;
