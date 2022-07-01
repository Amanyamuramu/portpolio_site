let num = 40;
let randomSpeed = 1.8;//randomSpeed
let vecLocation = [];
let vecVelocity = [];
let r = 0;
let g = 0;
let b = 0;
let bg;

function setup(){
  createCanvas(windowWidth,windowHeight);
  background(255);
  stroke(255,30);
  // colorMode(HSV,100);
  
  for(let i = 0; i < num; i++){
    vecLocation[i] = createVector(random(100,width-100), random(100,height-100));
    vecVelocity[i] = createVector(random(-randomSpeed,randomSpeed),random(-randomSpeed,randomSpeed));
  } 
}

function draw(){
	background(255);
  
  for(let i = 0; i < num; i++){
    vecLocation[i].x+= vecVelocity[i].x;
    vecLocation[i].y += vecVelocity[i].y;
    ellipse(vecLocation[i].x,vecLocation[i].y,0.01);
    if(vecLocation[i].x > width || vecLocation[i].x <0)
      vecVelocity[i].x = -vecVelocity[i].x;
    if(vecLocation[i].y > height || vecLocation[i].y <0) 
      vecVelocity[i].y = -vecVelocity[i].y;
    
    for(var j = 0; j< num; j++){
    let d = dist(vecLocation[j].x,vecLocation[j].y,vecLocation[i].x,vecLocation[i].y);
    if(d<150){
    line(vecLocation[j].x,vecLocation[j].y,vecLocation[i].x,vecLocation[i].y);

    let mouseD = dist(mouseX,mouseY,vecLocation[j].x,vecLocation[j].y);
    if(mouseD<120){
        line(mouseX,mouseY,vecLocation[i].x,vecLocation[i].y);
    }
    amane();
    stroke(0,r,b,0.15*b);
  }
    else fill(0);
    
    }
  }
  
}

function amane(){
  h = random(255);
  r = random(255);
  g = random(255);
  b = random(255);
}