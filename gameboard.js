import { Ship } from "./ship.js"


const Gameboard = (name, length, x, y) => {

let missed = []
   

const ship = Ship(name, length, x, y)

  



const receiveAttack = (x,y) => {

if (x == ship.x && y == ship.y)

{
  ship.damage(1)
  return true
}

else if (x == ship.x+1 && y == ship.y)

{
  ship.damage(1)
  return true
}
else if ((ship.name == 'cruiser' || ship.name == 'submarine') && x == ship.x+2 && y == ship.y)

{
  ship.damage(1)
  return true
}
else if (ship.name == 'cruiser' && x == ship.x+3 && y == ship.y)

{
  ship.damage(1)
  return true
}



else

{
  missed.push({x,y})
  return missed
  }



}









    return{missed, receiveAttack, ship};

  };
  




export { Gameboard }



