module.exports ={
    variants: {
        textColor: ['group-hover', 'hover'],
        backgroundColor: ['group-hover', 'hover'],
      },
    theme: {
      fontFamily: {
        display: ['Monserrat', 'sans-serif'],
        body:['Lato', 'sans-serif']
      },
      extend: {
        colors: {
          bluebit: '#5822F6',
          purplebit: '#481AE7',
          purplesec: '#271777',
          cyan: '#00D2E5',
          grayhov: '#00D2E5',
          grayborder: '#DFDFDF',
          gray404: '#A9A9A9',
          graybutton: '#B9B9B9'
        },
      }
    },
}