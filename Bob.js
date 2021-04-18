class Bob{
    constructor(x, y ,r) {
        var options = {
            'restitution':1,
            'friction':0,
            'density':100.0,
            'isStatic': false,
            'frictionAir': 0.001,
            'frictionStatic': 0
        }
        this.body = Bodies.circle(x, y, r, options);
        this.radius = r;
        World.add(world, this.body);
        
      }
      display(){
        push();
       
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        fill("black");
        ellipse(0,0, this.radius,this.radius);
        pop();
      }
}