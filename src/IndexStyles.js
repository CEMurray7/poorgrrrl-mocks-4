export default {
  // Some global styles
  '@global': {
    html: {
      fontFamily: 'Apple',
      fontSize: '36px',
      boxSizing: 'border-box',
    },
    '@font-face': {
      fontFamily: 'Apple',
      src: "local('Apple'), url(Apple.ttf) format('ttf')",
    },

    '*, *:before, *:after': {
      boxSizing: 'inherit',
    },

    '@keyframes': {
      '0%': { transform: 'rotate(45deg)'},
      '100%': { transform: 'rotate(45deg)'},

    },
    img: {
      animationName: 'headBob',
      animationDuration: '1s',
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
      animationDirection: 'alternate',
    },
    body: {
      display: 'flex',
      flexWrap: 'wrap',
      fontFamily: 'Apple',
      backgroundColor: 'white',
      color: '#00c925',
      color: 'black',
      fontWeight: 'normal',
      fontSize: '1rem',
      lineHeight: '1.5',
    },
    h2: {
      margin: '0',
      padding: '0',
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
    background: 'white',

    '& h2': {
      marginTop: 0,
    },
     '& div': {
      margin: '0',
      padding: '0',
      // display: 'flex',
      // flexWrap: 'wrap',
      // maxWidth: '30%',
      // boxSizing: 'borderBox',
    },

    '& p': {
      marginBottom: 0,
    },
  },

  'uniqueButton': {
    display: 'flex',
    flexWrap: 'wrap',
    boxSizing: 'borderBox',
    width: '30%',
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
