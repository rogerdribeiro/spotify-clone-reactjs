import React, { Fragment, Component } from "react";
import GlobalStyle from "./styles/global";

import SideBar from "./components/SideBar";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <SideBar />
      </Fragment>
    );
  }
}
