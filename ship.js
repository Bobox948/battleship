
const Ship = (name, length, health = length,sunk = false, x, y) => {
    
    const damage = x => {
      return health -= x;
      };
    
    const isSunk = () => {if (health==0)
    {return sunk = true}
else{ return sunk}}
  

    return { name, length, health, damage, isSunk};
  };
  
  
  


module.exports = Ship




