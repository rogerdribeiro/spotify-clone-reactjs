import React from "react";

import { Container, NewPlayList, Nav } from "./styles";

import AddPlayListIcon from "../../assets/images/add_playlist.svg";

const SideBar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a href="">Navegar</a>
        </li>
        <li>
          <a href="">Rádio</a>
        </li>
      </Nav>
      <Nav>
        <li>
          <span>SUA BIBLIOTECA</span>
        </li>
        <li>
          <a href="">Seu Daily Mix</a>
        </li>
        <li>
          <a href="">Tocados recentementes</a>
        </li>
        <li>
          <a href="">Musicas</a>
        </li>
        <li>
          <a href="">Albuns</a>
        </li>
        <li>
          <a href="">Artistas</a>
        </li>
        <li>
          <a href="">Estações</a>
        </li>
        <li>
          <a href="">Arquivos locais</a>
        </li>
        <li>
          <a href="">Vídes</a>
        </li>
        <li>
          <a href="">Podcast</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>PLAYLISTS</span>
        </li>
        <li>
          <a href="">Melhores do Rock</a>
        </li>
        <li>
          <a href="">Funk Mixs</a>
        </li>
      </Nav>
    </div>
    <NewPlayList>
      <img src={AddPlayListIcon} alt="adicionar playlist" />
      Nova playlist
    </NewPlayList>
  </Container>
);

export default SideBar;
