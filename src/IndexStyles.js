export default {
  // Some global styles
  '@global': {
    html: {
      fontSize: '24px',
      boxSizing: 'border-box',
    },
    '@font-face': {
      fontFamily: 'Early GameBoy',
      src: "local('Early GameBoy'), url(Early GameBoy.ttf) format('ttf')",
    },

    '*, *:before, *:after': {
      boxSizing: 'inherit',
    },

    body: {
      fontFamily: 'Early GameBoy',
      backgroundColor: '#313131',
      color: '#038fd2',
      fontWeight: 'normal',
      fontSize: '1rem',
      lineHeight: '1.5',
    },

    h1: {
      margin: ['0.5rem', 0, '0.5rem'],
    },

    header: {
      // marginBottom: '1rem',
    },

    a: {
      color: '#085f89',
    },

    'a:hover': {
      color: '#989898',
    },
  },

  appWrapper: {
    textAlign: 'center',
  },

  textModal: {
    textAlign: 'center',
    margin: '0.8rem',
    padding: '0.8rem',
    background: 'black',

    '& h2': {
      marginTop: 0,
    },

    '& p': {
      marginBottom: 0,
    },
  },

  imageModal: {
    padding: '0.2rem',

    '& img': {
      display: 'center',
      maxWidth: '100%',
      height: 'auto',
    },
  },
};
