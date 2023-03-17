import { Gameboard } from "../gameboard.js"



document.addEventListener('DOMContentLoaded', function() { // making sure the doam is loaded first, after that we can locate elements by ID easily



    document.querySelector('#restart').addEventListener('click', restart)


for (let k=0; k<10; k++){ // for every grid cell, the loop creates a click event listenner that triggers the attack function

        document.querySelector(`.d0${[k]}`).addEventListener('click', Attack)


   
}

for (let i=10; i<100; i++){ // for every grid cell, the loop creates a click event listenner that triggers the attack function

    document.querySelector(`.d${[i]}`).addEventListener('click', Attack)



}



Game() // load by default this function that creates the gameboard




})
let boat;
let boat2;
let submarine;
let submarine2;
let cruiser;
let cruiser2;

function Game(){



    // place the ships first randomly for the player

   var random1 = Math.floor(Math.random() * (6 - 0 + 1) + 0) // I've put limitations here because the length of the boat if 4 for instance so I put a random between 0 and 6, that way it fits
   var random2 = Math.floor(Math.random() * (3 - 0 + 1) + 0)
   var random3 = Math.floor(Math.random() * (7 - 0 + 1) + 0) // submarine section
   var random4 = Math.floor(Math.random() * (6 - 4 + 1) + 4)
   var random5 = Math.floor(Math.random() * (8 - 0 + 1) + 0) // cruiser section
   var random6 = Math.floor(Math.random() * (9 - 7 + 1) + 7)


   // create the ships by calling the factory function Ship
 boat = Gameboard('boat', 4, random2, random1)
 submarine = Gameboard('submarine', 3, random4, random3)

cruiser = Gameboard('cruiser', 2, random6, random5)

var first = document.querySelector(`.c${random2}${random1}`)
var first1 = document.querySelector(`.c${random2}${random1+1}`)
var first2 = document.querySelector(`.c${random2}${random1+2}`)
var first3 = document.querySelector(`.c${random2}${random1+3}`)

var second = document.querySelector(`.c${random4}${random3}`)
var second1 = document.querySelector(`.c${random4}${random3+1}`)
var second2 = document.querySelector(`.c${random4}${random3+2}`)

var third = document.querySelector(`.c${random6}${random5}`)
var third1 = document.querySelector(`.c${random6}${random5+1}`)

first.innerHTML = "B" // I've put this in other to allow to know if there is a hit, indeed, in the innerHTML of the location of the hit is eqal to "B" then we will know the boat has been touched
first.style.backgroundColor = 'rgb(64,64,64)';
first.style.borderRight = 'rgb(64,64,64)';
first.style.borderLeft = 'rgb(64,64,64)';



first1.innerHTML = "B"
first1.style.backgroundColor = 'rgb(64,64,64)';
first1.style.borderRight = 'rgb(64,64,64)';
first1.style.borderLeft = 'rgb(64,64,64)';





first2.innerHTML = "B"
first2.style.backgroundColor = 'rgb(64,64,64)';

first2.style.borderRight = 'rgb(64,64,64)';
first2.style.borderLeft = 'rgb(64,64,64)';


first3.innerHTML = "B"
first3.style.backgroundColor = 'rgb(64,64,64)';
first3.style.borderRight = 'rgb(64,64,64)';
first3.style.borderLeft = 'rgb(64,64,64)';


second.innerHTML = "S"
second.style.backgroundColor = 'rgb(64,64,64)';
second.style.borderRight = 'rgb(64,64,64)';
second.style.borderLeft = 'rgb(64,64,64)';

second1.innerHTML = "S"
second1.style.backgroundColor = 'rgb(64,64,64)';
second1.style.borderRight = 'rgb(64,64,64)';
second1.style.borderLeft = 'rgb(64,64,64)';

second2.innerHTML = "S"
second2.style.backgroundColor = 'rgb(64,64,64)';
second2.style.borderRight = 'rgb(64,64,64)';
second2.style.borderLeft = 'rgb(64,64,64)';


third.innerHTML = "C"
third.style.backgroundColor = 'rgb(64,64,64)';
third.style.borderRight = 'rgb(64,64,64)';
third.style.borderLeft = 'rgb(64,64,64)';

third1.innerHTML = "C"
third1.style.backgroundColor = 'rgb(64,64,64)';
third1.style.borderRight = 'rgb(64,64,64)';
third1.style.borderLeft = 'rgb(64,64,64)';





// computer random placement

var random7 = Math.floor(Math.random() * (6 - 0 + 1) + 0)
var random8 = Math.floor(Math.random() * (3 - 0 + 1) + 0)
var random9 = Math.floor(Math.random() * (7 - 0 + 1) + 0)
var random10 = Math.floor(Math.random() * (6 - 4 + 1) + 4)
var random11 = Math.floor(Math.random() * (8 - 0 + 1) + 0)
var random12 = Math.floor(Math.random() * (9 - 7 + 1) + 7)

boat2 = Gameboard('boat', 4, random8, random7)
 submarine2 = Gameboard('submarine', 3, random10, random9)

 cruiser2 = Gameboard('cruiser', 2, random12, random11)
var first2 = document.querySelector(`.d${random8}${random7}`)
var first21 = document.querySelector(`.d${random8}${random7+1}`)
var first22 = document.querySelector(`.d${random8}${random7+2}`)
var first23 = document.querySelector(`.d${random8}${random7+3}`)

var second2 = document.querySelector(`.d${random10}${random9}`)
var second21 = document.querySelector(`.d${random10}${random9+1}`)
var second22 = document.querySelector(`.d${random10}${random9+2}`)

var third2 = document.querySelector(`.d${random12}${random11}`)
var third21 = document.querySelector(`.d${random12}${random11+1}`)

first2.innerHTML = "B." // different innerHTML from the player, so that the points scored are correctly scored for the right player
first21.innerHTML = "B."
first22.innerHTML = "B."
first23.innerHTML = "B."

second2.innerHTML = "S."
second21.innerHTML = "S."
second22.innerHTML = "S."

third2.innerHTML = "C."
third21.innerHTML = "C."

}


