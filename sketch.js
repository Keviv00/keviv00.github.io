///Variables 
  var pink;
  var orange;
  var blue;
  var green;
  var yellow;
  var red
  var black;
  var grey;
  var stage = 0;
  var brush1;
  var previousBrushSize = 5;
  var brushSize = 5;

class Brush {
  constructor(size, colour, shape) {
    this.size = size;
    this.colour = colour;
    this.shape = shape;
    this.x = 0;
    this.y = 0;
  }

  setColour(colour) {
    this.colour = colour;
  }

  setSize(size) {
    this.size = size;
  }
  
  setShape(shape) {
    this.shape = shape;
  }

///Draw 
  paint() {
    if(mouseIsPressed){  
      stroke(this.colour); //colour of the outline of the shape/line
      fill(this.colour); //colour of the shape
      strokeWeight(this.size); //size of the shape/line outline
      
      //determines what shape brush tool is selected
      if (this.shape == 1) { 
      noErase(); // makes sure line/shape isnt set to be an erase
      line(mouseX, mouseY, pmouseX, pmouseY); //draw line
       }
      else if (this.shape == 2) { 
        noErase();
        square(mouseX, mouseY, this.size);
      }
      else if (this.shape == 3) {
        noErase();
        var halfSize = this.size/2;
         triangle(mouseX, mouseY-halfSize,mouseX-halfSize, mouseY+halfSize, mouseX+halfSize, mouseY+halfSize);  
      }
      else if (this.shape == 4) {
        image(flower,mouseX,mouseY,this.size*2,this.size*2);
      }
      else if (this.shape == 5) {
        erase(150, 150); 
        line(mouseX, mouseY, pmouseX, pmouseY); 
      }
    }
  }///close draw 
  

}

///defining colours
function initiateColors() {
   red = color(255, 0, 0); 
   pink = color(255, 0, 255);
   orange = color(235, 168, 52);
   blue = color(52, 82, 235);
   green = color(36, 207, 27);
   yellow = color(255, 236, 61);
   black = color(0, 0, 0);
   grey = color(211,211,211);
}///close defining colours

///create shape palettes
function drawShapes(){
  stroke(0);
  strokeWeight(1);
  fill(255);
  square(648,573,50);
  square(648,521,50);
  square(648,469,50);
  strokeWeight(5);
  line(662, 587, 688, 613);
  square(658,531,30);
  triangle(673, 481, 685, 506, 660, 506);
  noStroke();
}///close create shape palettes

///create colour palettes
function drawSquares() {
  noStroke();
  fill(pink);
  square(0, 0, 50);
  fill(orange);
  square(0, 50, 50);
  fill(blue);
  square(0, 100, 50);
  fill(green);
  square(0, 150, 50);
  fill(yellow);
  square(0, 200, 50);
  fill(red)
  square(0, 250, 50);
  fill(grey);
  square(0, 300, 50);
  fill(black);
  square(0, 350, 50);
}///close create colour palettes

///change brush colour or shape from colour palette
function mousePressed(){
  if(stage == 0) {
  stage = 1;
  }///removes splash screen after first mousepress
  
  //sets the colour of the brush when clicking within in square colour palettes
  if(mouseX < 50) {
    if (mouseY < 50) {
      brushSize = 0;
      brushColor = pink;
    }
    else if (mouseY > 50 && mouseY < 100) {
      brushSize = 0;
      brushColor = orange;
    }
    else if (mouseY > 100 && mouseY < 150) {
      brushSize = 0;
      brushColor = blue;
    }
    else if (mouseY > 150 && mouseY < 200) {
      brushSize = 0;
      brushColor = green;
    }
    else if (mouseY > 200 && mouseY < 250) {
      brushSize = 0;
      brushColor = yellow;
    }
    else if (mouseY > 250 && mouseY < 300) {
      brushSize = 0;
      brushColor = red;
    }
    else if (mouseY > 300 && mouseY < 350) {
      brushSize = 0;
      brushColor = grey;
    }
     else if (mouseY > 350 && mouseY < 400) {
      brushSize = 0;
      brushColor = black;
    }
  }
  //setting brush shape
  else if (mouseX > 648) {
    if (mouseY > 469 && mouseY < 521) {
      brushShape = 3;
    }
    else if (mouseY > 521 && mouseY < 573) {
      brushShape = 2;
    }
    else if (mouseY > 573) {
      brushShape = 1;
    }
    else if (mouseY > 419 && mouseY < 469) {
      brushShape = 4;
    }
    else if (mouseY > 369 && mouseY < 419) {
      brushShape = 5;
    }
  }
  else {
    brushSize = previousBrushSize;
  }
}///close change brush colour or shape from colour palette


/// Change brush size, clear screen
function keyPressed() {
    if (keyCode == UP_ARROW) {
      brushSize = brushSize + 5;
      previousBrushSize = brushSize;
    } 
      else if (keyCode == DOWN_ARROW) {
        if (brushSize > 0) {
      brushSize = brushSize - 5;
      previousBrushSize = brushSize;
        }
    } 
      else if (keyCode == BACKSPACE) {
      background(255);
    }   
}/// close Change brush size, clear screen

///Splash Screen
function splash(){
  background(251,251,251);
  fill(0);

  //title 
  textFont('Helvetica');
  textAlign(CENTER, CENTER);
  textSize(80);
  text('DRAWBOARD', width/2, height/2 - 150);
  textSize(12);
  text('BY VIVEK.', width/2, height/2 - 100);
  
  //instructions
  textSize(15);
  text('USE MOUSE TO DRAW', width/2, height/2 - 30);
  text('CLICK PALETTE TO CHANGE COLOUR', width/2, height/2);
  text('UP & DOWN ARROW KEYS TO CHANGE BRUSH SIZE', width/2, height/2 +30);
  text('BACKSPACE TO CLEAR SCREEN', width/2, height/2 + 60);
  text('SELECT COLOUR TO START', width/2, height/2 + 250); 
}///Close splash

///brush size indicator
function displayTextSize(){
    fill(0);
    textSize(15); 
    erase();
    rect(650,0,50,25);
    noErase();
    text("Size: ", 655, 10);
    text(brushSize, 685, 10); 
}///close brush size indicator


function setup() {
  createCanvas(700,625);
  initiateColors();
  brushColor = color(0, 0, 0);
  brushShape = 1;
  eraser = loadImage("eraser.png");
  flower = loadImage("flower.jpeg");
  splash();
}

function draw() {
    if (stage == 1){
      background(251,251,251);
      stage = 2;
    }
    noStroke();
    displayTextSize();
    drawSquares();
    drawShapes();
    image(flower,648,419,50,50);
    image(eraser,648,369,50,50);
    brush1 = new Brush(brushSize, brushColor, brushShape);
    brush1.paint();
}