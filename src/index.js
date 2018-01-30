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
      <p>A dirty dade native, poorgrrrl just keeps keep crying.
        <br />
        <a href="https://twitter.com/poorgrrrl?lang=en">why are you crying?</a>
      </p>

      <p>
        <br />
        <a href="https://parachute.bandcamp.com/album/pitiparti">PITIPARTY EP</a>
      </p>
    </header>

    <SimpleModalLauncher buttonLabel="Open text modal">
      <div className={classes.textModal}>
        <h2>POORGRRRL BRINGS HER NASTY STYLE TO THE WORLD WIDE WEB</h2>
        <p>
        @@�@@@@@@@          
      @@@@@@@�@@@
      @@@@@@@@%^     �  '  
        </p>
      </div>
    </SimpleModalLauncher>

    <SimpleModalLauncher buttonLabel="Open image modal">
      <div className={classes.imageModal}>
        <img
          className={classes.imageInModal}
          src="https://s3.amazonaws.com/poorgrrrl/poorgrrrl2+copy.jpg"
          alt="Nature"
        />
      </div>
    </SimpleModalLauncher>
  </div>;

App.propTypes = {
  sheet: PropTypes.object,
  classes: PropTypes.object
};

const StyledApp = injectSheet(styles)(App);

render(<StyledApp />, document.getElementById("root"));
