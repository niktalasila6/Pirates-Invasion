class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.canon_img = loadImage("../assets/canon.png");
    this.cannonBase_img = loadImage("../assets/cannonBase.png");
    
  }
  
  display(){
    push();
    imageMode(CENTER);
    image(this.canon_img,this.x,this.y,this.width,this.height);
    pop();
    image(this.cannonBase_img,70,20,200,200);
    noFill();

  }

}
