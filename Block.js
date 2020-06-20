class Block {
    constructor(x,y,width,height) {
      var options = {
        restitution:0.5,
        friction: 0.0,
        //  isStatic: false
      }
      
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visibility = 255;
      World.add(world, this.body);
      this.visibility = 255;
    }

    score(){
      //console.log(this.body);
      if(this.body.velocity.y > 2.5 && this.body.velocity.y < 3.06){
        console.log(this.body.velocity.y);
        score = score+1;
      }
    }
    display(color){

     
      if(this.body.speed < 4){
              fill(color);
              var angle= this.body.angle;
              var pos = this.body.position;
              push();
              translate(pos.x,pos.y);
              rotate(angle);
              rectMode(CENTER);
              rect(0, 0, this.width, this.height);
              pop();
       }
       else{
              World.remove(world, this.body);             
              push();
              fill(color);
              this.visiblity = this.visiblity - 1;
              //score = score +1;
              // tint(255,this.Visiblity);
              pop();
         
       }
           
    }
}


