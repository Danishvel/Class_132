img = "";
Status = " ";
L = " ";
X = "0";
Y = "0";
H = "0";
W = "0";
LX = "0";
LY = "0";
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
    rect(X, Y, H, W);
    text(L, LX, LY);
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
        L = results[0].label;
        X = results[0].x;
        Y = results[0].y;
        H = results[0].height;
        W = results[0].width;
        LX = X + 10;
        LY = Y + 10;
    }
}