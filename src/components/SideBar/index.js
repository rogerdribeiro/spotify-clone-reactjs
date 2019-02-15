import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistsActions } from "../../store/ducks/playlists";

import { Link } from "react-router-dom";
import { Container, NewPlayList, Nav } from "./styles";
import AddPlayListIcon from "../../assets/images/add_playlist.svg";
import Loading from "../../components/Loading";

class SideBar extends Component {
  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  render() {
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <Link to="">Navegar</Link>
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
              {this.props.playlists.loading && <Loading />}
            </li>

            {this.props.playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
          </Nav>
        </div>
        <NewPlayList>
          <img src={AddPlayListIcon} alt="adicionar playlist" />
          Nova playlist
        </NewPlayList>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