var played = [] // this array will store all the already played shots, that way they won't be plays that have been already played

function Rdm2(shot){ // this function is triggered if the attack function hits, then it triggers that the computer semi IA knows where to play again, not totally randomly. So I suggest to read first the attack function to understand 

  let secondshot = shot.classList.value
  let onesec = parseInt(secondshot.substring(1,2))
  let twosec = parseInt(secondshot.substring(2,3))
  let shot2 = document.querySelector(`.c${onesec}${twosec+1}`) // be default the next hit goes to the right next cell


if (document.querySelector(`.c${onesec}${twosec+1}`) == null) // if the next cell doesn't exist (border of the grid) then go to the left direction for the hit

{
    
    shot2 = document.querySelector(`.c${onesec}${twosec-1}`)
}

else if (document.querySelector(`.c${onesec}${twosec+1}`).innerHTML =='.') // if the next cell has already been targeted, go to the left for the next hit

{shot2 = document.querySelector(`.c${onesec}${twosec-1}`)

}
else if (document.querySelector(`.c${onesec}${twosec+1}`).outerHTML == `<img src="../fire.png">`) // if the next cell has already been hit, go to the left

{shot2 = document.querySelector(`.c${onesec}${twosec-1}`)

}
else if (document.querySelector(`.c${onesec}${twosec+1}`).innerHTML =='')  // but if the next cell is unknown he goes to the right, we could delete this but that way the IA would be too smart because it would know that there is nothing there so it would go other way

{

 shot2 = document.querySelector(`.c${onesec}${twosec+1}`)

}

played.push(shot2.classList.value) // we push to the array the coordinates the computer plays, that way he won't play there again

  shot = shot2 // that way when we will call the Rdm2 function again with the shot argument, the reference will be this new cell, that way it goes +1 each time to the right for instance

  
 if (shot2.innerHTML == 'B') // if the computer strikes here we know it's a HIT
  { 
   
    setTimeout(() => { // timeout to be a little prettier
        shot2.outerHTML = `<img src="../fire.png">` // if HIT, then the cell transform to img fire.png

    boat.ship.damage(1); // one damage to the boat ship because the innerHTML is 'B'
    Rdm2(shot) // since it's a hit, the function triggers again, because when you hit you play again, but this time the shot argument is equal to shot2 variable, see above "shot = shot2"


      }, 500);
  }
else if (shot2.innerHTML == 'S')
      {
       setTimeout(() => {
        shot2.outerHTML = `<img src="../fire.png">`

       submarine.ship.damage(1);
       Rdm2(shot)


          }, 500);


      }
else if (shot2.innerHTML == 'C')
   {
       setTimeout(() => {
        shot2.outerHTML = `<img src="../fire.png">`

       cruiser.ship.damage(1);
       Rdm2(shot)


          }, 500);

   }

else if (shot2.innerHTML == `<img src="../fire.png">`)
   {       setTimeout(() => {

    shot2.outerHTML = `<img src="../fire.png">` // if it has already been shot, do nothing
     
        }, 500);


   }

else if (shot2.innerHTML == '.')
   {
    setTimeout(() => {

        shot2.innerHTML = '.' // if it has already been targetted, do nothing
     
  
     }, 500);
    

   }

else if (shot2.innerHTML == '')
   {
    setTimeout(() => {

        shot2.innerHTML = '.' // if it is empty, signal the miss
     
  
     }, 500);

   }

   
   if (boat2.ship.damage(0) == 0 && submarine2.ship.damage(0) == 0 && cruiser2.ship.damage(0) == 0 ) // cheking if there is a winner
   {
   
       setTimeout(() => {
   alert("you won")      }, 500);
   }
   else if (boat.ship.damage(0) == 0 && submarine.ship.damage(0) == 0 && cruiser.ship.damage(0) == 0)
   
   {
   
   setTimeout(() => {
       alert("you lost")  }, 500);
   }
   
 
    

}

