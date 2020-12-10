class Tree{
    constructor(x,y,width,height){
        var options={
        isStatic:true
        }
        this.image=loadImage("tree.png");
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;


    push();
    translate(pos.x,pos.y);
    rectMode(CENTER);
    strokeWeight(3);
    fill("grey");
    image(this.image,0,0,this.width,this.height);
    pop();
    }
}