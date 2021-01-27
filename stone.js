class Stone{

    constructor(x,y,radius){

    var options = {
        isStatic:false,
        friction: 1,
        density: 1.2  ,
        restitution: 0
    }

this.body = Bodies.circle(x,y,radius, options);
this.radius = radius;

World.add(world, this.body);
this.image=loadImage("Plucking mangoes/stone.png")
    }

display(){
    var pos = this.body.position;
push()
translate(pos.x,pos.y)
    imageMode(RADIUS);
    
    fill("green")
    image(this.image,0,0,this.radius,this.radius)
    pop()
}





}