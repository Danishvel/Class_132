img = "";
Status = " ";
function preload(){
    img = loadImage("dog_cat.jpg");
}
function setup() {
    Canvas = createCanvas(640, 420);
    Canvas.center();

    Coco = ml5.objectDetector('cocossd', modelloaded);
}
function draw() {
    image(img, 0, 0, 640, 420);
    stroke('red');
    noFill();
    rect(90, 50, 250, 360);
    text("Dog", 90, 40);
    stroke('yellow');
    noFill();
    rect(290, 70, 300, 330);
    text("Cat", 290, 60);
}
function modelloaded() {
    console.log("Coco SSD Is Loaded Successfully!!");
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    Status = true;
    Coco.detect(img, gotresults);
}
function gotresults(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
    }
}