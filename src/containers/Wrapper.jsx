import React, { Fragment, Component } from "react";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import Check from "../components/Check";
class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { click: false };
  }
  handleClick = () => {
    this.setState({ click: !this.state.click });
  };
  render() {
    const { click } = this.state;
    return (
      <Fragment>
        <Topbar handleClick={this.handleClick} click={click} />
        <div className="row" id="body-row">
          <Sidebar handleClick={this.handleClick} click={click} />
          <div class="col" id="main-div">
            <Check />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Wrapper;
