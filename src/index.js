
import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './IndexStyles';
import SimpleModalLauncher from './SimpleModalLauncher/SimpleModalLauncher';
import Checkout from './Checkout';
// WebFont.load({
//   families: ['game_over']
// });
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
<div className="App">
      <p className="App-intro">
      <Checkout
          name={'PITIPARTY EP'}
          description={'Six song EP'}
          amount={1}
        />
        <img src="https://s3.amazonaws.com/poorgrrrl/Screen+Shot+2017-07-03+at+1.33.20+AM.png" alt="three" />
      </p>
      <p>FOUND <a href="https://parachute.bandcamp.com/album/pitiparti">HERE</a></p>
    </div>
      <SimpleModalLauncher buttonLabel="OPEN ME">
        <div className={classes.imageModal}>
          <img
            className={classes.imageInModal}
            src="https://s3.amazonaws.com/poorgrrrl/crybaby.jpeg.jpg"
            alt="poorgrrrl crybaby"
          />
        </div>
      </SimpleModalLauncher>
<div>
      componentWillUnmount()
        window.removeEventListener('keyup', this.handleKeyUp, false);
        document.remove<SimpleModalLauncher buttonLabel="CLICK ME">
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src="https://s3.amazonaws.com/poorgrrrl/why.jpg"
              alt="raining titties"
            />
          </div>
        </SimpleModalLauncher>('click', this.handleOutsideClick, false);
      }</div>
      <SimpleModalLauncher buttonLabel="TOUCH ME">
        <div className={classes.textModal}>
          <h2>POORGRRRL BRINGS HER NASTY STYLE TO THE WORLD WIDE WEB</h2>
          <Checkout
            name={'PITIPARTY EP'}
            description={'Six song EP'}
            amount={1}
          />
        </div>
      </SimpleModalLauncher>


    <div>  handleKeyUp(e)
        const  onCloseRequest } = this.props;
        const keys =
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
            e.preventDefault);
            onCloseRequest();
            window.removeEventListener('keyup', this.handleKeyUp, false);
          },
        };
        <br />
        <a href="https://twitter.com/poorgrrrl?lang=en">why are you crying?</a>

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
