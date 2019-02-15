import React from "react";

import { Container, Search, User } from "./styles";

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>
    <User>
      <img
        src="https://avatars2.githubusercontent.com/u/41801242?v=4"
        alt="avatar"
      />
      Rogerd Ribeiro
    </User>
  </Container>
);

export default Header;
