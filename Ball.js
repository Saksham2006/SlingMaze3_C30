class Ball{
  constructor(x,y) {
      var options = {
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity,
        restitution: 1.0
      }
      this.body = Bodies.circle(x, y, 50, options);
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      ellipseMode(CENTER);
      ellipse(0, 0, 50);
      pop();
    }
}