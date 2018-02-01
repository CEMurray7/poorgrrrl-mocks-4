export default {

  '@font-face': {
    fontFamily: 'Early GameBoy',
    src: "local('Early GameBoy'), url(Early GameBoy.ttf) format('ttf')",
  },
  modalButton: {
    fontFamily: 'Early GameBoy',
    padding: ['0.1rem', '0.1rem'],
    backgroundColor: 'white',
    border: 0,
    borderRadius: '0.3rem',
    fontSize: '0.5rem',
    color: 'black',
    cursor: 'pointer',
    marginBottom: '0.8rem',

    '&:hover': {
      backgroundColor: 'grey',
    },
  },
};
