class mango1{
    constructor(x,y,r)
{
var options={
isStatic:true,
restitution:0,
friction:1,
density:1.2
}
this.x=x
this.y=y
this.r=r
this.image=loadImage("mango.png")
this.image.scale=0.2
this.body=Bodies.circle(this.x,this.y,this.r,options)
World.add(world,this.body)
}
display(){
    image(this.image,400,90,70,70)
    
}
}