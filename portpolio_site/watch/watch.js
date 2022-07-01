

function setup() {
    // blendMode(SCREEN);
    createCanvas(window.innerWidth, window.innerHeight); 
  }
  
    function draw() {     
    strokeWeight(2);
    background(255);
    translate(width/2,height/2);
    angleMode(DEGREES); 
    let h = hour();
    let m = minute();
    let s = second();
    noFill();
    stroke(16);
     circle(0,0,300);
    fill(255);               
     text(h + ':' + m + ':' + s,-20,70);
    
    art();
      
   
    let sAngle = map(s,0,60,0,360);
    var mAngle = map(m,0,60,0,360);
    var hAngle = map(h%12,0,12,0,360);
    
    push();
    rotate(-90);
    strokeWeight(3);
    stroke(1);
    rotate(sAngle);
    line(0,0,130,0);
    pop();
                   
    push();
    strokeWeight(5);
    rotate(-90);
    stroke(1);
    rotate(mAngle);
    line(0,0,100,0);
    pop();
      
    push();
    strokeWeight(7);
    rotate(-90);
    stroke(16, 192, random(128,192), 180);
    rotate(hAngle);
    line(0,0,75,0);
    pop();
    }
  
  function art (){
    for(var i = 0; i< 12; i++){
       noStroke();
      fill(16, random(128, 192), random(128, 192), 180);
      ellipse(0,150,15,15);
      rotate(30);
    
    }
  }