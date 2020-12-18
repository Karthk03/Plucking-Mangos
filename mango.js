class Mango
{
    constructor(x,y,radius)
    {
        var options = 
        {
            density: 1.2,
            isStatic: true,
            restitution: 0.5
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();

        translate(this.body.position.x, this.body.position.y);
        rotate(angle);

        fill("yellow");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius*2);

        pop();
    }
}