
const Ship = (name, length, x, y, health = length,sunk = false) => {
    

    const damage = x => {
      return health -= x;
      };
    
    const isSunk = () => {if (health==0)
    {return sunk = true}
else{ return sunk}}
  
    return {name, length, health, x, y, damage, isSunk};
  };
  
  
  



export { Ship }



