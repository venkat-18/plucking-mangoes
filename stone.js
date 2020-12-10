class Stone{
    constructor(x,y){
        var options={
            isStatic:true,
            'restitution':0,
            'friction':1,
            'density':1.2,
        }
        this.image=loadImage("stone.png");
this.body=Bodies.rectangle(x,y,30,30,options);
this.width=30;
this.height=30;
World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(3);
        fill("grey");
        rect(0,0,this.width,this.height);
        pop();
    }
}