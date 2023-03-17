import { Ship } from "./ship.js" // importing the ship factory function to create the ship


const Gameboard = (name, length, x, y) => {

let missed = [] // reports missed shots by ship
   

const ship = Ship(name, length, x, y) // calling the ship factory function to create the ship

  

const receiveAttack = (x,y) => {

if (x == ship.x && y == ship.y) // if the coordinnates received in the arguments are equal to those of ship, then it touches

{
  ship.damage(1)
  return true
}

else if (x == ship.x && y == ship.y+1) // +1 because the ship is not just one square

{
  ship.damage(1)
  return true
}
else if ((ship.name == 'cruiser' || ship.name == 'submarine') && x == ship.x && y == ship.y+2) // only cruisers and submarines are > 2 length

{
  ship.damage(1)
  return true
}
else if (ship.name == 'cruiser' && x == ship.x && y == ship.y+3)

{
  ship.damage(1)
  return true
}



else

{
  missed.push({x,y}) // if missed, push to the array to get a track of it
  return missed
  }



}


    return{missed, receiveAttack, ship};

  };
  




export { Gameboard }



// module.exports = Gameboard for tests
