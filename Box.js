class Box{
    constructor(x,y,width,height) {
      var options = {
          isStatic:false,
          'restitution':0.4, 
          'friction':0.8
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.a = 255
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("images/enemy.png");
    }
    display(){
      push();
      imageMode(CENTER);
      if (this.body.speed>2.5){
        this.a=this.a-2
        tint(255,this.a)
        World.remove(world,this.body)
        pop();
      }
      else{
        fill("red");
        image(this.image,this.body.position.x,this.body.position.y, this.width, this.height); 
      }
     
    } 
    score(){
      textSize(24)
      text("score : "+sc,300,50)
      if (this.a<=0&&this.a>=-1){
       sc=sc+1
      }
    }

  };