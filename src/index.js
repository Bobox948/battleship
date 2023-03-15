import { Gameboard } from "../gameboard.js"
import { Ship } from "../ship.js"

import { Player } from "../player.js"


document.addEventListener('DOMContentLoaded', function() { // making sure the doam is loaded first, after that we can locate elements by ID easily





for (let k=0; k<10; k++){ // for every grid cell, the loop creates a click event listenner that triggers the game function

        document.querySelector(`.c0${[k]}`).addEventListener('click', Attack)
        document.querySelector(`.d0${[k]}`).addEventListener('click', Attack)


   
}

for (let i=10; i<100; i++){ // for every grid cell, the loop creates a click event listenner that triggers the game function

    document.querySelector(`.c${[i]}`).addEventListener('click', Attack)
    document.querySelector(`.d${[i]}`).addEventListener('click', Attack)



}



Game()




})
let boat;
let boat2;
let submarine;
let submarine2;
let cruiser;
let cruiser2;

function Game(){

    var player = document.querySelector('#name1').value

    const player1 = Player(player)


    // place the ships first randomly

   var random1 = Math.floor(Math.random() * (6 - 0 + 1) + 0)
   var random2 = Math.floor(Math.random() * (3 - 0 + 1) + 0)
   var random3 = Math.floor(Math.random() * (7 - 0 + 1) + 0)
   var random4 = Math.floor(Math.random() * (6 - 4 + 1) + 4)
   var random5 = Math.floor(Math.random() * (8 - 0 + 1) + 0)
   var random6 = Math.floor(Math.random() * (9 - 7 + 1) + 7)


   
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

first.innerHTML = "B"
first1.innerHTML = "B"
first2.innerHTML = "B"
first3.innerHTML = "B"

second.innerHTML = "S"
second1.innerHTML = "S"
second2.innerHTML = "S"

third.innerHTML = "C"
third1.innerHTML = "C"



// player random

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

first2.innerHTML = "B."
first21.innerHTML = "B."
first22.innerHTML = "B."
first23.innerHTML = "B."

second2.innerHTML = "S."
second21.innerHTML = "S."
second22.innerHTML = "S."

third2.innerHTML = "C."
third21.innerHTML = "C."

}

