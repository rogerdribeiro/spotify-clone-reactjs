import React, { Fragment, Component } from "react";
import GlobalStyle from "./styles/global";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <h1>Hello World</h1>
      </Fragment>
    );
  }
}
