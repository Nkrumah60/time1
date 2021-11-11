
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
let backgroundImg
let Bg

let inputBox
let button

let para


function preload(){

backgroundImg = loadImage("sunrise.png");

}

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  para = createElement('textarea','My name is Michael. My name is Michael.My name is Michael. My name is Michael.')
  para.position(550,400);

  inputBox = createInput("type your name");
  inputBox.position(550,250);

  button = createButton("Submit");
  button.position(600,300);

  button.mouseClicked(()=>{
    inputBox.remove();
    button.remove();

    let date = new Date();
    let hour = date.getHours();
    
    
   

    if(hour>=06 && hour<=11){
    
      console.log("goodMorning");
      text("Good Morning "+inputBox.value(),500,250);
    
    }
    
    if(hour>=12 && hour<=15){
    
    
      console.log("noon");
      text("Happy Noon "+inputBox.value(),500,250);
    
    }
    
    if(hour>=16 && hour<=17){
    
      //console.log("goodEvening");
      text("Good Evening "+inputBox.value(),500,250);
    
    }
    
    if(hour>=18 && hour<=24){
    //console.log("goodNight");
    
    text("Good Night "+inputBox.value(),500,250);
    text(para.value(),600,330);
    }
    
  });




  
  
  
  
  
}


function draw() 
{
  if(backgroundImg){
    
  }
  getTime();
  background(backgroundImg);
  Engine.update(engine);
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let seconds = date.getSeconds();
  textSize(30);
  text("Time: "+hour+": "+min+": "+seconds,30,50);
  window.reload();

  mouseClicked(button);
  
}

async function getTime(){

let response = await fetch("https://worldtimeapi.org/api/timezone/America/Los_Angeles");
let responseJSON = await response.json();
let dateTime = responseJSON.datetime;
let hour = dateTime.slice(11,13);
console.log(hour);

if(hour>=06 && hour<=11){

  bg = "morning.jpg"

  console.log("goodMorning");

}

if(hour>=12 && hour<=15){

  bg = "afternoon.jpg"
  console.log("noon");

}

if(hour>=16 && hour<=17){

  console.log("goodREvening");
  bg = "evening.jpg"

}

else{
console.log("goodNight");

bg = "night.jpg"

}

backgroundImg = loadImage(bg);


}



