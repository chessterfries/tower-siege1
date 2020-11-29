class Box extends BaseClass {
    constructor(x, y, width, height){
        var options = {
            restitution:0,
            friction:10,
            density:0
        }
      super(x,y,width,height,options);
    }
  display(){
      super.display();
      rectMode(CENTER);
      fill("blue");
      rect(this.body.position.x,this.body.position.y,this.width,this.height);
  }
  };
  