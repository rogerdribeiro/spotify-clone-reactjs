import React, { Fragment, Component } from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/global";

import SideBar from "./components/SideBar";
import Player from "./components/Player";
import Header from "./components/Header";
import { Wrapper, Container, Content } from "./styles/components";

import Routes from "./routes";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <GlobalStyle />
          <Wrapper>
            <Container>
              <SideBar />
              <Content>
                <Header />
                <Routes />
              </Content>
            </Container>
            <Player />
          </Wrapper>
        </Fragment>
      </BrowserRouter>
    );
  }
}
