export default {

  '@font-face': {
    fontFamily: 'Apple',
    src: "local('Apple'), url(Apple.ttf) format('ttf')",
  },
  modalButton: {
    fontFamily: 'Apple',
    justifyContent: 'center',
    padding: ['0.7rem', '0.7rem'],
    backgroundColor: 'white',
    border: 0,
    borderRadius: '0.3rem',
    borderColor: 'black',
    fontSize: '0.5rem',
    color: 'black',
    cursor: 'pointer',
    width: '25%',
    marginBottom: '0.8rem',

    '&:hover': {
      backgroundColor: 'grey',
    },
    uniqueButton: {
      display: 'flex',
      flexWrap: 'wrap',
    }
  },
};
