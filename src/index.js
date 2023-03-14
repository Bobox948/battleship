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

let boat2;

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


   
const boat = Gameboard('boat', 4, random2, random1)
const submarine = Gameboard('submarine', 3, random4, random3)

const cruiser = Gameboard('cruiser', 2, random6, random5)

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
const submarine2 = Gameboard('submarine', 3, random10, random9)

const cruiser2 = Gameboard('cruiser', 2, random12, random11)
var first2 = document.querySelector(`.d${random8}${random7}`)
var first21 = document.querySelector(`.d${random8}${random7+1}`)
var first22 = document.querySelector(`.d${random8}${random7+2}`)
var first23 = document.querySelector(`.d${random8}${random7+3}`)

var second2 = document.querySelector(`.d${random10}${random9}`)
var second21 = document.querySelector(`.d${random10}${random9+1}`)
var second22 = document.querySelector(`.d${random10}${random9+2}`)

var third2 = document.querySelector(`.d${random12}${random11}`)
var third21 = document.querySelector(`.d${random12}${random11+1}`)

first2.innerHTML = "B"
first21.innerHTML = "B"
first22.innerHTML = "B"
first23.innerHTML = "B"

second2.innerHTML = "S"
second21.innerHTML = "S"
second22.innerHTML = "S"

third2.innerHTML = "C"
third21.innerHTML = "C"

}

function Attack(e){
    var clickval = e.target.innerHTML
    var clickval2 = e.target.classList.value


var x = parseInt(clickval2.substring(1,2))
var y = parseInt(clickval2.substring(2,3))


if (clickval === 'B')
{
    boat2.receiveAttack(x, y)
}

console.log(boat2)

}









