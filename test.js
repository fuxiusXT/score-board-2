let myButtonOne = document.getElementsByClassName("one-btn");
let myButtonTwo = document.getElementsByClassName("two-btn");
let myButtonThree = document.getElementsByClassName("three-btn");


let count = 0;
let finalResultH = document.getElementById("result-h")


function onebtn(){
 myButtonOne = count += 1 
 finalResultH.textContent = myButtonOne

}
function twobtn(){
    myButtonTwo = count += 2
    finalResultH.textContent = myButtonTwo
}
function threebtn(){
    myButtonThree = count +=3
    finalResultH.textContent = myButtonThree
}

let myButtonJedan = document.getElementsByClassName("jedan-btn");
let myButtonDva = document.getElementsByClassName("dva-btn");
let myButtonTri = document.getElementsByClassName("tri-btn");
let finalResultG = document.getElementById("result-g")
let zbir = 0

function jedanbtn(){
    myButtonJedan = zbir += 1
    finalResultG.textContent = myButtonJedan
}

function dvabtn(){
    myButtonDva = zbir += 2
    finalResultG.textContent = myButtonDva
}
function tribtn(){
    myButtonTri = zbir += 3
    finalResultG.textContent = myButtonTri
}




function newgame(){
finalResultG.textContent = 0
finalResultH.textContent = 0
count = 0
zbir = 0
}