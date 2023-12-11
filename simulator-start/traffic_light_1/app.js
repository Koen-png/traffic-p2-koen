let trafficLights = ["trafficLightGreen.png","trafficLightYellow.png","trafficLightRed.png"];
let changedImage = document.getElementById("traffic-light");
let i = trafficLights.length - 1;

function changeTrafficLight(){
    i--;
    if (i < 0){
        i = trafficLights.length -1;
    }
    changedImage.src = trafficLights[i]
}
