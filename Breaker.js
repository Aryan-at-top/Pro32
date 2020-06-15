class Breaker{
    constructor(x, y,radius) {
      var options={
        isStatic:false,
        'restitution':0.8,
        'friction':0.5,
        'density':1.0
      }
        this.body=Bodies.circle(x, y,radius,options);
        this.radius=radius;
        World.add(world, this.body);
        this.image = loadImage("images/bird.png");
      }
      display(){
        push()
        image(this.image,this.body.position.x,this.body.position.y, this.radius);
        fill("yellow")
        pop()
      }
  }