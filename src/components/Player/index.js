import React, { Fragment } from "react";
import Slider from "rc-slider";
import Sound from "react-sound";

import { connect } from "react-redux";

import {
  Container,
  Current,
  Volume,
  Progress,
  Controls,
  Time,
  ProgressSlider
} from "./styles";
import VolumeIcon from "../../assets/images/volume.svg";
import ShuffeIcon from "../../assets/images/shuffle.svg";
import BackwardIcon from "../../assets/images/backward.svg";
import PlayIcon from "../../assets/images/play.svg";
import ForwardIcon from "../../assets/images/forward.svg";
import RepeatIcon from "../../assets/images/repeat.svg";

const Player = ({ player }) => (
  <Container>
    {!!player.currentSong && (
      <Sound url={player.currentSong.file} playStatus={player.status} />
    )}
    <Current>
      {!!player.currentSong && (
        <Fragment>
          <img
            src={player.currentSong.thumbnail}
            alt={player.currentSong.title}
          />

          <div>
            <span>{player.currentSong.title}</span>
            <small>{player.currentSong.author}</small>
          </div>
        </Fragment>
      )}
    </Current>

    <Progress>
      <Controls>
        <button>
          <img src={ShuffeIcon} alt="button" />
        </button>
        <button>
          <img src={BackwardIcon} alt="button" />
        </button>
        <button>
          <img src={PlayIcon} alt="button" />
        </button>
        <button>
          <img src={ForwardIcon} alt="button" />
        </button>
        <button>
          <img src={RepeatIcon} alt="button" />
        </button>
      </Controls>

      <Time>
        <span>1:39</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: "#404040", borderRadius: 10 }}
            trackStyle={{ background: "#1ed760" }}
            handleStyle={{ border: 0 }}
          />
        </ProgressSlider>
        <span>4:24</span>
      </Time>
    </Progress>

    <Volume>
      <img src={VolumeIcon} alt="volume" />
      <Slider
        railStyle={{ background: "#404040", borderRadius: 10 }}
        trackStyle={{ background: "#fff" }}
        handleStyle={{ diplay: "none" }}
        value={100}
      />
    </Volume>
  </Container>
);
const mapStateToProps = state => ({
  player: state.player
});

export default connect(mapStateToProps)(Player);
