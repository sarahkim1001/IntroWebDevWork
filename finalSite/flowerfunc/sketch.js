let dead;
let pointillize = 200; 
let minipointillize= 30;

function preload(){
    dead=loadImage('../img/dead.JPG');
}

function setup() { 
    createCanvas(windowWidth,windowHeigh);
    background(0);
  }

  function draw() {
    scene1();
  }

  function scene1(){
    let p= random(-2,2);
    image(dead,0,0,800,600);
  
    let x = floor(random(dead.width));
    let y = floor(random(dead.height));
    let a= floor(random(350,450));
    let z= floor(random(250,350));
  
    let loc = (x + (y * dead.width)) * 4;
  
    dead.loadPixels(); 
    let r = dead.pixels[loc  ];
    let g = dead.pixels[loc + 1];
    let b = dead.pixels[loc + 2];
  
    noStroke();
    fill(r, g, b, 100);
    rect(x, y, pointillize, pointillize);
    rect(a,z,minipointillize, minipointillize);
  
    image(frame,0,0, 800+p,600+p);
  }
  