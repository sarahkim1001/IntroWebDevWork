let rains= [];


function setup(){ // SETUP FUNCTION
    createCanvas(windowWidth*2,windowHeight*2);
    
    for(let i=0; i<200; i++){ // conditions for the rain instance 
        let x= random(width);
        let y= random(height);
        let r= random(3);
      let rp = new Rain(x,y,r); // creating a new instance of the Rain class
      rains.push(rp);   
    }   
  }

  function draw(){
    background(0);

    for(var i=0; i<rains.length;i++){
     rains[i].exist(); // the functions of rain
        rains[i].fall();
    }
  }

class Rain { // RAIN CLASS AND QUALITIES 
  
    constructor(x,y,r){ //rain constructor: need x,y,r parameters 
      this.x=x;
      this.y=y;
      this.r=r;
      this.brightness= 160;
  
    }
    
    exist(){ // calls for the rain moelcules to be drawn(static)
      
        noStroke();
        let a= random(100,255);
        fill(this.brightness,a); // fill orginal 100 and random alpha (20,225)
        ellipse(this.x,this.y,this.r); // the rain molecules 
        
      }
  
    fall(){ // this is the movement path of the rain molecules 
      let w= random(-3,3); 
      let e= random(9,11);
      this.x=this.x+w; //x movement random(-10,10)
      this.y=this.y+e; // y movement --> increases 10 through each loop
      
      if(this.x>width){
        this.x=random(width); // if x becomes greater than the width it has random location set 
        this.y=0;
      }
      if(this.y>height){
    this.y=0; // if y exceeds the height of page, it starts from 0 
    this.x=random(width)
      }
    }
  }
  