import React, { Fragment, Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";

import ErrorBox from "./components/ErrorBox";
import SideBar from "./components/SideBar";
import Player from "./components/Player";
import Header from "./components/Header";
import { Wrapper, Container, Content } from "./styles/components";

import store from "./store";
import Routes from "./routes";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <GlobalStyle />
            <Wrapper>
              <Container>
                <SideBar />
                <Content>
                  <ErrorBox />
                  <Header />
                  <Routes />
                </Content>
              </Container>
              <Player />
            </Wrapper>
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}
