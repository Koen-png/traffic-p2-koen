let changedImage = document.getElementById("traffic-light")
let trafficLights = ["img/shutOff.png","img/trafficLightGreen.png","img/trafficLightYellow.png","img/trafficLightRed.png"]
function light(a){
    changedImage.src = trafficLights[a];
}
