const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var randval;






function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  randval = Math.round(random(1,3));
  var block = new Block(400, 200, 100, 100, randval);
}

function draw() {
  background("lavendar");  
  block.display();
  drawSprites();
}