import React, { Fragment, Component } from "react";
import Topbar from "../components/Topbar";
import AdminInputChecks from "./../components/AdminInputChecks";
import AdminSidebar from "../components/AdminSidebar";
import AdminCreditRequests from "./../components/AdminCreditRequests";
import InsuranceCarrierList from "../components/InsuranceCarrierList";
import AddInsuranceCarrier from "../components/AddInsuranceCarrier";
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
        <Topbar handleClick={this.handleClick} click={click} />
        <div className="row" id="body-row">
          <AdminSidebar handleClick={this.handleClick} click={click} />
          <main class="col" id="main-div">
            {/* <AdminInputChecks
              click={click}
              ddState={ddState}
              ddState2={ddState2}
              ddState3={ddState3}
              handleDD={this.handleDD}
              handleDD2={this.handleDD2}
              handleDD3={this.handleDD3}
            ></AdminInputChecks> */}
            {/* <AdminCreditRequests></AdminCreditRequests> */}
            {/* <InsuranceCarrierList></InsuranceCarrierList> */}
            <AddInsuranceCarrier click={click}></AddInsuranceCarrier>
          </main>
        </div>
      </Fragment>
    );
  }
}

export default Wrapper;
