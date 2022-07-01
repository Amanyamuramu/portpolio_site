let sample = [];
//a,s,d,f,e,w,z,xのみ
let animation = [];
let num;
function preload() {
  sample[0] = loadSound('sound/se2.wav');
  sample[1] = loadSound('sound/se2.wav');
  sample[2] = loadSound('sound/se3.wav');
  sample[3] = loadSound('sound/se4.wav');
	sample[4] = loadSound('sound/se5.wav');
	sample[5] = loadSound('sound/se6.wav');	
	sample[6] = loadSound('sound/se6.wav');
	sample[7] = loadSound('sound/se9.wav');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(0);
  if (animation.length > 0) {
    for (let i = 0; i < animation.length; i++) {
      animation[i].draw();
    }
  }
}
function keyTyped() {
  if (key == 'a') {
    sample[7].play();
    animation.push(new Anim_a());
  } else if (key == 's') {
    sample[4].play();
    animation.push(new Anim_s());
  } else if (key == 'd') {
    sample[2].play();
    animation.push(new Anim_d());
  } else if (key == 'f') {
    sample[3].play();
    animation.push(new Anim_f());
  } else if (key == 'z'){
		sample[5].play();
		animation.push(new Anim_z());
	} else if (key == 'w'){
		sample[2].play();
		animation.push(new Anim_w());
	}else if (key == 'e'){
		sample[5].play();
		animation.push(new Anim_e());
	}else if (key == 'x'){
		sample[7].play();
		animation.push(new Anim_x());
	}else if (key == 'm'){
		sample[6].play();
		animation.push(new Anim_m());
	}
	else if (key == 'l'){
		sample[7].play();
		animation.push(new Anim_l());
	}
  if (animation.length > 8) {
    animation.shift();
  }
}
class Anim_z {
  constructor() {
		strokeWeight(3);
    this.r = [];
		this.rad = [];
		
		for(var i = 0; i  < 10; i++){
			this.r[i] = random(255);
			this.rad[i] = random(400);
  }
	}
  draw() {
    // background(255);
		noFill();
		stroke(10,10);
    for(var i = 0; i <10; i++){
			stroke(this.r[i]);
    circle(width/2,height/2, this.rad[i]);
			this.rad[i]+=10;
		this.radius += 10;
		}
	}
}
// Animation S
class Anim_w {
  constructor() {
		strokeWeight(3);
    this.r = [];
		this.rad = [];
		
		for(var i = 0; i  < 10; i++){
			this.r[i] = random(255);
			this.rad[i] = random(800,1000);
  }
	}
  draw() {
		// background(0);
		noFill();
		stroke(10,10);
    for(var i = 0; i <10; i++){
			stroke(this.r[i]);
      circle(width/2,height/2, this.rad[i]);
			this.rad[i]-=10;
			if(this.rad[i] < 10){
			this.rad[i]=0;}
		}
	}
}

// Animation D
class Anim_d {
  constructor() {
		// fill(255);
		this.radius = random(100);
		this.y = height-100;
		this.x = [];
		for(var i = 0; i < 20; i++){
		this.x[i] = random(width);
		}
  }
  draw() {
    noStroke();
    fill(255);
		for(var i = 0; i < 20; i++){
    circle(this.x[i], this.y,this.radius-random(100));
		}
		this.y-=10;
  }
}

