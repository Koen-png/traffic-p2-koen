let car = document.getElementById('car');
let position = 600;
let drive;


function start(){
    position -= 5
    car.style.top = position + "px";
    drive = setTimeout(start, 30)
}

function stop(){
    clearTimeout(drive)
}

function again(){
    position = 600;
    car.style.top = position + "px";
}