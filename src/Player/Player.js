import React from 'react';
import { Player, ControlBar } from 'video-react';
import styles from './PlayerStyles';
import PlayerControl from './PlayerControl';
export default (props) => {
  return (
    <Player
    autoPlay
    src="https://s3.amazonaws.com/poorgrrrl/noiseconference2018.mov"
    maxHeight="30.875rem"
    >
    <ControlBar autoHide={false} disableDefaultControls={true} />
    <VolumeMenuButton vertical={true} />
    </Player>
  );
};
