class Bob{
    constructor(x, y, radius, angle) {
        var options = {
            'restitution':1,
            'friction':0,
            'density':0.8,
            isStatic:true
        }
        this.radius = radius;
        this.body = Bodies.circle(x, y,radius/2 ,options);
        

        
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("red");
        ellipseMode(RADIUS);
        ellipse( 0, 0, this.radius, this.radius);
        pop();
      }
  }