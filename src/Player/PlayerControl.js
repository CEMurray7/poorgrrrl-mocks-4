import React, { Component } from 'react';
import { Player, ControlBar } from 'video-react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

// const sources ={
//   name: url;
// } to be used if there are multiple sources to be run through

export default class PlayerControl extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      source: 'https://s3.amazonaws.com/poorgrrrl/noiseconference2018.mov'
    };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);
    this.changeCurrentTime = this.changeCurrentTime.bind(this);
    this.seek = this.seek.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.setMuted = this.setMuted.bind(this);
  }

  componentDidMount() {
    this.refs.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  handleStateChange(state, prevState) {
    this.setState({
      player: state
    });
  }

  play() {
    this.refs.player.play();
  }
  pause() {
    this.refs.player.pause();
  }
  load() {
    this.refs.player.load();
  }

  render() {
    return (
      <div>
      <Player
      ref='player'
      autoPlay >
      <source src='https://s3.amazonaws.com/poorgrrrl/noiseconference2018.mov' />
      <ControlBar autohide={false} />
      </Player>
      <div className='py-3'>
      <Button onClick={this.play} className="mr-3">play()</Button>
      <Button onClick={this.pause} className="mr-3">pause()</Button>
      <Button onClicke={this.load} className="mr-3">load()</Button>
      </div>
      <div className="pb-3">
      <Button oncClick={this.changeVolume(0.1)} className="mr-3">volume+=0.1</Button>
      <Button onClick={this.changeVolume(-0.1)} className="mr-3">volume-=</Button>
      <Button onClick={this.setMuted(true)} className="mr-3">muted=true</Button>
      <Button onClick={this.setMuted(false)} className="mr-3">muted=false</Button>
      </div>
      </div>
    );
  }
}
