
import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './IndexStyles';
import SimpleModalLauncher from './SimpleModalLauncher/SimpleModalLauncher';
import Checkout from './Checkout';
import { Player } from 'video-react';
import PlayerControl from './Player/PlayerControl';
// import WebFont from 'webfontloader';
// WebFont.load({
//   families: ['Apple ][']
// });

// import 'bootstrap/dist/css/bootstrap.css';
// import { Button } from 'reactstrap';

const App = ({ sheet: { classes } }) =>
  <div className={classes.appWrapper}>
    <header>
      <div>
        <audio controls="controls"
          src="https://s3.amazonaws.com/poorgrrrl/SIDE+A.wav" autoPlay>PLAY ME</audio>
      </div>
      <h2>P00RGRRRL</h2>
            <div>WHY ARE Y0U CRYING,P00RGRRRL? D0N'T CRY.@@���� d� d  DRY Y0UR EYE
        *** @@?#PLAYED*by0u#for���� d� daf00l</div>
      <SimpleModalLauncher buttonLabel="0PEN ME">
        <div className={classes.imageModal}>
          <img
            className={classes.imageInModal}
            src="https://s3.amazonaws.com/poorgrrrl/crybaby.jpeg.jpg"
            alt="poorgrrrl crybaby"
          /><a href="">CLICK me F0R Ph0T0 GALLERY</a>
        </div>
      </SimpleModalLauncher>
        *** SWEAT**FUCK**<a href="https://parachute.bandcamp.com/album/pitiparti">PITIPARTY EP</a>
        <div>**##hashtags##ourw0rlDHA  PASS*���� d� dMEa RAZ0R***
        SBEEnREDUCEDT0ALG0RITHMS##*
      => S0MEH0W, S0MEWAY...f0rBIDDDDDDDEN<img src="https://s3.amazonaws.com/poorgrrrl/cry.png" alt="sadbaby"/>
      WHAT***FRUIT? ���� d� dAAPPPPPLE  </div>#)() => GIVEME���� d� dKN0WLEDGEBITCH
        <SimpleModalLauncher buttonLabel="LICK ME">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://s3.amazonaws.com/poorgrrrl/why.jpg"
              alt="raining titties"
            /><a href="">CLICK ME f0R PeRF0RMANCE VIDE0S</a>
            <Checkout
                name={'POORGRRRL SHIRT'}
                description={'SAD FACE SHIRT'}
                amount={1}
              />
          </div>
        </SimpleModalLauncher>(' <a href="https://www.vogue.com/article/women-to-watch-art-basel-miami">
        v0gue whenWEV0GUE****</a>);GGG%% *** BAAAA ^^(} FORGET}Y0UEVER@@MET   ME
      }
      <SimpleModalLauncher buttonLabel="T0UCH ME">
        <div className={classes.textModal}>
          <div>BUY PITIPARTi EPPASS*���� d� dMEa RAZ0R***FR0M PARACHUTE</div>
          <Checkout
            name={'PITIPARTY EP'}
            description={'Four song EP'}
            amount={1}
          />
        </div>
      </SimpleModalLauncher>
    <div>  ***()****FGW= 666c0ns = KEY => VALUE
          27: () =>
          <div>
          <SimpleModalLauncher buttonLabel="FUCK Y0U">
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
          ****** XXXX}}***F0REVER@@@@WHEN##WILL  Y0U@LEARN**},};
        <br />
        <a href="https://twitter.com/poorgrrrl?lang=en">WHY D0 Y0U CRY?</a>
        <div>
        <SimpleModalLauncher buttonLabel="FUCK Y0U">
            <Player
              src="https://s3.amazonaws.com/poorgrrrl/noise.mov"
          />
          <PlayerControl />

        </SimpleModalLauncher>
        </div>
      <div>
        <br />
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
