let working;
let outOfOrder = false;
let trafficlight = document.getElementById("traffic-light");

function turnOn(){
    clearTimeout(working);
    working = setTimeout(turnRed, 0);
    working = setTimeout(turnGreen, 4000);
    working = setTimeout(turnYellow, 8000);
    working = setTimeout(turnOn, 10000);

}
function blink(){
    clearTimeout(working);
    working = setTimeout(turnOff, 500);
    working = setTimeout(turnYellow, 1000);
    working = setTimeout(blink, 1500);
}

function turnOff(){
    trafficlight.src = "img/shutOff.png"
    console.log("Off");
}

function turnOffForreal(){
    clearTimeout(working);
    turnOff();
}

function turnRed(){
    trafficlight.src = "img/trafficLightRed.png"
    console.log("Red");
}
function turnYellow(){
    trafficlight.src = "img/trafficLightYellow.png"
    console.log("Yellow");
}
function turnGreen(){
    trafficlight.src = "img/trafficLightGreen.png"
    console.log("Green");
}