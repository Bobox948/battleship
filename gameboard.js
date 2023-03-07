const Ship = require('./ship');

const Gameboard = (x, y) => {
   

    const ship1 = Ship('cruiser', 4, x, y);


    return { x, y };
  };
  
  
  


module.exports = Gameboard



