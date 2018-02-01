import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './IndexStyles';
import SimpleModalLauncher from './SimpleModalLauncher/SimpleModalLauncher';
// import WebFont from 'webfontloader';

// WebFont.load({
//   families: ['game_over']
// });
const App = ({ sheet: { classes } }) =>
  <div className={classes.appWrapper}>
    <header>
      <h1>POORGRRRL</h1>
      <span>WHY ARE YOU CRYING, POORGRRRL? THINGS CAN'T BE THAT BAD....
      </span>
      <div>  <audio controls="controls"
        src="https://s3.amazonaws.com/poorgrrrl/SIDE+A.wav" autoPlay>
        PLAY ME
        </audio>
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
          </div>EventListener
        </SimpleModalLauncher>('click', this.handleOutsideClick, false);
      }</div>
      <SimpleModalLauncher buttonLabel="TOUCH ME">
        <div className={classes.textModal}>
          <h2>POORGRRRL BRINGS HER NASTY STYLE TO THE WORLD WIDE WEB</h2>

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

App.propTypes = {
  sheet: PropTypes.object,
  classes: PropTypes.object
};

const StyledApp = injectSheet(styles)(App);

render(<StyledApp />, document.getElementById("root"));
