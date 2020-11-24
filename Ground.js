class Ground {
      constructor(x,y,width,height){
          var options =  {
            'restitution':0.3,
            'friction':1.0,
            'density':1.2
          }
          this.body = Bodies.rectangle(x,y,width,height,options);
          this.width = width;
          this.width = height;

          World.add(world,this.body);
      }
      display(){
          var pos = this.body.position;

      }
    }
