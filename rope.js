class Rope
{
    constructor(bodyA, pointB)
    {
        var options = 
        {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.chain = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.chain);
    }

    display()
    {
        strokeWeight(4);
        var pointB = this.pointB;

        if(this.chain.bodyA != null)
        {
            var pointA = this.chain.bodyA.position;
            stroke(48,22,8);
            if(pointA.x>250 || pointA.x<150)
            {
                strokeWeight(2);
            }
            else
            {
                strokeWeight(4);
            }
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
    launch()
    {
        this.chain.bodyA = null;
    }
}