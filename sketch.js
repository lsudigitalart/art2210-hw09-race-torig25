
let rShip1, rShip2, rShip3, rShip4, rShip5, rShip6, rShip7;
let startRace = false()

function setup() {
  createCanvas(1600, 400);

  //Instance of objects
  rShip1 = new Spaceship(30, 25, 1.016, "green"); 
  rShip2 = new Spaceship(80, 25, 1.019, "blue");
  rShip3 = new Spaceship(130, 25, 1.012, "red");
  rShip4 = new Spaceship(180, 25, 1.014, "yellow");
  rShip5 = new Spaceship(230, 25, 1.018, "orange");
  rShip6 = new Spaceship(280, 25, 1.015, "purple");
  rShip7 = new Spaceship(330, 25, 1.013, "white");
}
  startRace();

function mousePressed() {
  startRace = true
  }


function draw() {
  background(0);

  //Display Ships
  rShip1.display();
  rShip2.display();
  rShip3.display();
  rShip4.display();
  rShip5.display();
  rShip6.display();
  rShip7.display();

  rShip1.move();
  rShip2.move();
  rShip3.move();
  rShip4.move();
  rShip5.move();
  rShip6.move();
  rShip7.move();
}

//Temp variables
function Spaceship(tempY, tempSize, tempSpeed, tempColor) { 

  this.speed = tempSpeed; 
  this.color = tempColor;
  this.size = tempSize;
  this.yPos = tempY;
  this.xPos = 20;


  this.display = function() {
    fill(this.color)
    ellipse(this.xPos, this.yPos, 40, 20);
  }

  this.move = function() {
    this.xPos = this.xPos * this.speed;
  }

  //Finish Line
  rect(1400, 0, 100, 400);
  fill(400);
  
  
}
