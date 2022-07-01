// ml5.js: Pose Estimation with PoseNet
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/Courses/ml5-beginners-guide/7.1-posenet.html
// https://youtu.be/OIo-DIOkNVg
// https://editor.p5js.org/codingtrain/sketches/ULA97pJXR

let video;
let poseNet;
let pose;
let skeleton;
let img;
var gif_loadImg, gif_createImg;
function preload() {
  img = loadImage('img/03.png');
  // img2 = loadImage('warai.jpg');
  // img3 = loadImage('warai.png');
  // gif_loadImg = loadImage("shinobu.gif");
  // gif_createImg = createImg("shinobu.gif");
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
  // frameRate(10);
}

function gotPoses(poses) {
  //console.log(poses); 
  if (poses.length > 0) {
    pose = poses[0].pose;
  }
}


function modelLoaded() {
  console.log('poseNet ready');
}

function draw() {
  // background(0);
  image(video, 0, 0);
  if(pose){
  fill(255,0,0);
  // image(gif_loadImg, 50, 50);
// image(gif_loadImg, 50, 50);
// ellipse(pose.nose.x,pose.nose.y,64);
image(img,pose.nose.x-150,pose.nose.y-200);
  // gif_createImg.position(pose.nose.x-150,pose.nose.y-200);
// image(img3,pose.nose.x-150,pose.nose.y-200);
// img1.resize(340,340);
img.resize(300, 300);
  }
  // noLoop();
}