function Attack(e){

    
    var clickval = e.target.innerHTML
    var clickval2 = e.target.classList.value


var x = parseInt(clickval2.substring(1,2))
var y = parseInt(clickval2.substring(2,3))


if (clickval === 'B.')
{
   // boat2.ship.health = boat2.ship.health-1

   boat2.ship.damage(1);
   this.innerHTML = 'X'
   this.style.color = 'red';
   var random13 = Math.floor(Math.random() * 10)
    var random14 = Math.floor(Math.random() * 10)

    var shot = document.querySelector(`.c${random13}${random14}`)

    if (shot.innerHTML == 'B')
   { 
    
    setTimeout(() => {
        shot.innerHTML = 'X'
    shot.style.color = 'red';
    boat.ship.damage(1)
       }, 500);
   }
    else if (shot.innerHTML == 'S')
       {
        setTimeout(() => {
            shot.innerHTML = 'X'
        shot.style.color = 'red';
        submarine.ship.damage(1)
           }, 500);


       }
    else if (shot.innerHTML == 'C')
    {
        setTimeout(() => {
            shot.innerHTML = 'X'
        shot.style.color = 'red';
        cruiser.ship.damage(1)
           }, 500);

    }

    else if (shot.innerHTML == '.' || shot.innerHTML == 'X')
{
    
    var random13 = Math.floor(Math.random() * 10)
    var random14 = Math.floor(Math.random() * 10)

    var shot = document.querySelector(`.c${random13}${random14}`)

    if (shot.innerHTML == 'B')
   { 
    
    setTimeout(() => {
        shot.innerHTML = 'X'
    shot.style.color = 'red';
    boat.ship.damage(1)
       }, 500);
   }
    else if (shot.innerHTML == 'S')
       {
        setTimeout(() => {
            shot.innerHTML = 'X'
        shot.style.color = 'red';
        submarine.ship.damage(1)
           }, 500);


       }
    else if (shot.innerHTML == 'C')
    {
        setTimeout(() => {
            shot.innerHTML = 'X'
        shot.style.color = 'red';
        cruiser.ship.damage(1)
           }, 500);


    }

    else if (shot.innerHTML == 'X')

    { shot.innerHTML='X'}

    else{

        setTimeout(() => {
            shot.innerHTML = '.'
       
           }, 500);    }

        }

    else{

        setTimeout(() => {
            shot.innerHTML = '.'
       
           }, 500);
    }
 


}



else if (clickval == 'S.')
{
    submarine2.ship.damage(1);
    this.innerHTML = 'X'
    this.style.color = 'red';

    var random13 = Math.floor(Math.random() * 10)
    var random14 = Math.floor(Math.random() * 10)

    var shot = document.querySelector(`.c${random13}${random14}`)

    if (shot.innerHTML == 'B')
   { 
    
    setTimeout(() => {
        shot.innerHTML = 'X'
    shot.style.color = 'red';
    boat.ship.damage(1)
       }, 500);
   }
    else if (shot.innerHTML == 'S')
       {
        setTimeout(() => {
            shot.innerHTML = 'X'
        shot.style.color = 'red';
        submarine.ship.damage(1)
           }, 500);


       }
    else if (shot.innerHTML == 'C')
    {
        setTimeout(() => {
            shot.innerHTML = 'X'
        shot.style.color = 'red';
        cruiser.ship.damage(1)
           }, 500);

    }
    else if (shot.innerHTML == '.' || shot.innerHTML == 'X')
    {
        
        var random13 = Math.floor(Math.random() * 10)
        var random14 = Math.floor(Math.random() * 10)
    
        var shot = document.querySelector(`.c${random13}${random14}`)
    
        if (shot.innerHTML == 'B')
       { 
        
        setTimeout(() => {
            shot.innerHTML = 'X'
        shot.style.color = 'red';
        boat.ship.damage(1)
           }, 500);
       }
        else if (shot.innerHTML == 'S')
           {
            setTimeout(() => {
                shot.innerHTML = 'X'
            shot.style.color = 'red';
            submarine.ship.damage(1)
               }, 500);
    
    
           }
        else if (shot.innerHTML == 'C')
        {
            setTimeout(() => {
                shot.innerHTML = 'X'
            shot.style.color = 'red';
            cruiser.ship.damage(1)
               }, 500);
    
    
        }
    
        else if (shot.innerHTML == 'X')
    
        { shot.innerHTML='X'}
    
        else{
    
            setTimeout(() => {
                shot.innerHTML = '.'
           
               }, 500);    }
    
            }
    else{

        setTimeout(() => {
            shot.innerHTML = '.'
       
           }, 500);    }
 


}
else if (clickval == 'C.')
{
    cruiser2.ship.damage(1);
    this.innerHTML = 'X'
    this.style.color = 'red';
    var random13 = Math.floor(Math.random() * 10)
    var random14 = Math.floor(Math.random() * 10)

    var shot = document.querySelector(`.c${random13}${random14}`)

    if (shot.innerHTML == 'B')
   { 
    
    setTimeout(() => {
        shot.innerHTML = 'X'
    shot.style.color = 'red';
    boat.ship.damage(1)
       }, 500);
   }
    else if (shot.innerHTML == 'S')
       {
        setTimeout(() => {
            shot.innerHTML = 'X'
        shot.style.color = 'red';
        submarine.ship.damage(1)
           }, 500);


       }
    else if (shot.innerHTML == 'C')
    {
        setTimeout(() => {
            shot.innerHTML = 'X'
        shot.style.color = 'red';
        cruiser.ship.damage(1)
           }, 500);

    }
    else if (shot.innerHTML == '.' || shot.innerHTML == 'X')
    {
        
        var random13 = Math.floor(Math.random() * 10)
        var random14 = Math.floor(Math.random() * 10)
    
        var shot = document.querySelector(`.c${random13}${random14}`)
    
        if (shot.innerHTML == 'B')
       { 
        
        setTimeout(() => {
            shot.innerHTML = 'X'
        shot.style.color = 'red';
        boat.ship.damage(1)
           }, 500);
       }
        else if (shot.innerHTML == 'S')
           {
            setTimeout(() => {
                shot.innerHTML = 'X'
            shot.style.color = 'red';
            submarine.ship.damage(1)
               }, 500);
    
    
           }
        else if (shot.innerHTML == 'C')
        {
            setTimeout(() => {
                shot.innerHTML = 'X'
            shot.style.color = 'red';
            cruiser.ship.damage(1)
               }, 500);
    
    
        }
    
        else if (shot.innerHTML == 'X')
    
        { shot.innerHTML='X'}
    
        else{
    
            setTimeout(() => {
                shot.innerHTML = '.'
           
               }, 500);    }
    
            }
    else{

        setTimeout(() => {
            shot.innerHTML = '.'
       
           }, 500);    }
 


}
else {
    this.innerHTML = "."
    this.style.color = 'black';
    var random13 = Math.floor(Math.random() * 10)
    var random14 = Math.floor(Math.random() * 10)

    var shot = document.querySelector(`.c${random13}${random14}`)

    if (shot.innerHTML == 'B')
   { 
    
    setTimeout(() => {
        shot.innerHTML = 'X'
    shot.style.color = 'red';
    boat.ship.damage(1)
       }, 500);
   }
    else if (shot.innerHTML == 'S')
       {
        setTimeout(() => {
            shot.innerHTML = 'X'
        shot.style.color = 'red';
        submarine.ship.damage(1)
           }, 500);


       }
    else if (shot.innerHTML == 'C')
    {
        setTimeout(() => {
            shot.innerHTML = 'X'
        shot.style.color = 'red';
        cruiser.ship.damage(1)
           }, 500);

    }
    else if (shot.innerHTML == '.' || shot.innerHTML == 'X')
    {
        
        var random13 = Math.floor(Math.random() * 10)
        var random14 = Math.floor(Math.random() * 10)
    
        var shot = document.querySelector(`.c${random13}${random14}`)
    
        if (shot.innerHTML == 'B')
       { 
        
        setTimeout(() => {
            shot.innerHTML = 'X'
        shot.style.color = 'red';
        boat.ship.damage(1)
           }, 500);
       }
        else if (shot.innerHTML == 'S')
           {
            setTimeout(() => {
                shot.innerHTML = 'X'
            shot.style.color = 'red';
            submarine.ship.damage(1)
               }, 500);
    
    
           }
        else if (shot.innerHTML == 'C')
        {
            setTimeout(() => {
                shot.innerHTML = 'X'
            shot.style.color = 'red';
            cruiser.ship.damage(1)
               }, 500);

    
        }

        else if (shot.innerHTML == 'X')

        { shot.innerHTML='X'}

        else{

            setTimeout(() => {
                shot.innerHTML = '.'
           
               }, 500);    }
     
    
    }

    else{

        setTimeout(() => {
            shot.innerHTML = '.'
       
           }, 500);    }
 

}

var score = document.querySelector('.score')

if (boat2.ship.damage(0) == 0 && submarine2.ship.damage(0) == 0 && cruiser2.ship.damage(0) == 0 )
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

// créer une array shots, et après chaque coup ou miss on push dedans, 
// et après boucle while, tant que les coordonnées random sont dans l'array,
// on continue à en générer,on peut aussi se servir du missed array de l'objet de préférence