// Animation F
class Anim_f {
  constructor() {
		strokeWeight(3);
    this.r = [];
		this.rad = [];
		
		for(var i = 0; i  < 10; i++){
			this.r[i] = random(255);
			this.rad[i] = random(400);
  }
	}
  draw() {
    // background(255);
		noFill();
		stroke(10,10);
    for(var i = 0; i <10; i++){
			stroke(this.r[i]);
    circle(width/2-random(-50,50),height/2, this.rad[i]);
			this.rad[i]+=10;
		this.radius += 10;
		}
	}
}
class Anim_a {
  constructor() {
		strokeWeight(3);
    this.r = [];
		this.rad = [];
		
		for(var i = 0; i  < 10; i++){
			this.r[i] = random(255);
			this.rad[i] = random(800,1000);
  }
	}
  draw() {
		// background(0);
		noFill();
		stroke(10,10);
    for(var i = 0; i <10; i++){
			stroke(this.r[i]);
      circle(width/2-random(-50,50),height/2, this.rad[i]);
			this.rad[i]-=10;
			if(this.rad[i] < 10){
			this.rad[i]=0;}
		}
	}
}
class Anim_s {
  constructor() {
		this.posx = [];
		this.posy = [];
		this.speedX = [];
		this.speedY = [];
		this.num =100;
		this.r = 8;
		this.a = [];
		this.x = random(width);
		this.y = random(height/2-300,height/2+100);
		for(var i = 0; i < this.num; i++){
			this.posx[i] = this.x;
			this.posy[i] =  this.y;
			this.speedX[i] = random(-7,7);
			this.speedY[i] = random(-7,7);
			fill(random(255));
		}
	}
  draw() {
		// background(0);
		noStroke();
		fill(random(300));
		for(var i = 0; i < this.num; i++){
			this.speedY[i] += 0.1;
			this.posx[i] += this.speedX[i];
			this.posy[i] += this.speedY[i];
	}
		for(var j = 0 ; j < this.num; j++){
			// fill(random(100),100,100);
			circle(this.posx[j],this.posy[j],this.r);
		}
	}
}
class Anim_e {
  constructor() {
		// fill(255);
		this.radius = random(100);
		this.y = 0;
		this.x = [];
		for(var i = 0; i < 20; i++){
		this.x[i] = random(width);
		}
  }
  draw() {
    noStroke();
    fill(255);
		for(var i = 0; i < 20; i++){
    circle(this.x[i], this.y,this.radius-random(100));
		}
		this.y+=10;
  }
}
class Anim_x {
	constructor(){
	// background(255);
  this.num = 10;
  this.randomSpeed = 3;//randomSpeed
  this.vecLocation = [];
  this.vecVelocity = [];
	// noFill();
	// stroke(255);
  for(let i = 0; i < this.num; i++){
    this.vecLocation[i] = createVector(random(width), random(height));
    this.vecVelocity[i] = createVector(random(-this.randomSpeed,this.randomSpeed),random(-this.randomSpeed,this.randomSpeed));
	}
}
draw(){
	strokeWeight(2);
	stroke(255);
  for(let i = 0; i < this.num; i++){
    this.vecLocation[i].x+= this.vecVelocity[i].x;
    this.vecLocation[i].y += this.vecVelocity[i].y;
    ellipse(this.vecLocation[i].x,this.vecLocation[i].y,0.01);
    for(var j = 0; j< this.num; j++){
    let d = dist(this.vecLocation[j].x,this.vecLocation[j].y,this.vecLocation[i].x,this.vecLocation[i].y);
    if(d<550)line(this.vecLocation[j].x,this.vecLocation[j].y,this.vecLocation[i].x,this.vecLocation[i].y);
    // else fill(0);
    }
  }
}
}
class Anim_m {
  constructor() {
		strokeWeight(3);
    this.r = [];
		this.rad = [];
		
		for(var i = 0; i  < 10; i++){
			this.r[i] = random(255);
			this.rad[i] = random(800,1000);
  }
	}
  draw() {
		// background(0);
		noFill();
		stroke(10,10);
    for(var i = 0; i <10; i++){
			stroke(this.r[i]);
      circle(width/2-random(-50,50),height/2, this.rad[i]);
			this.rad[i]-=10;
			if(this.rad[i] < 10){
			this.rad[i]=0;}
		}
	}
}
class Anim_l {
  constructor() {
		strokeWeight(3);
    this.r = [];
		this.rad = [];
		
		for(var i = 0; i  < 10; i++){
			this.r[i] = random(255);
			this.rad[i] = random(800,1000);
  }
	}
  draw() {
		// background(0);
		noFill();
		stroke(10,10);
    for(var i = 0; i <10; i++){
			stroke(this.r[i]);
      circle(width/2-random(-50,50),height/2, this.rad[i]);
			this.rad[i]-=10;
			if(this.rad[i] < 10){
			this.rad[i]=0;}
		}
	}
}

