
const Ship = (name, length, x, y, health = length,sunk = false) => {
    

    const damage = x => { // if damage is taken then the health deacreases by 1
      return health -= x;
      };
    
    const isSunk = () => {if (health==0) // when health == 0, sunk becomes true (default = false)
    {return sunk = true}
else{ return sunk}}
  
    return {name, length, health, x, y, damage, isSunk};
  };
  
  
  



export { Ship }

// module.exports = Ship  for tests

