class Box extends BaseClass{
  constructor(x, y){
    super(x,y,30,30);
    this.image = loadImage("block.png");
    this.Visiblity = 255;
  }

 display(){
  console.log(this.body.speed);
   if(this.body.speed < 6){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 30, 30);
     pop();
   }
  }
}