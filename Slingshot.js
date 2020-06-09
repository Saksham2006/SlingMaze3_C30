class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 30
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke("white");
            strokeWeight(3);
            if(pointA.x < 220) {
                line(pointA.x, pointA.y, pointB.x -50, pointB.y);
                line(pointA.x, pointA.y, pointB.x + 50, pointB.y - 3);
            }
            else{
                line(pointA.x, pointA.y, pointB.x -50, pointB.y);
                line(pointA.x, pointA.y, pointB.x + 50, pointB.y - 3);
            }
           
            
            pop();
        }
    }
    
}