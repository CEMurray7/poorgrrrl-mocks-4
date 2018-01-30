export default {

  '@font-face': {
    fontFamily: 'Early GameBoy',
    src: "local('Early GameBoy'), url(Early GameBoy.ttf) format('ttf')",
  },
  modalButton: {
    fontFamily: 'Early GameBoy',
    padding: ['0.7rem', '1.8rem'],
    backgroundColor: '#00d726',
    border: 0,
    borderRadius: '0.3rem',
    fontSize: '1rem',
    color: 'black',
    cursor: 'pointer',
    marginBottom: '0.8rem',

    '&:hover': {
      backgroundColor: 'white',
    },
  },
};
