var cake1, cake2, candle;
function setup() {
  createCanvas(800,800);

  cake1 = createSprite(400, 400, 100, 50);
  cake1.shapeColor = "red";
  cake2 = createSprite (400,350,70,50);
  cake2.shapeColor = "yellow";
  candle = createSprite(400, 300, 10, 40);
  candle.shapeColor = "blue";
  }

function draw() {
  background(255,255,255);
  drawSprites();
}
