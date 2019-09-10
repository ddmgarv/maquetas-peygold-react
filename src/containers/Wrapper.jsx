import React, { Fragment, Component } from "react";
import Policy from "./../components/Policy";
import Topbar from "../components/Topbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faDownload,
  faPrint
} from "@fortawesome/free-solid-svg-icons";
import { user1 } from "../constants/img_urls";
import AdminInputChecks from "./../components/AdminInputChecks";
import AdminSidebar from "../components/AdminSidebar";
import AdminCreditRequests from "./../components/AdminCreditRequests";
import InsuranceCarrierList from "../components/InsuranceCarrierList";
import AddInsuranceCarrier from "../components/AddInsuranceCarrier";
import Check from "../components/Check";
import AdminUsers from "../components/AdminUsers";
import AddUser from "../components/AddUser";
import "./../components/css/modal.css";

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      ddState: false,
      ddState2: false,
      ddState3: false
    };
  }
  handleClick = () => {
    this.setState({ click: !this.state.click });
  };
  handleDD = () => {
    this.setState({ ddState: !this.state.ddState });
  };
  handleDD2 = () => {
    this.setState({ ddState2: !this.state.ddState2 });
  };
  handleDD3 = () => {
    this.setState({ ddState3: !this.state.ddState3 });
  };
  render() {
    const { click, ddState, ddState2, ddState3 } = this.state;
    return (
      <Fragment>
        {/* <Topbar handleClick={this.handleClick} click={click} /> */}
        <div className="row" id="body-row">
          {/* <AdminSidebar handleClick={this.handleClick} click={click} /> */}
          {/* <main class="col" id="main-div"> */}
          {/* <AdminInputChecks
              click={click}
              ddState={ddState}
              ddState2={ddState2}
              ddState3={ddState3}
              handleDD={this.handleDD}
              handleDD2={this.handleDD2}
              handleDD3={this.handleDD3}
            ></AdminInputChecks> */}
          {/* <Check /> */}
          {/* <AdminCreditRequests /> */}
          {/* <InsuranceCarrierList /> */}
          {/* <AddInsuranceCarrier click={click} /> */}
          {/* <AdminUsers /> */}
          {/* <AddUser click={click}></AddUser> */}
          {/* </main> */}

          <main className="col">
            <Policy ddState={ddState} handleDD={this.handleDD}></Policy>
          </main>

          {/* <div class="modal-background"></div>
          <div class="modal-container-wrapper">
            <div class="modal-content-wrapper">
              <div className="modal-buttons-head-container">
                <div>
                  <h6 className="text-white">Visualizar datos de usuario</h6>
                </div>
                <div>
                  <button className="btn-outline-opaque ml-3">
                    <FontAwesomeIcon icon={faPrint} /> Imprimir
                  </button>
                  <button className="btn-outline-green ml-3">
                    <FontAwesomeIcon icon={faDownload} /> Guardar imagen
                  </button>
                  <button className="ml-3 text-info">
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
              </div>
              <div className="modal-main-content-container d-none">
                <div>
                  <img src={user1} alt="" />
                </div>
                <div>
                  <h5>Ooooopps!</h5>
                  <p>Ha ocurrido un error durante el proceso</p>
                </div>
                <div>
                  <button>Volver a intentarlo</button>
                </div>
              </div>
              <div className="modal-main-content-container">
                <div className="modal-user-data-img">
                  <img src={user1} alt="" />
                  <h6>Argeven C.A.</h6>
                  <p>argevenca@gmail.com</p>
                </div>
                <div className="modal-user-data">
                  <p>
                    <span>CUIT</span> 123123123123
                  </p>
                  <p>
                    <span>Dirección</span> <br /> Calle campo sector provincial
                    ciudad capital - 8745 Argentina
                  </p>
                  <p>
                    <span>Localidad</span> Ejemplo de dato
                  </p>
                  <p>
                    <span>Provincia</span> Ejemplo de dato
                  </p>
                  <p>
                    <span>Banco</span> Ejemplo de dato
                  </p>
                </div>
                <div className="modal-user-data">
                  <p>
                    <span>Contacto</span> Ejemplo de dato
                  </p>
                  <p>
                    <span>Rol</span> Ejemplo de dato
                  </p>
                  <p>
                    <span>Número</span> Ejemplo de dato
                  </p>
                  <p>
                    <span>Piso</span> Ejemplo de dato
                  </p>
                  <p>
                    <span>Teléfono</span> Ejemplo de dato
                  </p>
                  <p>
                    <span>CBU</span> Ejemplo de dato
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </Fragment>
    );
  }
}

export default Wrapper;