function Attack(e){ // the primary attack function


    var clickval = e.target.innerHTML // we retrieve the innerHTML of the click
    var clickval2 = e.target.classList.value // we retrieve the class value of the click


var x = parseInt(clickval2.substring(1,2)) // thanks to the class value we can extract coordinnates, minus the letter, thats why there is a substring, because the grid is made from class 00 to 99, so 99 is x : 9 and y : 9 , 10th cell and 10th row (starting from 0)
var y = parseInt(clickval2.substring(2,3))


if (clickval === 'B.')  // If the player clicks here we know it's a HIT
{
   // boat2.ship.health = boat2.ship.health-1
   this.innerHTML="X"
   this.outerHTML = `<img src="../fire.png">`;

   boat2.ship.damage(1);
   Attack(e) // and then we trigger the function again since we have a hit

  
}



else if (clickval == 'S.')
{
    this.innerHTML="X"
    this.outerHTML = `<img src="../fire.png">`;
    submarine2.ship.damage(1);


    Attack(e)



}
else if (clickval == 'C.')
{
    this.innerHTML="X"
    this.outerHTML = `<img src="../fire.png">`;
    cruiser2.ship.damage(1);

    
    Attack(e)



}
else if (clickval == '-') // different innerHTML from the player (which is empty), that way we can't click on on own board and score points
{
    this.innerHTML = "." // missed obviously
    this.style.color = 'rgb(64,64,64)';
   
    var random13 = Math.floor(Math.random() * 10) // so it's the computer turn because we missed, so computer plays with random play
    var random14 = Math.floor(Math.random() * 10)

    var cell = 'c'+random13+random14

while (played.includes(cell) == true) // while we have already "randomed" those coordinates, we roll again until we never played that spot
{

    random13 = Math.floor(Math.random() * 10)
    random14 = Math.floor(Math.random() * 10)

     cell = 'c'+random13+random14

}


    
    var shot = document.querySelector(`.c${random13}${random14}`)

    played.push(shot.classList.value) // push to the array the coordinates the computer play so that he won't play them again


    if (shot.innerHTML == 'B')
   { 
    
    setTimeout(() => {
        shot.outerHTML = `<img src="../fire.png">`
    boat.ship.damage(1);
    Rdm2(shot) // hit so the computer plays again by calling the Rdm2 function
       }, 500); 
   }
    else if (shot.innerHTML == 'S')
       {
        setTimeout(() => {
            shot.outerHTML = `<img src="../fire.png">`
        submarine.ship.damage(1);
        Rdm2(shot)

           }, 500);


       }
    else if (shot.innerHTML == 'C')
    {
        setTimeout(() => {
            shot.outerHTML = `<img src="../fire.png">`
        cruiser.ship.damage(1);
        Rdm2(shot)

           }, 500);

    }


    else if (shot.innerHTML == '') // if the computer misses, we score the miss
{
        setTimeout(() => {
            shot.innerHTML = '.'
       
           }, 500);    }
 

}


if (boat2.ship.damage(0) == 0 && submarine2.ship.damage(0) == 0 && cruiser2.ship.damage(0) == 0 ) // cheking if there is a winner
{

    setTimeout(() => {
alert("you won")      }, 500);
}
else if (boat.ship.damage(0) == 0 && submarine.ship.damage(0) == 0 && cruiser.ship.damage(0) == 0)

{

setTimeout(() => {
    alert("you lost")  }, 500);
}
}



function restart(){

    window.location.reload() // reloads the page to play again with new board

}

