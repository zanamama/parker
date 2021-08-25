const { Location } = require('../models');

const location = [
  {
    address: '212 crestwood drive Valley stream, NY 11278',
    isOpen: true
  },
  {
    address: '119 Golf Street Freeport, NY 11520',
    isOpen: false
  },

  {
    address: '8424 N. Paris Hill Ave. Bridgewater, NJ 08807',
    isOpen: false
  },

  {
    address: '7218 St Louis Street West Babylon, NY 11704',
    isOpen: true
  },  
];

const locationData = () => Location.bulkCreate(location);

module.exports = locationData;