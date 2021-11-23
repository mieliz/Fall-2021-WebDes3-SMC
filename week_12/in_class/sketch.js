let posX;
let posY;

let velX;
let velY;

let radius;
let circleClr;

//UI
let sliderHue;
let clickCounter;
let timer = 20

function setup(){
    let myCanvas = createCanvas(1000,600);
    myCanvas.parent('canvasParent');

    colorMode(HSB, 360, 100, 100)
    sliderHue = createSlider(0, 360, 0, 15);
    sliderHue.parent('canvasUI');
    sliderHue.style('width','200px');

    posX = width/2;
    posY = height/2;
    
    velX = 1.5;
    velY = 1;

    radius = 250;
    circleClr = color(24, 74, 86);

    clickCounter = 0;
}

function draw(){
    background(187, 38, 74);

    noFill();
    stroke(181, 18, 80);
    strokeWeight(5);
    rect(5,5,70,30,);

    textSize(24);
    textAlign(CENTER);
    strokeWeight(2);
    fill(181,0,100);
    text(clickCounter, 40, 21);

    noStroke();
    circleClr = color(sliderHue.value(), 8, 100);
    fill(circleClr);
    circle(posX, posY, radius *2);
    if(posX + radius >= width || posX - radius <= 0) {
        velX = velX * -1;
    }
    if(posY + radius >= height || posY - radius <=0){
        velY = velY *-1;
    }
    posX += velX;
    posY += velY;

    textAlign(CENTER, CENTER);
  textSize(150);
  text(timer, width/2, height/2);

  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  if (timer == 0) {
    textSize(32)
    text("GAME OVER", width/2, height*0.7);
    velX = 0;
    velY = 0;
  }

   
} // end of draw

function mouseReleased(){
    if(dist(mouseX, mouseY, posX, posY) < radius) {
        //circleClr = color(255,80,100);
        radius -= 10;
        clickCounter++;
        if(velX > 0) {
            velX++;
        }
        else{
            velX--;
        }
       

    }
    else {
        //circleClr = color(0, 80, 100);
    }
}

