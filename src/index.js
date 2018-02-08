
import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './IndexStyles';
import SimpleModalLauncher from './SimpleModalLauncher/SimpleModalLauncher';
import Checkout from './Checkout';
import { Player } from 'video-react';
import PlayerControl from './Player/PlayerControl';

const App = ({ sheet: { classes } }) =>
  <div className={classes.appWrapper}>
    <header>
    <div>  <audio controls="controls"
      src="https://s3.amazonaws.com/poorgrrrl/SIDE+A.wav" autoPlay>
      PLAY ME
      </audio>
      </div>
      <h1>POORGRRRL</h1>
            <span>WHY ARE YOU CRYING, POORGRRRL?
        </span>

        *** ##played*by*the rules...* took you#for a fool
      <SimpleModalLauncher buttonLabel="OPEN ME">
        <div className={classes.imageModal}>
          <img
            className={classes.imageInModal}
            src="https://s3.amazonaws.com/poorgrrrl/crybaby.jpeg.jpg"
            alt="poorgrrrl crybaby"
          />
        </div>pass me ** a RAZOR***
      </SimpleModalLauncher>
        <div>**##hashtags##ourworldhasbeenREDUCEDTOALGORITHMS##**  **** ###
      **(somehow,someway...forbidden<img src="https://s3.amazonaws.com/poorgrrrl/cry.png" alt="sadbaby"/>fruit HAS COME TO GROW IN MY GARDEN ***  #)()
        document.remove<SimpleModalLauncher buttonLabel="CLICK ME">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://s3.amazonaws.com/poorgrrrl/why.jpg"
              alt="raining titties"
            />
            <Checkout
                name={'POORGRRRL SHIRT'}
                description={'SAD FACE SHIRT'}
                amount={1}
              />
          </div>
        </SimpleModalLauncher>(' <a href="https://www.vogue.com/article/women-to-watch-art-basel-miami
">vogue whenWEVOGUE****</a>);GGG%% *** BAAAA ^^(
      }</div>
      <SimpleModalLauncher buttonLabel="TOUCH ME">
        <div className={classes.textModal}>
          <h2>BUY PITIPARTY EP from parachute record label</h2>
          <Checkout
            name={'PITIPARTY EP'}
            description={'Four song EP'}
            amount={1}
          />
        </div>
      </SimpleModalLauncher>
    <div>  ***()****FGW= 666const keys =
          27: () =>
          <div>
          <SimpleModalLauncher buttonLabel="FUCK YOU">
            <div className={classes.imageModal}>
              <img
                className={classes.imageInModal}
                src="https://s3.amazonaws.com/poorgrrrl/poorgrrrl2+copy.jpg"
                alt="crybaby"
              />
            </div>
          </SimpleModalLauncher>
          </div>
          </div>
          ****** XXXX ~~~***FOREVER****whenwillyoulearn**},};
        <br />
        <a href="https://twitter.com/poorgrrrl?lang=en">why are you crying?</a>
        <div>
        <SimpleModalLauncher buttonLabel="FUCK YOU">
            <Player
              src="https://s3.amazonaws.com/poorgrrrl/noiseconference2018.mov"
          />
          <PlayerControl />

        </SimpleModalLauncher>
        </div>
      <div>
        <br />
        <a href="https://parachute.bandcamp.com/album/pitiparti">PITIPARTY EP</a>
      </div>
    </header>


  </div>;
  class Pay extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <Checkout
            name={'PITIPARTY EP'}
            description={'Six song EP'}
            amount={1}
          />
        </p>

        <p>FOUND <a href="https://parachute.bandcamp.com/album/pitiparti">HERE</a>

        </p>
      </div>
    );
  }
}

App.propTypes = {
  sheet: PropTypes.object,
  classes: PropTypes.object
};

const StyledApp = injectSheet(styles)(App);

render (<Pay />, document.getElementById("root"));
render(<StyledApp />, document.getElementById("root"));
