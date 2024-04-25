
function setup(){ // SETUP FUNCTION
    createCanvas(windowWidth,windowHeight);
    
    for(let i=0; i<1000; i++){ // conditions for the rain instance 
        let x= random(width/2);
        let y= random(height);
        let r= random(3);
      let rp = new Rain(x,y,r); // creating a new instance of the Rain class
      rains.push(rp);   
    }   
    
    
     for(let i=0; i<700; i++){ // conditions for the rain instance 
        let x= random(width/2,width);
        let y= random(height*3/5);
        let w= random(90,210);
       let h= random(70,120);
      let c= new Cloud(x,y,w,h); // creating a new instance of the Cloud class
      clouds.push(c);   
    }   
  
  }

  function draw(){

    let b= random(30); // background color (left half)
    background(b);

    for(let i=0; i<height; i+=10){ // stitching (dualism --> everything has an opposite --> needs an opposite to exist)
        stroke(0);
        strokeWeight(2);
        line(width/2-5, i,width/2+5, i);   // middle 
        line(0,i,5,i); // left 
        line(width-5,i,width,i);//right
        line(i,0,i,5);// top
        line(i,height,i,height-5);//bottom
    }
  

    for(var i=0; i<rains.length;i++){
     rains[i].exist(); // the functions of rain
        rains[i].fall();
    }
  
    for(var i=0; i<clouds.length;i++){
        clouds[i].exist(); // the functions of rain
        clouds[i].pass();
        clouds[i].fluctuate();
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
      
      if(this.x>width/2){
        this.x=random(width/2); // if x becomes greater than the width it has random location set 
        this.y=0;
      }
      if(this.y>height){
    this.y=0; // if y exceeds the height of page, it starts from 0 
    this.x=random(width/2)
      }
    }
  
  }
  
  class Cloud { // CLOUD CLASS AND QUALITIES 
    
    constructor(x,y,w,h){ // constructor for the cloud
      this.x=x;
      this.y=y;
      this.w=w;
      this.h=h;   
    }
    
    
    exist(){ // for the cloud to exist 
  
    let a= random(2,11);
     fill(255,a);
      noStroke();
      ellipseMode(CORNER);
      ellipse(this.x,this.y,this.w,this.h);
    }
  
    
    pass(){ // movement of the cloud (left to right)
      this.x=this.x+random(-2,4);
      this.y= this.y+random(-2,2);
       
      if(this.x>width){ // containing clouds within the frame
        this.x=width/2
        this.y= this.y 
      }
      
      if(this.y>height*2/3){
        this.y= random(200);    
        this.x= width/2
      }
    }
     
    
  fluctuate(){ // function that controls the fluctuation of cloud size 
    this.w= this.w+random(-1,1);
    this.h= this.h+random(-1,1);
    
    if(this.w>200){ // controls the limit/ reset of the cloud size
    this.w= 120; // for w
    }
    
    if(this.h>120){ // for h
      this.h=100;   
   }
  }
  }
