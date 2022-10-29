let timer = 5;
let oldframecount = 0;
function setup() {
  createCanvas(400, 400);
  frameRate(60);
  background('lightgrey');
  textAlign(CENTER, CENTER);
  textSize(450);
  fill('black');
  text(timer, width/2, height/2);
  colorMode(HSB,60);
  fill(0,60,60);
  arc(200, 200, 396, 396, -HALF_PI , -HALF_PI + ((TWO_PI /60) * 3));
}

function draw() {
  if (frameCount % 60 == 0 && timer > 0) {
    timer--;
    background('lightgrey');
    oldframecount = frameCount;
    textAlign(CENTER, CENTER);
    textSize(450);
    fill('black');
    text(timer, width/2, height/2);
  }
  if ( timer > 0 ) {
    //fill('red');
    let status = frameCount - oldframecount;
    //colorMode(HSB,60);
    fill(status, 60, 60)
    //arc(200, 200, 396, 396, -HALF_PI, -HALF_PI + (status * TWO_PI / 60 ));
    arc(200, 200, 396, 396, -HALF_PI + (status * TWO_PI / 60 ) , -HALF_PI + (status * TWO_PI / 60 ) + (TWO_PI / 60) + .01);
    //textAlign(CENTER, CENTER);
    //textSize(450);
    //fill('black');
    //text(timer, width/2, height/2);
  } else {
    noLoop();
  }
  
}
