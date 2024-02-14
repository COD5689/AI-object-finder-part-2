status = "";


function setup(){
    canvas = createCanvas(550, 450);
    canvas.center();
    webcam = createCapture(VIDEO);
    webcam.hide();
    webcam.size(550, 450);
    webcam.center();

}

function draw(){
    image(webcam, 0, 0, 550, 450);
}

function start(){
    cocossd = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Object Detecting...";
    value = document.getElementById("value").value; 
}

function modelLoaded(){
    console.log("model Loaded!");
    status = true;
}