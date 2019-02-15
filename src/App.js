import React, { Fragment, Component } from "react";
import GlobalStyle from "./styles/global";

import SideBar from "./components/SideBar";
import Player from "./components/Player";
import { Wrapper, Container } from "./styles/components";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Wrapper>
          <Container>
            <SideBar />
          </Container>
          <Player />
        </Wrapper>
      </Fragment>
    );
  }
}
