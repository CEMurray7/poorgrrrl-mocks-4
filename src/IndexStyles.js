export default {
  // Some global styles
  '@global': {
    html: {
      fontSize: '16px',
      boxSizing: 'border-box',
    },
    '@font-face': {
      fontFamily: 'game_over',
      src: "local('game_over'), url(game_over.ttf) format('ttf')",
    },

    '*, *:before, *:after': {
      boxSizing: 'inherit',
    },

    body: {
      fontFamily: 'Minecraft',
      backgroundColor: 'black',
      color: '#941100',
      fontWeight: 'normal',
      fontSize: '2rem',
      lineHeight: '1.5',
    },

    h1: {
      margin: ['2rem', 0, '1rem'],
    },

    header: {
      marginBottom: '2rem',
    },

    a: {
      color: '#941100',
    },

    'a:hover': {
      color: '#00bf7f',
    },
  },

  appWrapper: {
    textAlign: 'center',
  },

  textModal: {
    textAlign: 'center',
    margin: '0.8rem',
    padding: '0.8rem',
    background: 'white',

    '& h2': {
      marginTop: 0,
    },

    '& p': {
      marginBottom: 0,
    },
  },

  imageModal: {
    padding: '0.4rem',

    '& img': {
      display: 'block',
      maxWidth: '100%',
      height: 'auto',
    },
  },
};
